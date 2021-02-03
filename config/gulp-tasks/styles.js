import paths from "../paths";
import { production } from "../helpers"
import { src, dest } from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import sass from "gulp-sass";

import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"

import sourcemaps from "gulp-sourcemaps";

import browsersync from "browser-sync";
import debug from "gulp-debug";

sass.compiler = require('sass');

const plugins = [
  autoprefixer,
  cssnano
]

const styles = () => {
  return src(paths.styles.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(gulpif(production, postcss(plugins)))
    .pipe(gulpif(production, rename({
      suffix: ".min"
    })))

    .pipe(gulpif(!production, sourcemaps.write("./maps/")))
    .pipe(dest(paths.styles.dist))
    .pipe(debug({
      "title": "CSS files"
    }))
    .pipe(browsersync.stream());
};

export default styles
