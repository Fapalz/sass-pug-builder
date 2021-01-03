"use strict";

import {default as config, paths} from "../config";

import { watch, parallel, series } from "gulp";
import browsersync from "browser-sync";
import fs from "fs";


// import writePugMixinsFile from "./writePugMixinsFile"
// import writeSassImportsFile from "./writeSassImportsFile"
import pages from "./pages"
import styles from "./styles"
import scripts from "./scripts"
import staticFolder from "./static"
// import sprites from "./sprites"
// import images from "./images"
// import webp from "./webp"
// import fonts from "./fonts"
// import files from "./files"


let dir = config.dir

function clearScssImportsList(cb) {
  state.blocksFromHtml = []
  state.scssImportsList = []
  cb()
}

const serve = () => {
  browsersync.init({
    server: dir.dist,
    port: 4000,
    notify: true
  });


  // Страницы: изменение, добавление
  // watch([`${dir.src}views/**/*.pug`], { events: ['change', 'add'], delay: 100 }, series(
  //   views,
  //   parallel(writeSassImportsFile),
  //   parallel(styles),
  // ));

  // Страницы: удаление
  // watch([`${dir.src}views/**/*.pug`], { delay: 100 })
  //     // TODO попробовать с events: ['unlink']
  //     .on('unlink', function (path) {
  //         let filePathInBuildDir = path.replace(`${dir.src}views/`, dir.dist).replace('.pug', '.html');
  //         fs.unlink(filePathInBuildDir, (err) => {
  //             if (err) throw err;
  //             console.log(`---------- Delete:  ${filePathInBuildDir}`);
  //         });

  //     });

  // watch([`${dir.src}views/**/*.pug`], { events: ['unlink'], delay: 100 }, series(
  //   clearScssImportsList,
  //   views,
  //   parallel(writeSassImportsFile),
  //   parallel(styles),
  // ));


  // // Разметка Блоков: изменение
  // watch([`${dir.blocks}**/*.pug`], { events: ['change'], delay: 100 }, series(
  //   views
  // ));

  // // Разметка Блоков: добавление
  // watch([`${dir.blocks}**/*.pug`], { events: ['add'], delay: 100 }, series(
  //   writePugMixinsFile,
  //   views,
  // ));

  // // Разметка Блоков: удаление
  // watch([`${dir.blocks}**/*.pug`], { events: ['unlink'], delay: 100 }, writePugMixinsFile);

  // // Шаблоны pug: все события
  // watch([`${dir.src}pug/**/*.pug`, `!${dir.src}pug/_mixins.pug`], { delay: 100 }, series(
  //   views,
  //   parallel(writeSassImportsFile),
  //   parallel(styles),
  // ));

  // // Стили Блоков: изменение
  // watch([`${dir.blocks}**/*.scss`], { events: ['change'], delay: 100 }, series(
  //   styles,
  // ));

  // // Стили Блоков: добавление
  // watch([`${dir.blocks}**/*.scss`], { events: ['add'], delay: 100 }, series(
  //   writeSassImportsFile,
  //   styles,
  // ));

  // // Стилевые глобальные файлы: все события
  // watch([`${dir.src}styles/**/*.scss`, `!${dir.src}styles/_entry/*.scss`], { events: ['all'], delay: 100 }, series(
  //   styles,
  // ));




  watch(paths.pages.watch, parallel(pages));
  watch(paths.styles.watch, parallel(styles));
  watch(paths.scripts.watch, parallel(scripts));
  watch(paths.static.watch, parallel(staticFolder));
  // watch(paths.sprites.watch, parallel(sprites));
  // watch(paths.images.watch, parallel(images));
  // watch(paths.webp.watch, parallel(webp));
  // watch(paths.fonts.watch, parallel(fonts));
  // watch(paths.files.watch, parallel(files));
};

export default serve
