const config = {

  dir: {
    src: 'src',
    dist: 'dist',
    components: 'src/components',
  },

  pwa: {
    appName: 'My App',
    appShortName: 'App',
    appDescription: 'This is my application',
    developerName: 'Hayden Bleasel',
    developerURL: 'http://haydenbleasel.com/',
    background: '#020307',
    path: '/static/favicons/',
    url: 'http://haydenbleasel.com/',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/?homescreen=1',
    version: 1.0,
    logging: false,
    html: 'index.html',
    pipeHTML: true,
    replace: true,
  }

};

export default config



