var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	sass = require('gulp-sass');



gulp.task('html-min', () => {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', () => { gulp.watch('./source/*.html', ['html-min']) })



gulp.task('scss-min', () => {
	return gulp.src('./source/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('scss', () => { gulp.watch('./source/scss/*.scss', ['scss-min']) })



gulp.task("default",['html', 'scss'])



 /// https://www.npmjs.com/package/gulp-sass
 /// https://www.npmjs.com/package/gulp-htmlmin/