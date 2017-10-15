// 載入套件
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    gulpWatch = require('gulp-watch'),
    runSequence = require('run-sequence');

// Browsersync初始化
gulp.task('browserSync', function () {
    browserSync.init({
        proxy: "localhost/pgkusn.github.io/musicbravo",
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
    	.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.compass({
            config_file: 'config.rb',
            sass: 'src/sass',
            css: 'build/css'
        }))
        .pipe(browserSync.reload({stream: true})); // 注入瀏覽器
});

// 壓縮JavaScript
gulp.task('js', function(){
    // console.log( '---------- JavaScript task ----------' );
    // return gulp.src('src/js/**/*.js')
    //     .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    //     .pipe($.sourcemaps.init()) // 產生Source Maps
    //     .pipe($.babel({presets: ['react', 'es2015', 'stage-2']})) // 編譯JSX、ES6+(ES7草案)轉ES5
    //     .pipe($.uglify()) // 最小化(不支援ES6+)
    //     .pipe($.rename(function(path){ // 改名
    //         path.basename += ".min";
    //         path.extname = ".js";
    //     }))
    //     .pipe($.sourcemaps.write('.')) // 寫入Source Maps
    //     .pipe(gulp.dest('build/js'));
});

// 合併JavaScript
gulp.task('concat', function(){
    gulp.src('src/js/**/*.js')
        .pipe($.concat('all.min.js'))
        .pipe(gulp.dest('build/js'));
});

// 壓縮圖片
gulp.task('image', function(){
    console.log( '------------ Image task ------------' );
	return gulp.src('src/images/**')
		// .pipe($.cache($.imagemin({progressive: true}))) // 無損壓縮
		.pipe(gulp.dest('build/images'));
});

// 刪除已編譯檔案
gulp.task('del', function(callback){
    del(['build/images/**/*', 'build/css/**/*', 'build/js/**/*']);
    callback();
});

// 重新編譯檔案
gulp.task('compile', function(callback){
    return runSequence(
        ['del'],
        ['image'],
        ['sass', 'js'],
        callback
    );
});

// JS任務完成後重整瀏覽器
gulp.task('js-watch', ['js'], function(){
    browserSync.reload();
});

// 預設工作
gulp.task('default', ['browserSync'], function () {
    gulp.watch('src/images/**/*', ['image']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['js-watch']);
    gulpWatch(['./**/*.php', './**/*.html'], browserSync.reload);
});