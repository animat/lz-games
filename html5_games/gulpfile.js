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


var gameDir = path.basename(process.env.INIT_CWD);
console.info('gameDir: ' + gameDir);

var buildDir = '../../build/'  + gameDir;
console.info('buildDir: ' + buildDir);


var tailDir = path.basename(process.env.INIT_CWD);
// console.info('gulpfile.js: INIT_CWD: ' + process.env.INIT_CWD);
console.info('gulpfile.js: tailDir: ' + tailDir);


var gulpDir = process.cwd();
// console.info('gulpfile.js: gulpDir: ' + gulpDir);

// Added to allow calling gulpfile.js from game subdirectory
// and avoid having symbolic link back up to root directory (html5_games)
process.chdir(process.env.INIT_CWD);
console.info('gulpfile.js: Working directory now: ' + process.cwd());


gulp.task('nop', function () {
	'use strict';
});

//JS hint task
gulp.task('jshint', function () {
	'use strict';
  
	gulp.src('./rsc/js/*.js').pipe(jshint()).pipe(jshint.reporter('default'));
});
//Watch files changes during dev/debug
gulp.task('watch', function () {
	'use strict';
	watch(['lib/exodom/exo.html', 'lib/lgz/dom/*.html', 'rsc/dom/*.html', './*.inc'], function () {
		gulp.start('inc');
		// open('http://localhost/Projects/Clients/LinguaZone/lz-games/html5_games/sources/Splat/game.html');
	});
	
});


// not used:  minify new images
gulp.task('xxx_imagemin', function () {
	'use strict';
	var src, dst;

	//src = './rsc/img/*.png';
	src = './rsc/img/*';
	dst = buildDir + '/rsc/img';
	//gulp.src(src).pipe(changed(dst)).pipe(imagemin()).pipe(gulp.dest(dst));
	gulp.src(src).pipe(imagemin()).pipe(gulp.dest(dst));
});
// not used:  minify and copy lib assets
gulp.task('xxx_build_minlib', function () {
	'use strict';
	var dst, srcArr;
	srcArr = ['lib/js/*.js', '!lib/js/*.min.js', 'lib/lgz/*.js' ];
	gulp.src(srcArr).pipe(concat('lib.js')).pipe(uglify()).pipe(gulp.dest(buildDir));
	gulp.src('lib/js/*.min.js').pipe(gulp.dest(buildDir + '/lib/js'));
	gulp.src('lib/lgz/*.png').pipe(imagemin()).pipe(gulp.dest(buildDir + '/lib/lgz'));
});


gulp.task('build_clean', function () {
    'use strict';
    var dst;
	dst = [buildDir];
	return gulp.src(dst, {read: false})
        .pipe(shell(
	        [
                'echo cleaning:  <%= f(file.path) %>',
                'rm -rf  "<%= f(file.path) %>"'
	        ],
            {
                templateData: {
                    f: function (s) {
                        return s;
                    }
                }
            }
        ));
});
gulp.task('build_files', ['inc','build_clean'], function () {
	'use strict';
    var srcArr, dst;

    //build:  html files
	srcArr = ['*.html'];
    console.log('mark1');
	gulp.src(srcArr).pipe(gulp.dest(buildDir));

    console.log('mark2');
    //build:  rsc
	gulp.src('rsc/dom/*.css').pipe(gulp.dest(buildDir + '/rsc/dom'));

	gulp.src('rsc/js/*').pipe(gulp.dest(buildDir + '/rsc/js'));

	srcArr = ['rsc/mma/*', '!rsc/mma/*.svg'  ];
	return gulp.src(srcArr).pipe(gulp.dest(buildDir + '/rsc/mma'));

});
gulp.task('build_game', ['build_files'],  function () {
	'use strict';
    var dst;
	dst = [buildDir];
	return gulp.src(dst, {read: false})
        .pipe(shell(
	        [
                'echo "linking lib, svr in pwd: `pwd` with path: <%= f(file.path) %>!" ',
                'cd <%= f(file.path) %>; ln -s ../lib lib; ln -s ../svr svr;'
	        ],
            {
                templateData: {
                    f: function (s) {
                        return s;
                    }
                }
            }
        ));
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

gulp.task('build_subsvr', function () {
	'use strict';
	var dst, srcArr;
	srcArr = ['*'];
	gulp.src(srcArr).pipe(gulp.dest(buildDir));

});


gulp.task('build_svr', function () {
    'use strict';
    var srcArr;

	srcArr = ['./sources/svr'];
	return gulp.src(srcArr, {read: false})
        .pipe(shell(
	        [
                'echo cleaning build of:  <%= f(file.path) %>',
                'cd <%= f(file.path) %>; gulp build_clean',
                'echo creating build of:  <%= f(file.path) %>',
                'cd <%= f(file.path) %>; gulp build_subsvr'
	        ],
            {
                templateData: {
                    f: function (s) {
                        return s;
                    }
                }
            }
        ));
});
gulp.task('build_sublib', function () {
	'use strict';
	var dst, srcArr;

	gulp.src('exodom/**/*').pipe(gulp.dest(buildDir + '/exodom'));

	gulp.src('vendor/**/*').pipe(gulp.dest(buildDir + '/vendor'));

	//gulp.src('vendor/phaser/*').pipe(gulp.dest(buildDir + '/vendor/phaser'));
	//gulp.src('vendor/phaser/plugins/*').pipe(gulp.dest(buildDir + '/vendor/phaser/plugins'));

	srcArr = ['lgz/mma/*', '!lgz/mma/*.svg'  ];
	gulp.src(srcArr).pipe(gulp.dest(buildDir + '/lgz/mma'));

	srcArr = ['lgz/js/*'];
	gulp.src(srcArr).pipe(gulp.dest(buildDir + '/lgz/js'));

	srcArr = ['lgz/dom/*.css'];
	gulp.src(srcArr).pipe(gulp.dest(buildDir + '/lgz/dom'));

});
gulp.task('build_lib', function () {
    'use strict';
    var srcArr;

	srcArr = ['./sources/lib'];
	return gulp.src(srcArr, {read: false})
        .pipe(shell(
	        [
                'echo cleaning build of:  <%= f(file.path) %>',
                'cd <%= f(file.path) %>; gulp build_clean',
                'echo creating build of:  <%= f(file.path) %>',
                'cd <%= f(file.path) %>; gulp build_sublib'
	        ],
            {
                templateData: {
                    f: function (s) {
                        return s;
                    }
                }
            }
        ));
});
gulp.task('build_games', function () {
    'use strict';
    var srcArr;

	srcArr = ['./sources/*', '!./sources/lib', '!./sources/svr'];
	return gulp.src(srcArr, {read: false})
        .pipe(shell(
	        [
                'echo creating build of:  <%= f(file.path) %>',
                'cd <%= f(file.path) %>; gulp build_game'
	        ],
            {
                templateData: {
                    f: function (s) {
                        return s;
                    }
                }
            }
        ));
});




gulp.task('default', ['nop'], function () { });
gulp.task('build_all', ['build_games','build_lib','build_svr'], function () { });
