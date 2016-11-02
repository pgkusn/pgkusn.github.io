// 載入套件
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    cache = require('gulp-cache'),
    compass = require('gulp-compass'),
    del = require('del'),
    filter = require('gulp-filter'),
    gulpWatch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

// Browsersync初始化
gulp.task('browserSync', function () {
    browserSync.init({
        proxy: "localhost/workspace",
        // 指定<script>標籤插入至</body>前方
        snippetOptions: {
            rule: {
                match: /<\/body>/i,
                fn: function (snippet, match) {
                    return snippet + match;
                }
            }
        }
    });
});

// 編譯sass
gulp.task('sass', function () {
    console.log( '------------- Sass task -------------' );
    gulp.src('src/sass/**/*.scss')
    	.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(compass({
            config_file: 'config.rb',
            sass: 'src/sass',
            css: 'build/css'
        }))
        .pipe(reload({stream:true})); // 更新瀏覽器
});

// 壓縮Javascript
gulp.task('js', function(){
    console.log( '---------- Javascript task ----------' );
	gulp.src('src/js/**/*.js')
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(sourcemaps.init()) // 產生Source Maps
        .pipe(uglify()) // 最小化
        .pipe(rename(function(path){ // 改名
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(sourcemaps.write('.')) // 寫入Source Maps
        .pipe(gulp.dest('build/js'))
        .pipe(filter('**/*.js')) // 更新瀏覽器前排除Source Maps
        .pipe(reload({stream:true})); // 更新瀏覽器
});

// 壓縮圖片
gulp.task('image', function(){
    console.log( '------------ Image task ------------' );
	gulp.src('src/images/**')
		.pipe(cache(imagemin({progressive: true}))) // progressive:無損壓縮
		.pipe(gulp.dest('build/images'));
});

// 刪除已編譯檔案
gulp.task('del', function(){
    del(['build/images/**/*', 'build/css/**/*', 'build/js/**/*']);
    gulp.start('build');
});

// 編譯檔案
gulp.task('build', ['image'], function(){
    gulp.start('sass', 'js');
});

// 合併JavaScript
gulp.task('concat', function(){
    gulp.src('src/js/**/*.js')
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('build/js'));
});

// 預設工作
gulp.task('default', ['browserSync'], function () {
    gulp.watch('src/images/**/*', ['image']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulpWatch(['./**/*.php','./**/*.html'], reload);
});