import paths from "../paths";
import {production} from "../helpers"
import { src, dest } from 'gulp';
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import prettyHtml from "gulp-pretty-html";
import browsersync from "browser-sync";


const prettyHtmlOption = {
  indent_size: 2,
  indent_char: ' ',
  unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br', 'script'],
  content_unformatted: [],
};

const pages = () => {
  return src(paths.pages.src)
    .pipe(pug())
    .pipe(prettyHtml(prettyHtmlOption))
    // .pipe(gulpif(production, replace(".css", ".min.css")))
    // .pipe(gulpif(production, replace(".js", ".min.js")))
    .pipe(dest(paths.pages.dist))
    .pipe(browsersync.stream());
}

export default pages
