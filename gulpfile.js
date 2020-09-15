const { src, dest, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const minify = require("gulp-minify");
const htmlmin = require("gulp-htmlmin");

// Static server, обновление старницы автоматом
function bs() {
  serverSass();
  // buildJS();

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass", serverSass);
  watch("./js/*.js").on("change", browserSync.reload);
}

//SASS
function serverSass() {
  return (
    src("./sass/*.sass")
      .pipe(sass())
      //для префиксов
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"],
          cascade: false
        })
      )
      .pipe(dest("./css"))
      .pipe(browserSync.stream())
  );
}

exports.server = bs;

// Compress Task

gulp.task("compress", function() {
  gulp
    .src("img/*") //папка из которой берем
    .pipe(imagemin())
    .pipe(gulp.dest("img/images/")); // папка в которую кладем
});

//minCSS-gulp mincss
gulp.task("mincss", function() {
  return gulp
    .src("css/*.css")

    .pipe(
      rename({
        suffix: ".min"
      })
    )

    .pipe(cleanCSS())

    .pipe(gulp.dest("app/css"));
});

//minJS-gulp minjs
gulp.task("min-js", function() {
  return gulp
    .src("js/*.js")
    .pipe(
      minify({
        ext: {
          min: ".min.js"
        },
        ignoreFiles: ["-min.js"]
      })
    )
    .pipe(gulp.dest("app/js"));
});
