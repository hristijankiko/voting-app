const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const babel = require('gulp-babel');

gulp.task('default', function(){
    nodemon({
        script: 'dest/server.js',
        watch: 'src',
        tasks: ['babel'],
        env: {NODE_ENV: 'development'}
    });
});

gulp.task('babel', function(){
    return gulp.src("src/**")
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest("dest"));
});