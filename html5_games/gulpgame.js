// include gulp

var path = require('path');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include');
var watch = require('gulp-watch');

// include plug-ins
var minifyHTML = require('gulp-minify-html');
 
// include plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var scriptArr = [];


scriptArr.push("./rsc/phaser.js");
scriptArr.push("./rsc/savescpu.js");
scriptArr.push("./rsc/init.js");




// don't rely on __dirname 
// either gulp or nodejs ignores symbolic links :(

var gameDir = path.basename(process.env.INIT_CWD);
console.info('gameDir: ' + gameDir);
var buildDir = '../../build/'  + gameDir;

// JS hint task
gulp.task('jshint', function () {
	'use strict';
  
	gulp.src('./rsc/js/*.js').pipe(jshint()).pipe(jshint.reporter('default'));
});

// minify new images
gulp.task('imagemin', function () {
	'use strict';
	var src, dst;

	//src = './rsc/img/*.png';
	src = './rsc/img/*';
	dst = buildDir + '/rsc/img';
	//gulp.src(src).pipe(changed(dst)).pipe(imagemin()).pipe(gulp.dest(dst));
	gulp.src(src).pipe(imagemin()).pipe(gulp.dest(dst));
});

// copy  assets
gulp.task('rsc', function () {
	'use strict';
	gulp.src('rsc/css/*').pipe(gulp.dest(buildDir + '/rsc/css'));
	gulp.src('rsc/dat/*').pipe(gulp.dest(buildDir + '/rsc/dat'));
	gulp.src('rsc/snd/*').pipe(gulp.dest(buildDir + '/rsc/snd'));
});


// minify new or changed HTML pages
gulp.task('minihtml', function () {
	'use strict';
	var htmlSrc;
	htmlSrc = './mini.html';
	gulp.src(htmlSrc).pipe(changed(buildDir)).pipe(minifyHTML()).pipe(gulp.dest(buildDir));
});
gulp.task('lib', function () {
	'use strict';
	var dst, srcArr;
	srcArr = ['lib/js/*.js', '!lib/js/*.min.js', 'lib/lgz/*.js' ];
	gulp.src(srcArr).pipe(concat('lib.js')).pipe(uglify()).pipe(gulp.dest(buildDir));
	gulp.src('lib/js/*.min.js').pipe(gulp.dest(buildDir + '/lib/js'));
	gulp.src('lib/lgz/*.png').pipe(imagemin()).pipe(gulp.dest(buildDir + '/lib/lgz'));
});
gulp.task('rscjs', function () {
	'use strict';
	var dst, srcArr;
	srcArr = ['rsc/js/*.js'];
	gulp.src(srcArr).pipe(concat('rsc.js')).pipe(uglify()).pipe(gulp.dest(buildDir));
});

gulp.task('dev', function () {
	'use strict';
	// gulp.src(scriptArr).pipe(concat('init.js')).pipe(uglify()).pipe(gulp.dest('./build'));
});
gulp.task('prod', function () {
	'use strict';
	gulp.src(scriptArr).pipe(concat('init.js')).pipe(stripDebug()).pipe(uglify()).pipe(gulp.dest('./build'));
});

gulp.task('nop', function () {
	'use strict';
});
gulp.task('inc', function () {
	'use strict';
	gulp.src(['./*.inc'])
		.pipe(fileinclude({}))
		.pipe(rename(function (path) {
			path.extname = ".html"
		}))
		.pipe(gulp.dest('./'));
	
});
gulp.task('watch', function () {
	'use strict';
	watch(['lib/exodom/exo.html', 'lib/lgz/dom/*.html', 'rsc/dom/*.html', './*.inc'], function () {
		gulp.start('inc');
	});
	
});

gulp.task('default', ['nop'], function () { });
gulp.task('html', ['include'], function () { });
gulp.task('build', ['lib', 'rscjs', 'imagemin', 'rsc', 'minihtml', 'dev'], function () { });

