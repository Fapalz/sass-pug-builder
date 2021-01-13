import paths from "../paths";
import config from "../config"
import { src, dest } from "gulp";
import debug from "gulp-debug";
import gulpFavicons from "gulp-favicons"

const favicons = () => {
    return src(paths.favicons.src)
        .pipe(
            gulpFavicons(config.pwa)
        )
        .pipe(dest(paths.favicons.dist))
        .pipe(debug({
            "title": "Favicons"
        }));
};

export default favicons
