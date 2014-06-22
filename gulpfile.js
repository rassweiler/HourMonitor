var sys = require('sys');
var exec = require('child_process').exec;

var gulp = require('gulp');
var traceur = require('gulp-traceur');
var sass = require('gulp-sass');

gulp.task('js', function() {
	//Build Traceur
	gulp.src('./Js/**/*.js')
		.pipe(traceur())
		.pipe(gulp.dest('./Compiled/'));

	return gulp.src('./Js/**/*.json')
		.pipe(gulp.dest('./Compiled/'));
});

gulp.task('css', function() {
	//Build Sass
	return gulp.src('./Css/*.scss')
		.pipe(sass({ includePaths: ['Css/'] }))
		.pipe(gulp.dest('./Compiled/styles/'));
});

gulp.task('post-build', ['js', 'css'], function() {
	exec("nw.exe .");
});

gulp.task('default', function() {
	gulp.start('js', 'css', 'post-build');
});