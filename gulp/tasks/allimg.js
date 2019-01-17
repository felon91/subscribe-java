module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('images/freejava/**/*.{png,jpg,svg}')
        .pipe($.gulp.dest('build/images/freejava'));
  });
};