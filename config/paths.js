import config from './config';

const dir = config.dir;

const paths = {
  pages: {
    src: [
      `./${dir.src}/pages/**/*.pug`
    ],
    dist: `./${dir.dist}/`,
    watch: [
      `./${dir.components}/**/*.pug`,
      `./${dir.src}/pages/**/*.pug`,
      `./${dir.src}/layouts/**/*.pug`,
      `!./${dir.src}/pug/_mixins.pug`
    ]
  },
  styles: {
    src: [
      `./${dir.src}/styles/_entry/main.{scss,sass}`,
      `./${dir.src}/styles/pages/*.{scss,sass}`
    ],
    dist: `./${dir.dist}/styles/`,
    watch: [
      `./${dir.components}/**/*.{scss,sass}`,
      `./${dir.src}/styles/**/*.{scss,sass}`,
      //`!./${dir.src}/styles/_entry/*.{scss,sass}`
    ]
  },
  stylesIE: {
    dist: `./${dir.dist}/styles/fallback/`,
  },
  scripts: {
    src: `./${dir.src}/js/main.js`,
    dist: `./${dir.dist}/js/`,
    watch: [
      `./${dir.components}/**/*.js`,
      `./${dir.src}/js/**/*.{js,glsl}`
    ]
  },
  assets: {
    src: [
      `./${dir.src}/assets/**/*.*`,
    ],
    dist: `./${dir.dist}/assets/`,
    watch: [
      `./${dir.src}/assets/**/*.*`,
    ]
  },
  static: {
    src: [
      `./${dir.src}/static/**/*.*`,
      `!./${dir.src}/static/favicons/*.*`,
    ],
    dist: `./${dir.dist}/`,
    watch: [
      `./${dir.src}/static/**/*.*`,
    ]
  },
  favicons: {
    src: [
      `./${dir.src}/static/favicons/favicon.png`,
    ],
    dist: `./${dir.dist}/favicons/`,
  },
  dir: {
    src: `./${dir.src}/`,
    dist: `./${dir.dist}/`
  } 
};

export default paths;