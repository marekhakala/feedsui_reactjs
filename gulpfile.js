const gulp = require("gulp");
const path = require("path");
const gulpSass = require("gulp-sass");

gulp.task("build", ["build_sass"]);
gulp.task("default", ["build", "watch"]);
gulp.task("build_sass", () => gulp.src("./src/**/*.scss")
    .pipe(gulpSass().on("error", gulpSass.logError))
    .pipe(gulp.dest(gulpFile => gulpFile.base)));
gulp.task("watch", () => gulp.watch("./src/**/*.scss", ["build_sass"]));
