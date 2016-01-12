var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    config;

config = {
    src: [
        'js/app/app.module.js',
        'js/app/**/*.js'
    ],
    templateCache: {
        file: 'templateCache.js',
        options: {
            module: 'templateCache',
            standalone: true,
            root: 'js/app'
        }
    }
};

gulp.task('js', function () {
    gulp.src(config.src)
        .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
});

gulp.task('watch', ['js'], function () {
    gulp.watch(config.src, ['js'])
});
