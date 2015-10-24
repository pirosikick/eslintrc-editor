'use strict';
import {writeFile} from 'fs';
import _ from 'lodash';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import browserSync, {reload} from 'browser-sync';
import mainBowerFiles from 'main-bower-files';
import loadRules from 'eslint/lib/load-rules';
import del from 'del';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();

let src = {
  sass: 'public/styles/**/*.{scss,sass}',
  html: 'public/*.html',
  font: 'bower_components/font-awesome/fonts/**',
  eslintDocs: 'eslint/docs/**/*.md',
  ghPages: [
    'public/index.html',
    //'.tmp/index.html',
    '.tmp/**/*.{js,css,otf,eot,svg,ttf,woff,woff2,md}'
  ]
};

let dest = {
  scripts: '.tmp/scripts',
  webpackProd:'build/scripts',
  sass: '.tmp/styles',
  sassProd: 'build/styles',
  bower: '.tmp/lib',
  eslintdoc: 'src/docs',
  font: '.tmp/fonts',
  eslintRuleSchema: 'src/constants/eslintRuleSchema.json',
  deploy: '.deploy/'
}

let port = process.env.NODE_PORT || 3000;

const reactToHtml = () => {
  global.React = require('react');
  return require('./lib/server').toHtml();
};

const webpackConfig = require('./webpack.config');

gulp.task('webpack', (done) => {
  webpack(webpackConfig).run((err, stats) => {
    if(err) throw new $.util.PluginError("webpack", err);
    $.util.log("[webpack]", stats.toString({ chunkModules: false, colors: true}));
    done();
  });
});

gulp.task('watch-webpack', (done) => {
  webpack(webpackConfig).watch(200, (err, stats) => {
    if(err) throw new $.util.PluginError("webpack", err);
    $.util.log("[webpack]", stats.toString({ chunkModules: false, colors: true}));
  });

  done();
});

gulp.task('sass', () =>
  $.rubySass('public/styles/')
    .on('error', (err) => {
      $.util.log("[ruby-sass]", err.message);
    })
    .pipe(gulp.dest(dest.sass))
    .pipe(reload({ stream: true }))
);

gulp.task('main-bower-files', ['copy-font'], () => {
  let src = mainBowerFiles().concat([
    'node_modules/react/dist/react.min.js',
    'node_modules/react/dist/react.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/react-dom/dist/react-dom.js',
    'node_modules/immutable/dist/immutable.min.js',
    'node_modules/immutable/dist/immutable.js'
  ]);

  return gulp.src(src)
    .pipe(gulp.dest(dest.bower));
});

gulp.task('copy-font', () => gulp.src(src.font).pipe(gulp.dest(dest.font)));

gulp.task('minify-js', ['webpack'], () =>
  gulp.src(['.tmp/scripts/client.bundle.js'])
    .pipe($.uglify())
    .pipe($.rename('scripts/client.bundle.min.js'))
    .pipe(gulp.dest('.tmp/'))
);

gulp.task('html', ['babel', 'copy-json'], (done) => {
  let html = reactToHtml();
  writeFile('.tmp/index.html', html, done);
});

gulp.task('copy-json', () =>
  gulp.src(['src/**/*.json']).pipe(gulp.dest('lib'))
);

gulp.task('babel', () =>
  gulp.src(['src/**/*.{js,jsx}'])
    .pipe($.babel({ stage: 0 }))
    .pipe(gulp.dest('lib'))
);

gulp.task('eslint-rule-schema', (done) => {
  let schema = [];

  _.each(loadRules(), (filepath, name) => {
    schema.push({ name, schema: require(filepath).schema });
  });
  writeFile(dest.eslintRuleSchema, JSON.stringify(schema), (err) => {
    if (err) return $.util.log('[eslint-rule-schema]', err);
    done();
  })
});

gulp.task('serve', ['watch', 'main-bower-files'], () => {
  browserSync({
    server: {
      baseDir: ['public', '.tmp', 'build', 'eslint'],
      middleware: function (req, res, next) {
        if (req.url !== '/') {
          return next();
        }

        res.end(reactToHtml(), 'utf8');
      }
    },
    port: port,
    ghostMode: false
  });
});

gulp.task('deploy', ['build'], () => gulp.src(src.ghPages).pipe($.ghPages()));

gulp.task('copy:eslintDocs', () =>
  gulp.src(src.eslintDocs, { base: 'eslint' }).pipe(gulp.dest('.tmp'))
)

gulp.task('default', ['serve']);

gulp.task('watch', ['sass', 'watch-webpack'], () => {
  gulp.watch([src.sass], ['sass']);
  gulp.watch(['bower.json'], ['main-bower-files']);
  gulp.watch([src.html]).on('change', () => reload());
});

gulp.task('build', ['build-clean'], done => {
  runSequence(
    [
      'html',
      'main-bower-files',
      'minify-js',
      'sass',
      'copy-font',
      'copy:eslintDocs',
      'eslint-rule-schema'
    ],
    done
  );
});

gulp.task('build-clean', done => {
  del(['.tmp']).then(() => done());
});
