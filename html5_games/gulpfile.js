// include gulp


var path = require('path');
var gulp = require('gulp');
var changed = require('gulp-changed');
var shell =  require('gulp-shell');

gulp.task('xxbuild', function () {
	var src;
	src = ['./sources/*'];
  	return gulp.src(src, {read: false})
    .pipe(shell( 'echo <%= f(file.path) %>' ));
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


gulp.task('default', ['build'], function () { });
