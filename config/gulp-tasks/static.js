import {paths} from "../config";
import { src, dest } from "gulp";
import debug from "gulp-debug";

const staticFolder = () => {
    return src(paths.static.src)
        .pipe(dest(paths.static.dist))
        .pipe(debug({
            "title": "Static"
        }));
};

export default staticFolder
