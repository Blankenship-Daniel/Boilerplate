var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('app/styles/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/styles/css/'));
});

// Watch task
gulp.task('default', function() {
  gulp.watch('app/styles/sass/**/*.scss', ['styles']);
});
