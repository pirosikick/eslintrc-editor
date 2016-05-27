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
const entries = ['src/client.jsx'];

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
    'node_modules/react/dist/*.js',
    'node_modules/react-dom/dist/*.js',
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
  const rule = require(file) || {};
  if (rule.meta) {
    return rule.meta;
  } else if (rule.schema) {
    return { schema: rule.schema };
  }
  return {};
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

glup.task('rule-metas', [
  'rule-metas:builtin',
  'rule-metas:react'
]);

gulp.task('rule-metas:builtin', done => {
  getRuleMetas('./repos/eslint/lib/rules/*.js')
    .then(metas => writeJSON('./src/rule-metas/builtin.json', metas))
    .then(done).catch(done);
});

gulp.task('rule-metas:react', done => {
  getRuleMetas('./repos/eslint-plugin-react/lib/rules/*.js')
    .then(metas => writeJSON('./src/rule-metas/eslint-plugin-react.json', metas))
    .then(done).catch(done);
});
