var gulp = require('gulp');
var jshint = require('gulp-jshint');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');
var jsFiles = ['*.js','src/**/*.js'];

gulp.task('style', function() {
    return gulp.src(jsFiles).
                pipe(jshint());
});

gulp.task('module', function () {
    var target = gulp.src('./src/views/index.html');
    
    var nodeSources = gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap-v4-dev/dist/js/*.min.js',
        './node_modules/bootstrap-v4-dev/dist/css/bootstrap.min.css'
        ],
        {read:false});

  return target
    .pipe(inject(nodeSources, {ignorePath: 'node_modules', name: 'boot'}))
    .pipe(gulp.dest('./src/views'));
});

gulp.task('public', function () {
    var target = gulp.src('./src/views/index.html');
        
    var publicSources = gulp.src([
        './public/css/*.min.css',
        './public/js/*.js',
        '!./public/js/agency.js'],
    {read:false});
    
  return target
    .pipe(inject(publicSources, {ignorePath: 'public', name: 'public'}))
    .pipe(gulp.dest('./src/views'));
});


gulp.task('serve', ['style','module','public'], function(){
    var options = {
        script: 'app.js',
        delayTime: 1,
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function() {
            console.log("Server Restart");
        });
});