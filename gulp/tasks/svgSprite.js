import spriteSvg from "gulp-svg-sprite"

export const svgSprite = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(spriteSvg({
      mode: {
        stack: {
          sprite: "../icons/icons.svg",
          example: false
        }
      },
    }))
    .pipe(app.gulp.dest(`${app.path.build.images}`))
}