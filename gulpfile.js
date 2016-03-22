
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    replace = require('gulp-replace'),
    nodemon = require('gulp-nodemon'),
    webserver = require('gulp-webserver');

/* javascripts need to be converted from 6 to 5 and minified */
gulp.task('js', function () {

  return gulp.src(['app/js/**/*.js'])
    .pipe(babel())
    .pipe(uglify())
    .pipe(replace('bower_components', 'lib'))
    .pipe(gulp.dest('public/js'));

});

/* copy all static assets into the build */
gulp.task('static', function () {

  gulp.src('app/*.html')
    .pipe(replace('bower_components', 'lib'))
    .pipe(gulp.dest('public'));

  gulp.src('app/bower_components/**')
    .pipe(gulp.dest('public/lib'))

  gulp.src('app/img/**')
    .pipe(gulp.dest('public/img'));

  gulp.src('app/css/**')
    .pipe(gulp.dest('public/css'));

  gulp.src('app/partials/**')
    .pipe(gulp.dest('public/partials'));

});

gulp.task('serve', function () {

  nodemon({
    script: 'index.js',
    ext: 'js css html',
    ignore: [ 'public' ]
  });

});

gulp.task('watch', function () {
  gulp.watch('app/*.html', [ 'static' ]);
  gulp.watch('app/bower_components/**', [ 'static' ]);
  gulp.watch('app/img/**', [ 'static' ]);
  gulp.watch('app/css/**', [ 'static' ]);
  gulp.watch('app/partials/**', [ 'static' ]);

  gulp.watch('app/js/**/*.js', [ 'js' ]);
});

/* this action is used just to build the application
   into the /public folder so it can be picked up by
   the docker build process */
gulp.task('build', [ 'js', 'static' ]);

/* default action started when no configuration is 
   given to the invocation script */
gulp.task('default', [ 'js', 'static', 'watch', 'serve' ]); 
