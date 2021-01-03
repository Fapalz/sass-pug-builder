import {paths} from "../config";
import { src, dest } from "gulp";
import debug from "gulp-debug";

const assets = () => {
    return src(paths.assets.src)
        .pipe(dest(paths.assets.dist))
        .pipe(debug({
            "title": "Assets"
        }));
};

export default assets
