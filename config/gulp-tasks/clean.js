import paths from '../paths'
import del from "del";

const clean = () => {
    return del([`./${paths.dir.dist}/*`]);
}

export default clean
