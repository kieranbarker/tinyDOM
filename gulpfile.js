const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const terser = require('gulp-terser');

const minify = () => (
  src('./src/tinydom.js')
    .pipe(terser({ keep_fnames: true, mangle: false }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./dist'))
);

exports.default = minify;
