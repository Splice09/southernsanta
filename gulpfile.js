var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./SASS/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./CSS'));
});

gulp.task('watch', function(){
    gulp.watch('./SASS/*.scss',['sass'])
});

gulp.task('default', ['sass', 'watch']);