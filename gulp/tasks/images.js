import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        webp()
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        app.gulp.dest(app.path.build.images)
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        app.gulp.src(app.path.src.images)
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        app.plugins.newer(app.path.build.images)
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          interlaced: true,
          optimizationLevel: 5 //to 7
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
}