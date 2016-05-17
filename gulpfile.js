const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
$.webpack = require('webpack-stream');
const named = require('vinyl-named');
const browserSync = require('browser-sync').create();
const glob = require('glob');

gulp.task('default', ['watch:webpack', 'serve']);

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: ['.tmp', 'static'],
    },
    files: ['{.tmp,static}/**/*.{js,css,html}']
  });
});

const webpackConfig = (opts) =>
  Object.assign({}, require('./webpack.config'), opts || {});
const entries = ['src/client.js'];

gulp.task('watch:webpack', ['copy-libs'], () => {
  return gulp.src(entries)
    .pipe(named())
    .pipe($.webpack(webpackConfig({ watch: true })))
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('webpack', () => {
  return gulp.src(entries)
    .pipe(named())
    .pipe($.webpack(webpackConfig()))
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('copy-libs', () => {
  const libs = [
    'node_modules/react/dist/react.js',
    'node_modules/react-dom/dist/react-dom.js',
  ];
  return gulp.src(libs).pipe(gulp.dest('.tmp/libs'));
});

const globp = pattern => {
  return new Promise((resolve, reject) => {
    glob(pattern, (err, files) => err ? reject(err) : resolve(files))
  });
};

const ruleName = file => path.basename(file, '.js');
const ruleMeta = file => {
  console.log(file);
  const rule = require(file) || {};
  return rule.meta || {};
};

const getRuleMetas = pattern =>
  globp(pattern).then(files => files.reduce((metas, file) => {
    metas[ruleName(file)] = ruleMeta(file);
    return metas;
  }, {}));

const writeJSON = (dest, data) =>
  new Promise((resolve, reject) => {
    const contents = JSON.stringify(data, null, 2);
    const callback = err => err ? reject(err) : resolve();
    fs.writeFile(dest, contents, callback);
  });

gulp.task('rule-metas:built-in', done => {
  getRuleMetas('./repos/eslint/lib/rules/*.js')
    .then(metas => writeJSON('./src/rule-metas/built-in.js', metas))
    .then(done).catch(done);
});
