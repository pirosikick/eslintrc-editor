'use strict';
const writeFile = require('fs').writeFile;
const reduce = require('lodash/collection/reduce');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const named = require('vinyl-named');
const webpack = require('webpack');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const loadRules = require('eslint/lib/load-rules');
const del = require('del');
const run = require('run-sequence');
const getHtml = require('./src/getHtml');

$.webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const src = {
  webpack: ['src/client.js'],
  json: ['src/**/*.json'],
  md: ['repos/eslint/docs/**/*.md'],
  deploy: [
    'build/**/*.{html,js,css}',
    'vendor/**/*.{js,css,otf,eot,svg,ttf,woff,woff2,md}'
  ],
  lib: [
    'node_modules/react/dist/react.min.js',
    'node_modules/react/dist/react.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/react-dom/dist/react-dom.js',
    'node_modules/immutable/dist/immutable.min.js',
    'node_modules/immutable/dist/immutable.js',
    'node_modules/es6-promise/dist/*.js',
    'node_modules/github-markdown-css/github-markdown.css',
    'node_modules/purecss/build/pure*.css',
    'node_modules/font-awesome/css/*'
  ],
  font: ['node_modules/font-awesome/fonts/*']
};
const tmp = {
  js: '.tmp/scripts',
  sass: '.tmp/styles'
};
const vendor = {
  lib: 'vendor/lib',
  font: 'vendor/fonts'
};
const build = {
  js: 'build/scripts',
  sass: 'build/styles',
};

const port = process.env.NODE_PORT || 3000;

gulp.task('default', ['start']);
gulp.task('start', ['clean'], done => {
  run('serve', done);
});
gulp.task('clean', done =>
  del(['.tmp', 'build', 'vendor'])
    .then(() => done)
    .catch(done)
);

gulp.task('serve', ['html', 'copy', 'watch'], () => {
  browserSync({
    server: {
      baseDir: ['.tmp', 'vendor'],
      middleware: function (req, res, next) {
        if (req.url !== '/') {
          return next();
        }

        res.end(getHtml(false), 'utf8');
      }
    },
    files: ['.tmp/**/*.{js,css,html}'],
    port: port,
    ghostMode: false
  });
});

gulp.task('serve:build', ['build'], () => {
  browserSync({
    server: {
      baseDir: ['build', 'vendor']
    },
    port: port,
    ghostMode: false
  });
});

gulp.task('watch', ['sass', 'webpack:watch'], () => {
  gulp.watch(src.sass, ['sass']);
});

gulp.task('build', ['clean'], done => {
  run(
    ['sass:min', 'webpack:min', 'copy'],
    'html:build',
    done
  );
});

gulp.task('deploy', ['build'], () => {
  return gulp.src(src.deploy).pipe($.ghPages())
});

gulp.task('webpack', () => {
  return gulp.src(src.webpack)
    .pipe(named())
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(tmp.js));
});

gulp.task('webpack:watch', () => {
  const config = Object.assign(webpackConfig, { watch: true });
  gulp.src(src.webpack)
    .pipe(named())
    .pipe($.webpack(config))
    .pipe(gulp.dest(tmp.js));
});

gulp.task('webpack:min', ['eslint-rule-schema'], () => {
  const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
  const plugins = [new UglifyJsPlugin()];
  const devtool = false;
  const config = Object.assign(webpackConfig, { plugins, devtool });
  return gulp.src(src.webpack)
    .pipe(named())
    .pipe($.webpack(config))
    .pipe(gulp.dest(build.js));
});

gulp.task('sass', () =>
  $.rubySass('src/styles/', { sourcemap: true })
    .on('error', $.rubySass.logError)
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(tmp.sass))
    .pipe(reload({ stream: true })));

gulp.task('sass:min', () =>
  $.rubySass('src/styles/')
    .on('error', $.rubySass.logError)
    .pipe($.cssnano())
    .pipe(gulp.dest(build.sass)));

const stringStream = (filename, string) => {
  const file = new $.util.File({
    cwd: "",
    base: "",
    path: filename,
    contents: new Buffer(string)
  });
  return new require('stream').Readable({
    objectMode: true,
    read () {
      this.push(file);
      this.push(null);
    }
  });
};

gulp.task('html', () =>
  stringStream('index.html', getHtml()).pipe(gulp.dest('.tmp')));
gulp.task('html:build', () =>
  stringStream('index.html', getHtml(true)).pipe(gulp.dest('build')));

gulp.task('eslint-rule-schema', (done) => {
  const schema = reduce(loadRules(), (schema, filepath, name) => {
    schema.push({ name, schema: require(filepath).schema });
    return schema;
  }, []);
  const schemaJson = JSON.stringify(schema, null, 2);
  return stringStream('built-in.json', schemaJson)
    .pipe(gulp.dest('src/data/rule-schema'));
});

gulp.task('copy', ['copy:md', 'copy:lib', 'copy:font']);
gulp.task('copy:md', () =>
  gulp.src(src.md, { base: 'repos/eslint' }).pipe(gulp.dest('vendor')));
gulp.task('copy:lib', () =>
  gulp.src(src.lib).pipe(gulp.dest(vendor.lib)));
gulp.task('copy:font', () =>
gulp.src(src.font).pipe(gulp.dest(vendor.font)));
