const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const babel = require('gulp-babel');
const pug = require('gulp-pug');

gulp.task('default',['babel', 'views'],  function(){
    nodemon({
        script: 'dist/server.js',
        ext: 'js pug',
        watch: 'src',
        tasks: ['babel', 'views'],
        env: {NODE_ENV: 'development'}
    });
});

gulp.task('babel', function(){
    return gulp.src("src/**/*.js")
    .pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task('views', function(){
    return gulp.src('src/client/*.pug')
    .pipe(pug({

    }))
    .pipe(gulp.dest('dist/client'))
});