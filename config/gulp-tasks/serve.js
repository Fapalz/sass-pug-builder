"use strict";

import paths from "../paths";

import { watch, parallel, series } from "gulp";
import browsersync from "browser-sync";

import pages from "./pages"
import styles from "./styles"
import scripts from "./scripts"
import staticFolder from "./static"


const serve = () => {
  browsersync.init({
    server: paths.dir.dist,
    port: 4000,
    notify: true,
    open: false
  });


  watch(paths.pages.watch, parallel(pages));
  watch(paths.styles.watch, parallel(styles));
  watch(paths.scripts.watch, parallel(scripts));
  watch(paths.static.watch, parallel(staticFolder));
};

export default serve
