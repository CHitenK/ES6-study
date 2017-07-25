

/*http://localhost:8090/test.html*/

var gulp = require('gulp');
var babel = require('gulp-babel');
var connect = require('gulp-connect');

gulp.task('es6', function(){
    gulp.src('es6_js/*.js')//es6 源文件
        .pipe(babel()) //执行 babel 将 es6 编译成 es5
        .pipe(gulp.dest('es5_js'))//编译成 es5 的文件存放目录
        .pipe(connect.reload());
    // .pipe(webpack({//将所有 es5 的文件编译成一个文件 all.js
    //   output:{
    //     filename:"all.js",
    //   },
    //   stats:{
    //     colors:true
    //   },
    //   module:{
    //     loaders:[{test: /\.js$/, loaders: ['babel']}]
    //   }
    // }))
    // .pipe(gulp.dest('libs/dist'));//将 all.js 存放到此目录
}) ;


// 监视文件变化，自动执行任务
gulp.task('watch', function () {
    //前面是监听的文件，后面是调用的任务
    /*gulp.watch(['*.html'], ['html']);
     gulp.watch(['libs/scss/!*.scss'], ['sass']);
     gulp.watch(['libs/dist/!*.js'], ['html']);
     //gulp.watch(['libs/css/common.min.css'], ['html']);*/
     gulp.watch(['es6_js/*.js'], ['es6']);
});


gulp.task('webserver', function() {
    connect.server(
        {livereload: true,port: 8090}
    );
});

gulp.task('default', function(){
    gulp.run('watch','es6','webserver');
}) ;