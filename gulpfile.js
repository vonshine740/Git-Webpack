const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

gulp.task('default', function(){
    webpack(webpackConfig, function (err, stats) {
        if (err){
            console.log("构建任务失败");
        }else{
            // console.log(err);

            console.log('success');
        }
    });
});