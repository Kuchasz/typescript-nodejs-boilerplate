var gulp = require('gulp');
var exec = require('child_process').exec;
var ts = require('gulp-typescript');
var rimraf = require('rimraf'); // rimraf directly

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', (cb)=>{
  rimraf('./Build', cb);
});

gulp.task('scripts', ['clean'], (cb)=>{
  var tsResult = tsProject.src()
        .pipe(ts(tsProject));
        return tsResult.js.pipe(gulp.dest('Build'));
});

gulp.task('run', ['scripts'], (cb)=>{
  exec('node Build/index.js', function (err, stdout, stderr) {
   console.log(stdout);
   console.log(stderr);
   cb(err);
 });
});

gulp.task('default', ['run']);
