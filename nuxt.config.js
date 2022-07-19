export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BELLY GOM",
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
      {
        src: "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.js",
        type: "text/javascript",
      },
      {
        src: "/fullpage.scrollHorizontally.min.js",
        type: "text/javascript",
      },
      {
        src: "/scrolloverflow.js",
        type: "text/javascript",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/common.scss","~/assets/scss/common_m.scss"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/mixins.js',
    {
      src: "~plugins/swiper.js",
      ssr: false,
    },
    { src: "~plugins/fullpage", mode: "client" },
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
    "nuxt-fullpage.js",
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "nuxt-mq",

    // ['@openafg/nuxt-fullpage', {
    //     licenseKey: 'H68K9-OX8AH-GK457-17J28-VGRRP',
    //     scrollBar: false,
    //     navigation: true,
    //     scrollHorizontally: true,
    //     anchors: ['page1', 'page2', 'page3'],
    //     sectionsColor: ['#000000', '#ff5f45', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
    // }]
  ],
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
    transpile: ["gsap", "three"],
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
          esModule: false,
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
    host: "0.0.0.0",
  },
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
  },
};
