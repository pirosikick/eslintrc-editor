'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var browserSync = require('browser-sync');
var mainBowerFiles = require('main-bower-files');

var src = {
  sass: 'public/styles/**/*.{scss,sass}'
};

var dest = {
  webpack: '.tmp/scripts',
  webpackProd:'build/scripts',
  sass: '.tmp/styles',
  sassProd: 'build/styles',
  bower: '.tmp/lib',
}

var port = process.env.NODE_PORT || 3000;

var webpackRunner = function (isProd) {
  var config = require('./webpack.config');

  if (isProd) {
    config.output.path = __dirname + '/' + dest.webpackProd;
    config.plugins = config.plugins || [];
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({}))
  }

  return webpack(config);
}

var webpackCallback = function (done) {
  return function (err, stats) {
    if(err) throw new $.util.PluginError("webpack", err);
    $.util.log("[webpack]", stats.toString({ chunkModules: false, colors: true}));
    browserSync.reload();
    done && done();
  }
};

gulp.task('webpack', function (done) {
  webpackRunner().run(webpackCallback(done));
});

gulp.task('webpack-for-prod', function (done) {
  webpackRunner(true).run(webpackCallback(done));
});

gulp.task('watch-webpack', ['watch-webpack-config'], function () {
  webpackRunner().watch(200, webpackCallback());
});

gulp.task('watch-webpack-config', function () {
  var configPath = require.resolve('./webpack.config');

  gulp.watch(['webpack.config.js']).on('change', function (event) {
    if (event.type != 'deleted' && require.cache[ configPath ]) {
      delete require.cache[configPath];
      $.util.log("reload webpack.config.js");
    }
  });
});

gulp.task('sass', function () {
  return gulp.src(src.sass)
    .pipe($.sass({ outputStyle: 'nested', errorLogToConsole: true }))
    .pipe(gulp.dest(dest.sass))
    .pipe(browserSync.reload(stream));
});

gulp.task('sass-for-prod', function () {
  return gulp.src(src.sass)
    .pipe($.sass({ outputStyle: 'compressed', errorLogToConsole: true }))
    .pipe(gulp.dest(dest.sassProd));
});

gulp.task('main-bower-files', function () {
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest(dest.bower));
});

gulp.task('html', ['main-bower-files', 'webpack', 'sass'], function () {
  return gulp.src(src.html)
    .pipe($.usemin({
      css: ['concat'],
      js: ['concat']
    }))
    .pipe(gulp.dest(dest.html))
});

gulp.task('serve', ['watch'], function () {
  browserSync({
    server: {
      baseDir: ['public', '.tmp', 'build']
    },
    port: port,
    ghostMode: false
  });
});

gulp.task('start', ['build'], function () {
  browserSync({
    server: {
      baseDir: ['build']
    },
    port: port,
    ghostMode: false
  });
});

gulp.task('default', ['serve']);

gulp.task('watch', ['watch-webpack'], function () {
  gulp.watch([src.sass], ['sass']);
  gulp.watch(['bower.json'], ['main-bower-files']);
});

gulp.task('build', ['html']);
