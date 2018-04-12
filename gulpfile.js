var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglifyjs = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('app/sass/*.sass')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: true
    }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['browser-sync', 'sass'], function(){
    gulp.watch('app/sass/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('script', function(){
    return gulp.src(['app/libs/mixitup/dist/mixitup.js',
                     'app/libs/magnific-popup/dist/jquery.magnific-popup.js',
                     'app/libs/slick-carousel/slick/slick.js'])
    .pipe(concat('libs.min.js'))
    .pipe(uglifyjs())
    .pipe(gulp.dest('app/js'))
});

gulp.task('css', function(){
   return gulp.src('app/css/libs.css')
    .pipe(rename({suffix: ".min"}))
    .pipe(cssnano())
    .pipe(gulp.dest('app/css'))
});

gulp.task('build', function(){
    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
    
    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    
    var buildJS = gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js'))
    
    var buildCss = gulp.src(['!app/css/libs.css',
                             'app/css/*.css'])
    .pipe(gulp.dest('dist/css'))
});

gulp.task('default', ['watch']);