import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css"
import autoprefixer from "gulp-autoprefixer"
import groupCssMediaQueries from "gulp-group-css-media-queries"

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})

    .pipe(sass({outputStyle: "expanded"}))
    .pipe(groupCssMediaQueries())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 3 versions"],
      cascade: true
    }))
    //не зжатий
    .pipe(app.gulp.dest(app.path.build.css))
    //=====
    .pipe(cleanCss())
    .pipe(rename({extname: ".min.css"}))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}