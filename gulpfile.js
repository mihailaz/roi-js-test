"use strict";

var argv = require('yargs').argv,
	need_minify = argv.min || argv.m,
	gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    rjs = require('gulp-requirejs');

function postfix(filename, ext){
	var file_postfix = need_minify ? '.min' : '';
	return filename + file_postfix + '.' + ext;
}

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function(){
	connect.server({
		root      : 'app',
		livereload: true
	});
});

gulp.task('watch', ['css', 'js'], function(){
	gulp.watch(['app/css/**/*.css'], ['css']);
	gulp.watch(['app/js/**/*.js'], ['js']);
	gulp.watch(['app/**/*.html'], ['html']);
});

gulp.task('html', function(){
	gulp.src(['app/**/*.html'])
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src(['app/css/**/*.css'])
		.pipe(concat(postfix('roi-all', 'css')))
		.pipe(gulpif(need_minify, minifyCSS()))
		.pipe(gulp.dest('app/build'))
		.pipe(connect.reload());
});

gulp.task('js', function(){
	rjs({
		baseUrl: 'app/js',
		name: 'main',
		out: postfix('roi-all', 'js'),
		paths: {
			jquery: '../bower_components/jquery/dist/jquery',
			underscore: '../bower_components/underscore/underscore',
			backbone: '../bower_components/backbone/backbone',
			bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
		},
		shim: {
			backbone: {
				deps: ['jquery', 'underscore'],
				exports: 'Backbone'
			},
			underscore: {
				exports: '_'
			},
			jquery: {
				exports: '$'
			},
			bootstrap: {
				deps: ['jquery']
			}
		}
	})
		.pipe(gulpif(need_minify, uglify()))
		.pipe(gulp.dest('app/build'))
		.pipe(connect.reload());
});