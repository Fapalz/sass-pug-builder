import { parallel, series } from 'gulp';


// import writePugMixinsFile from './gulp-tasks/writePugMixinsFile';
// import writeSassImportsFile from './gulp-tasks/writeSassImportsFile';
import clean from './config/gulp-tasks/clean';
import views from './config/gulp-tasks/pages';
import styles from './config/gulp-tasks/styles';
import scripts from './config/gulp-tasks/scripts';
import assets from './config/gulp-tasks/assets';
import staticFolder from './config/gulp-tasks/static';
import serve from './config/gulp-tasks/serve';
import favicons from './config/gulp-tasks/favicons';
// import jsPlugins from './gulp-tasks/js-plugins'
// import images from './gulp-tasks/images';
// import webp from './gulp-tasks/webp';
// import sprites from './gulp-tasks/sprites';
// import fonts from './gulp-tasks/fonts';
// import favicons from './gulp-tasks/favicons';
// import gzip from './gulp-tasks/gzip';
// import files from './gulp-tasks/files';
// import librarySass from './gulp-tasks/librarySassFile';
// import pluginsSass from './gulp-tasks/pluginsSassFile';


// export const development = series(
//     parallel(clean, writePugMixinsFile, librarySass, pluginsSass ),
//     parallel(views, images, sprites, fonts, favicons, files, jsPlugins),
//     parallel(writeSassImportsFile),
//     parallel(styles, scripts),
//     serve
// );

// export const prod = series(
//     parallel(clean, writePugMixinsFile, librarySass, pluginsSass),
//     parallel(views, images, sprites, fonts, favicons, gzip, files, jsPlugins),
//     parallel(writeSassImportsFile),
//     parallel(styles, scripts)
// );

export const development = series(
    clean,
    parallel(views, styles, scripts, assets, staticFolder),
    serve
);

export const prod = series(
    clean,
    parallel(views, styles, scripts, assets, staticFolder)
);

export const icons = series(
    favicons
);

export default development;
