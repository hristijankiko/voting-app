const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const babel = require('gulp-babel');

gulp.task('default',['babel'],  function(){
    nodemon({
        script: 'dist/server.js',
        ext: 'js pug',
        watch: 'src',
        tasks: ['babel'],
        env: {NODE_ENV: 'development'}
    });
});

gulp.task('babel', function(){
    return gulp.src(["src/**", "!src/client/*.js"])
    .pipe(babel({
        presets: ['es2015'],
        ignore: ['*.pug']
    }))
    .pipe(gulp.dest("dist"));
});