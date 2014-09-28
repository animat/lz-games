// include gulp

var path = require('path');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include');
var watch = require('gulp-watch');
var open = require('open');

// include plug-ins
var minifyHTML = require('gulp-minify-html');
 
// include plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

var shell =  require('gulp-shell');


// don't rely on __dirname 
// either gulp or nodejs ignores symbolic links :(

var tailDir = path.basename(process.env.INIT_CWD);
// console.info('gulpfile.js: INIT_CWD: ' + process.env.INIT_CWD);
// console.info('gulpfile.js: tailDir: ' + tailDir);


var gulpDir = process.cwd();
// console.info('gulpfile.js: gulpDir: ' + gulpDir);

// Added to allow calling gulpfile.js from game subdirectory
// and avoid having symbolic link back up to root directory (html5_games)
process.chdir(process.env.INIT_CWD);
console.info('gulpfile.js: Working directory now: ' + process.cwd());


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

gulp.task('nop', function () {
	'use strict';
});
gulp.task('inc', function () {
	'use strict';
	gulp.src(['./*.inc'])
		.pipe(fileinclude({}))
		.pipe(rename(function (path) {
			path.extname = ".html";
		}))
		.pipe(gulp.dest('./'));
	
});
gulp.task('watch', function () {
	'use strict';
	watch(['lib/exodom/exo.html', 'lib/lgz/dom/*.html', 'rsc/dom/*.html', './*.inc'], function () {
		gulp.start('inc');
		// open('http://localhost/Projects/Clients/LinguaZone/lz-games/html5_games/sources/Splat/game.html');
	});
	
});


gulp.task('build', function () {
	src = ['./sources/*'];
	return gulp.src(src, {read: false})
    .pipe(shell(
	[
      'echo gulping:  <%= f(file.path) %>',
      'cd <%= f(file.path) %>; gulp'
	]
    , {
      templateData: {
        f: function (s) {
          return s
        }
      }
    }))
});



gulp.task('default', ['nop'], function () { });

