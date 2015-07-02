'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import browserSync, {reload} from 'browser-sync';
import mainBowerFiles from 'main-bower-files';

const $ = gulpLoadPlugins();

let src = {
  sass: 'public/styles/**/*.{scss,sass}',
  html: 'public/*.html'
};

let dest = {
  webpack: '.tmp/scripts',
  webpackProd:'build/scripts',
  sass: '.tmp/styles',
  sassProd: 'build/styles',
  bower: '.tmp/lib',
  eslintdoc: 'src/docs'
}

let port = process.env.NODE_PORT || 3000;

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

gulp.task('sass', () => {
  return $.rubySass('public/styles/')
    .on('error', (err) => {
      $.util.log("[ruby-sass]", err.message);
    })
    .pipe(gulp.dest(dest.sass))
    .pipe(reload({ stream: true }));
});

gulp.task('main-bower-files', () => {
  let src = mainBowerFiles().concat([
    'node_modules/react/dist/react.min.js',
    'node_modules/react/dist/react.js'
  ]);

  return gulp.src(src)
    .pipe(gulp.dest(dest.bower));
});

gulp.task('html', ['main-bower-files', 'webpack', 'sass'], () => {
  return gulp.src(src.html)
    .pipe($.usemin({
      css: ['concat'],
      js: ['concat']
    }))
    .pipe(gulp.dest(dest.html))
});

gulp.task('eslintdoc2react', [], () => {
  let template =
`
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(\`<%= contents %>\`);
  }
});
`;

  return gulp.src('eslint/docs/**/*.md')
    .pipe($.replace('`', '\\`'))
    .pipe($.wrap(template))
    .pipe($.rename({ extname: '.js' }))
    .pipe(gulp.dest(dest.eslintdoc));
});

gulp.task('serve', ['watch'], () => {
  browserSync({
    server: {
      baseDir: ['public', '.tmp', 'build']
    },
    port: port,
    ghostMode: false
  });
});

gulp.task('start', ['build'], () => {
  browserSync({
    server: {
      baseDir: ['build']
    },
    port: port,
    ghostMode: false
  });
});

gulp.task('default', ['serve']);

gulp.task('watch', ['sass', 'watch-webpack'], () => {
  gulp.watch([src.sass], ['sass']);
  gulp.watch(['bower.json'], ['main-bower-files']);
  gulp.watch([src.html]).on('change', () => reload());
});

gulp.task('build', ['html']);
