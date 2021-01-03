import {paths} from "../config";
import { src, dest } from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import sass from "gulp-sass";
// import mincss from "gulp-clean-css";
// import groupmedia from "gulp-group-css-media-queries";
// import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
// import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import debug from "gulp-debug";

sass.compiler = require('sass');

const production = process.env.NODE_ENV === 'production';

const styles = () => {
  return src(paths.styles.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    
    //.pipe(plumber())
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    //.pipe(gulpif(production, groupmedia()))
    // .pipe(gulpif(production, autoprefixer({
    //   cascade: false,
    //   grid: true
    // })))
    // .pipe(gulpif(production, mincss({
    //   compatibility: "ie8", level: {
    //     1: {
    //       specialComments: 0,
    //       removeEmpty: true,
    //       removeWhitespace: true
    //     },
    //     2: {
    //       mergeMedia: true,
    //       removeEmpty: true,
    //       removeDuplicateFontRules: true,
    //       removeDuplicateMediaBlocks: true,
    //       removeDuplicateRules: true,
    //       removeUnusedAtRules: false
    //     }
    //   }
    // })))
    .pipe(gulpif(production, rename({
      suffix: ".min"
    })))
    //.pipe(plumber.stop())
    .pipe(gulpif(!production, sourcemaps.write("./maps/")))
    .pipe(dest(paths.styles.dist))
    .pipe(debug({
      "title": "CSS files"
    }))
    .pipe(browsersync.stream());
};

export default styles