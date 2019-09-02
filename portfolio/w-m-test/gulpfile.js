var gulp 							= require('gulp'),
		sass 							= require('gulp-sass'),
		browserSync 			= require('browser-sync'),
		rename 						= require('gulp-rename'),
		autoprefixer 			= require('gulp-autoprefixer'),
		imagemin 					= require('gulp-imagemin'),
		inlineSource 			= require('gulp-inline-source'),
		concatCss 				= require('gulp-concat-css'),
		minifyCss					= require('gulp-clean-css'),
		concatJs					=	require('gulp-concat'),
		minifyJs					= require('gulp-uglifyjs');

// single tasks

gulp.task('img', function() {
	return gulp.src('./images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./app/imgDub/'));
});

gulp.task('inlineSource', function() {
	return gulp.src('*.html')
		.pipe(inlineSource())
		.pipe(gulp.dest('./app/'));
});



// complex tasks

gulp.task('server', ['sass', 'scripts'], function() {
	browserSync({
		server: {
			baseDir: 'app/'
		}
	});
	gulp.watch("./sass/*.sass", ['sass']);
	gulp.watch("./libs/*.js", ['scripts']).on('change', browserSync.reload);
  	gulp.watch("./app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
	return gulp.src('./sass/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./app/css/'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./libs/common.js'
		])
		.pipe(concatJs('apps.js'))
		.pipe(minifyJs())
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('default', ['server']);