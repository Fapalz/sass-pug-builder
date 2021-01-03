const config = {

  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    // 'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    //'src/scss/variables.scss',
    //'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/img/demo-*.{png,svg,jpg,jpeg}': 'img/',
    // 'src/fonts/demo-empty-open-sans.woff2': 'fonts/',
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },

  'dir': {
    'src': './src/',
    'dist': './dist/',
    'blocks': './src/blocks/',
  }
};

export const paths = {
  pages: {
    src: [
      "./src/pages/**/*.pug",
    ],
    dist: "./dist/",
    watch: [
      "./src/blocks/**/*.pug",
      "./src/pages/**/*.pug",
      "./src/pug/**/*.pug",
      "!./src/pug/_mixins.pug"
    ]
  },
  styles: {
    src: [
      "./src/styles/_entry/main.{scss,sass}",
      "./src/styles/pages/*.{scss,sass}"
    ],
    dist: "./dist/styles/",
    watch: [
      "./src/blocks/**/*.{scss,sass}",
      "./src/styles/**/*.{scss,sass}",
      "!./src/styles/_entry/*.{scss,sass}"
    ]
  },
  scripts: {
    src: "./src/js/main.js",
    dist: "./dist/js/",
    watch: [
      "./src/blocks/**/*.js",
      "./src/js/**/*.{js,glsl}"
    ]
  },
  assets: {
    src: [
      "./src/assets/**/*.*",
    ],
    dist: "./dist/assets/",
    watch: [
      "./src/assets/**/*.*",
    ]
  },
  static: {
    src: [
      "./src/static/**/*.*",
    ],
    dist: "./dist/",
    watch: [
      "./src/static/**/*.*",
    ]
  },
  

  jsPlugins: {
    src: "./src/js/plugins/*.js",
    dist: "./dist/js/plugins/",
  },
  
  images: {
    src: [
      "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
      "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
    ],
    dist: "./dist/img/",
    watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
  },
  webp: {
    src: [
      "./src/img/**/*.{jpg,jpeg,png,tiff}",
      "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
    ],
    dist: "./dist/img/",
    watch: [
      "./src/img/**/*.{jpg,jpeg,png,tiff}",
      "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
    ]
  },
  sprites: {
    src: "./src/img/svg/*.svg",
    dist: "./dist/img/sprites/",
    watch: "./src/img/svg/*.svg"
  },
  fonts: {
    src: "./src/fonts/**/*.{woff,woff2}",
    dist: "./dist/fonts/",
    watch: "./src/fonts/**/*.{woff,woff2}"
  },
  files: {
    src: "./src/files/**/*.*",
    dist: "./dist/files/",
    watch: "./src/files/**/*.*"
  },
  favicons: {
    src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
    dist: "./dist/img/favicons/",
  },
  gzip: {
    src: "./src/.htaccess",
    dist: "./dist/"
  }
};


export default config



