module.exports = {
  /*
  ** Headers of the page
  */
 // analyze: true,
  router: {
    base: process.env.NODE_ENV === 'dev' ? '/' : '/airbnb-tips-daily/'
  },
  head: {
    title: 'Daily Airbnb Tips: Interactive Catalogue for Hosts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'keywords', content: 'Airbnb tips'},
      { name: 'msapplication-TileImage', content: 'ms-icon-144x144.png'},
      { property: 'og:title', content: 'Daily Airbnb Tips: Interactive Catalogue for Hosts'},
      { property: 'og:description', content: 'There is no such thing as too many Airbnb tips for professional hosts who are striving to improve their business. AirGMS team wants to share our accumulated knowledge with you in this interactive Daily Airbnb Tips catalogue. Ready for some tips?'},
      { property: 'og:image', content: 'http://airbnb.markello.biz/logo.png'},
      { hid: 'description', name: 'description', content: 'There is no such thing as too many Airbnb tips for professional hosts who are striving to improve their business. AirGMS team wants to share our accumulated knowledge with you in this interactive Daily Airbnb Tips catalogue. Ready for some tips?' }
    ],
    link: [
      { rel: 'apple-touch-icon', href: '/apple-icon-57x57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/apple-icon-60x60.png', sizes: '60x60' },
      { rel: 'apple-touch-icon', href: '/apple-icon-72x72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', href: '/apple-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', href: '/apple-icon-114x114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', href: '/apple-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/apple-icon-180x180.png', sizes: '180x180' },
      { rel: 'apple-touch-icon', href: '/apple-icon-192x192.png', sizes: '192x192' },
      { rel: 'icon', type: 'image/png', href: '/android-icon-192x192', sizes: '192x192' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '57x57' },
      { rel: 'manifest', href: '/manifest.json' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fff' },
  loadingIndicator: {
    background: 'linear-gradient(135deg, #FFE53A 0%, #FF2525 100%)'
  },
  /*
  ** Change atom syntax for vue sass
  */
  mode: 'spa',
  vue: {
    loaders: {
      sass: 'style!css!sass?indentedSyntax',
      scss: 'style!css!sass'
    }
  },
  modules: [
    ['nuxt-validate', {
      lang: 'en'
    }],
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    ['@nuxtjs/google-analytics', {
      id: 'UA-66339147-2'
    }],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-5WTRW7F' }]
  ],
  axios: {
    baseURL: 'http://airbnb.markello.info/api',
    // debug: true
  },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/vue-input-number', ssr: false },
    { src: '~/plugins/vue-anime', ssr: false }
  ],
  build: {
    vendor: ['vue-input-number', 'vue-anime'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
