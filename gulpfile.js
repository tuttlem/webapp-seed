
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    react = require('gulp-react'),
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

/* react jsx templates need to be converted */
gulp.task('jsx', function () {

    return gulp.src(['app/js/**/*.jsx'])
        .pipe(react())
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

    gulp.src('public')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 3000,
            fallback: 'index.html',
            livereload: true,
            open: true
        }));

});

gulp.task('watch', function () {
    gulp.watch('app/*.html', [ 'static' ]);
    gulp.watch('app/bower_components/**', [ 'static' ]);
    gulp.watch('app/img/**', [ 'static' ]);
    gulp.watch('app/css/**', [ 'static' ]);
    gulp.watch('app/partials/**', [ 'static' ]);

    gulp.watch('app/js/**/*.js', [ 'js' ]);
    gulp.watch('app/js/**/*.jsx', [ 'jsx' ]);
});

gulp.task('default', [ 'js', 'jsx', 'static', 'watch', 'serve' ]); 
