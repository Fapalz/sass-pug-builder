import paths from "../paths";
import { production } from "../helpers"
import webpack from "webpack";
import webpackStream from "webpack-stream";
import { src, dest } from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import plumber from 'gulp-plumber';

const webpackConfig = require("../../webpack.config.js");

webpackConfig.forEach(confing => {
    confing.mode = production ? "production" : "development";
    confing.devtool = production ? false : "source-map";
});



const scripts = () => {
    return src(paths.scripts.src)
        .pipe(plumber())
        .pipe(webpackStream({config: webpackConfig}), webpack)
        // .pipe(gulpif(production, rename({
        //     suffix: ".min"
        // })))
        .pipe(dest(paths.scripts.dist))
        .pipe(debug({
            "title": "JS files"
        }))
        .on("end", browsersync.reload);
};

export default scripts
