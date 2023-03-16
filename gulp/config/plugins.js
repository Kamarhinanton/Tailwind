import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if"

export const plugins = {
  browsersync: browsersync,
  newer: newer,
  ifPlugin: ifPlugin
}