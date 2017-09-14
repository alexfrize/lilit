var postcss = require('gulp-postcss');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('autoprefixer');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './app/'
		},
		notify: false,
		startPath: 'index.html'
	});
});

gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass()).on('error',sass.logError)
	.pipe(postcss([ autoprefixer() ]))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('app/scss/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
});