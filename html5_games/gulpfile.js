/*global
    $: true,
    require: true,
    process: true,
    console: true
 */
/*jslint  nomen: true */


var path = require('path');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include');
var watch = require('gulp-watch');
var open = require('open');
var util = require('util');
var runSequence = require('run-sequence');

var usemin = require('gulp-usemin');
var uglify = require('gulp-uglifyjs');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

 
// include plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');

var shell =  require('gulp-shell');


// don't rely on __dirname 
// either gulp or nodejs ignores symbolic links :(

var rootDir = process.cwd();
console.info('rootDir: ' + rootDir);

var srcDir = path.basename(process.env.INIT_CWD);
console.info('srcDir: ' + srcDir);

var buildRaw = rootDir + '/build/raw/' + srcDir;
console.info('buildRaw: ' + buildRaw);

var buildMin = rootDir + '/build/min/' + srcDir;
console.info('buildMin: ' + buildMin);


var targetBuildDir = function (name) {
    'use strict';
    var srcDir;
    srcDir = path.basename(process.cwd());
    return rootDir + '/build/' + name + '/' + srcDir;
};

/*
var tailDir = path.dirname(process.env.INIT_CWD);
console.info('tailDir: ' + tailDir);
*/

// Added to allow calling gulpfile.js from game subdirectory
// and avoid having symbolic link back up to root directory (html5_games)
process.chdir(process.env.INIT_CWD);
//console.info('CWD: ' + process.cwd());



gulp.task('inc', function () {
	'use strict';
	gulp.src(['./*.inc'])
		.pipe(fileinclude({}))
		.pipe(rename(function (path) {
			path.extname = ".html";
		}))
		.pipe(gulp.dest('./'));
	
});

