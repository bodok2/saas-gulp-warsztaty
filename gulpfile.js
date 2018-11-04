var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss') // wchodzi w zrodlopobiera stąd
		.pipe(sass()) //kompiluje
		.pipe(gulp.dest('app/css')); // wypluwa
});
gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
});
