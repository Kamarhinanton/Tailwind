import fileInclude from "gulp-file-include"
import webpHtmlNoSvg from "gulp-webp-html-nosvg"
// import versionNumber from "gulp-version-number"

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        webpHtmlNoSvg()
      )
    )
    // .pipe(
    //   app.plugins.ifPlugin(
    //     app.isBuild,
    //     versionNumber({
    //       "value": "%DT%",
    //       "append" : {
    //         "key": "_v",
    //         "cover": 0,
    //         "to" : [
    //           "scss",
    //           "js"
    //         ]
    //       },
    //       "output" : {
    //         "file": "gulp/version.json"
    //       }
    //     })
    //   )
    // )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}