gulp.task('min_clean',  function () {
	'use strict';
    var dst;
	dst = './';
	return gulp.src(dst, {read: false})
        .pipe(shell(
	        [
                'echo "cleaning `pwd`/min" ',
                'rm -f min/*;'

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
gulp.task('min_links',  function () {
	'use strict';
    var dst;
	dst = 'min/';
	return gulp.src(dst, {read: false})
        .pipe(shell(
	        [
                'echo "copying lib/svr links to ./min" ',
                'cp -a lib <%= f(file.path) %>/.;',
                'cp -a svr <%= f(file.path) %>/.;'
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

gulp.task('min_compile', function () {
    'use strict';
    var srcArr;
	srcArr = ['./*.html'];
    return gulp.src(srcArr)
        .pipe(replace(/css\?/g, 'css'))
        .pipe(replace(/js\?/g, 'js'))
        .pipe(usemin({
            html: [function() {return minifyHtml({empty: true}); } ]
            css: [minifyCss(), 'concat'],
            html: [minifyHtml({empty: true})],
            js1: [uglify({
                outSourceMap: true,
                compress: {drop_console: true}
            })],
            js2: [uglify({
                outSourceMap: true,
                compress: {drop_console: true}
            })],
            js3: [uglify({
                outSourceMap: true,
                compress: {drop_console: true}
            })]
        }))
        .pipe(gulp.dest('min/'));
});
gulp.task('compile_game',  function (cb) {
	'use strict';
    runSequence(
        'inc',
        'min_clean',
        'min_compile',
        'min_links',
        cb
    );

});

gulp.task('build_raw_clean', shell.task([
    'echo cleaning ' + buildRaw,
    'mkdir  -p ' + buildRaw,
    'rm -rf ' + buildRaw + '/*'
 

]));
gulp.task('build_min_clean', shell.task([
    
    'echo cleaning ' + buildMin,
    'rm -rf ' + buildMin,
    'mkdir  -p ' + buildMin

]));
gulp.task('build_raw_svr', function () {
	'use strict';
	var  srcArr;
	srcArr = ['**/*'];
	return gulp.src(srcArr).pipe(gulp.dest(buildRaw));

});
gulp.task('build_min_svr', function () {
	'use strict';
	var  srcArr;
	srcArr = ['**/*'];
	return gulp.src(srcArr).pipe(gulp.dest(buildMin));

});
 

gulp.task('build_svr', function (cb) {
    'use strict';
    var srcDir;
    srcDir = rootDir + '/sources/svr';
    process.chdir(srcDir);
    console.info('srcDir: ' + 'svr');
    buildMin = targetBuildDir('min');
    buildRaw = targetBuildDir('raw');
    runSequence(
        'build_raw_clean',
        'build_raw_svr',
        'build_min_clean',
        'build_min_svr',
        cb
    );

});
gulp.task('build_raw_lib', function () {
	'use strict';
	var srcArr;
	srcArr = ['**/*', '!**/*.html'];
	gulp.src(srcArr).pipe(gulp.dest(buildRaw));

});
gulp.task('build_min_lib', function () {
	'use strict';
	var srcArr;
	srcArr = ['**/*', '!**/*.js', '!**/*.svg', '!**/*.css', '!**/*.html'];
	gulp.src(srcArr).pipe(gulp.dest(buildMin));

});
gulp.task('build_lib', function (cb) {
    'use strict';
    var srcDir;
    srcDir = rootDir + '/sources/lib';
    process.chdir(srcDir);
    console.info('srcDir: ' + 'lib');
    buildMin = targetBuildDir('min');
    buildRaw = targetBuildDir('raw');
    runSequence(
        'build_raw_clean',
        'build_raw_lib',
        'build_min_clean',
        'build_min_lib',
        cb
    );

});
gulp.task('build_raw_links',  function () {
	'use strict';
    var dst;
	dst = ['svr','lib'];
	return gulp.src(dst, {read: false})
        .pipe(shell(
	        [
                'echo "cp -a <%= f(file.path) %> ' + buildRaw + '/. "',
                'cp -a <%= f(file.path) %> ' +  buildRaw + '/. '
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
gulp.task('build_raw_html',  function () {
	'use strict';
    var srcArr;

	srcArr = ['*.html'];
    console.log('building html files');
	return gulp.src(srcArr).pipe(gulp.dest(buildRaw));
});
gulp.task('build_raw_css', function () {
	'use strict';
    var srcArr, rtc;

    console.log('building css files');
	rtc = gulp.src('rsc/dom/*.css').pipe(gulp.dest(buildRaw + '/rsc/dom'));
    return rtc;


});
gulp.task('build_raw_js', function () {
	'use strict';
    var srcArr, rtc;

    console.log('building js files');
	rtc = gulp.src('rsc/js/*').pipe(gulp.dest(buildRaw + '/rsc/js'));
    return rtc;

});
gulp.task('build_raw_mma', function () {
	'use strict';
    var srcArr, rtc;

    console.log('building mma files');
	srcArr = ['rsc/mma/*', '!rsc/mma/*.svg'  ];
    rtc = gulp.src(srcArr).pipe(gulp.dest(buildRaw + '/rsc/mma'));
    return rtc;

});
gulp.task('build_min_min', function () {
	'use strict';
    var srcArr, rtc;

    console.log('building min files in ' + buildMin);
	srcArr = ['min/*.html', 'min/*.js', 'min/*.css', '!min/*.map'  ];
    rtc = gulp.src(srcArr).pipe(gulp.dest(buildMin));
    return rtc;

});
gulp.task('build_min_mma',  function () {
	'use strict';
	return gulp.src(['rsc/mma'], {read: false})
        .pipe(shell(
	        [
                'echo "copying rsc/mma contents to  <%= f(file.path) %>"',
                'mkdir -p ' + buildMin + '/rsc',
                'cp -a <%= f(file.path) %> ' + buildMin + '/rsc/.'
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
/*
gulp.task('build_min_links',  function () {
	'use strict';
	return gulp.src(buildMin, {read: false})
        .pipe(shell(
	        [
                'echo "copying lib/svr links to <%= f(file.path) %>" ',
                'cp -a lib <%= f(file.path) %>/.;',
                'cp -a svr <%= f(file.path) %>/.;'
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
*/
gulp.task('build_min_links',  function () {
	'use strict';
    var dst;
	dst = ['svr','lib'];
	return gulp.src(dst, {read: false})
        .pipe(shell(
	        [
                'echo "cp -a <%= f(file.path) %> ' + buildMin + '/. "',
                'cp -a <%= f(file.path) %> ' +  buildMin + '/. '
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
gulp.task('build_min_game', function (cb) {
	'use strict';
    runSequence(
        'build_min_clean',
        'build_min_min',
        'build_min_mma',
        'build_min_links',
        cb
    );
});
gulp.task('build_raw_game', function (cb) {
	'use strict';
    runSequence(
        'build_raw_clean',
        'build_raw_html',
        'build_raw_js',
        'build_raw_css',
        'build_raw_mma',
        'build_raw_links',
        cb
    );

});
gulp.task('build_game1', ['compile_game'], function (cb) {
	'use strict';
    runSequence(
        'build_raw_game',
        'build_min_game',
        cb
    );

});
gulp.task('build_game',['build_game1'], function () {
	'use strict';
     process.exit(0);
});
gulp.task('build_games', function () {
    'use strict';
    var srcArr;

    process.chdir(rootDir);

    srcArr = ['./sources/*', '!./sources/lib', '!./sources/svr'];
    return gulp.src(srcArr, {read: false})
    .pipe(shell(
        [
            'echo building  <%= f(file.path) %>',
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
gulp.task('build_all', function () {
	'use strict';
    runSequence(
        'build_svr',
        'build_lib',
        'build_games'
    );
});

gulp.task('build_test',  function () {
	'use strict';
    var dst;
	dst = targetBuildDir('min');
    console.log('build_test: ' + dst);
});
gulp.task('default',  function () {
    'use strict';
    console.log('no op');
});
