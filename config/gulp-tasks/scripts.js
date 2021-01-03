"use strict";

import {paths} from "../config";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import { src, dest } from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import debug from "gulp-debug";

const webpackConfig = require("../../webpack.config.js"),
production = process.env.NODE_ENV === 'production';

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "source-map";

const scripts = () => {
    return src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpif(production, rename({
            suffix: ".min"
        })))
        .pipe(dest(paths.scripts.dist))
        .pipe(debug({
            "title": "JS files"
        }))
        .on("end", browsersync.reload);
};

export default scripts
