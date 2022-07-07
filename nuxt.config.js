export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "bellygomworld",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "js/common.js", type: "text/javascript" },
      {
        src: "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.js",
        type: "text/javascript",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/common.scss"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~plugins/swiper.js",
      ssr: false,
    },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    "@nuxtjs/style-resources",
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/i18n",
    "nuxt-mq",
  ],
  i18n: {
    locales: [
      { code: "KOR", iso: "ko-KR", file: "ko.json" },
      { code: "ENG", iso: "en-US", file: "en.json" },
    ],
    langDir: "~/locales/",
    defaultLocale: "KOR",
    lazy: true,
    strategy: "prefix_except_default",
    vueI18nLoader: true,
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: "t_locale",
      fallbackLocale: "ko-KR",
    },
  },
  mq: {
    breakpoints: {
      mobile: 480,
      pc: Infinity,
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["external_library"],
    transpile: ["gsap"],
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: "src",
        },
      },
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      });
    },
  },
  styleResources: {
    scss: ["./assets/scss/_variables.scss"],
  },

  gsap: {
    /* Module Options */
  },

  /*eslint false*/
  lintOnSave: false,
  server: {
    host: "0",
  },
};
