
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env :{
    VUE_API_URL : process.env.VUE_API_URL
  },
  head: {
    title: "BELLYGOM",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        property: "og:type",
        content: "website",
        vmid: "og:type",
      },
      {
        property: "og:title",
        content: "BELLYGOM",
        vmid: "og:title",
      },
      {
        property: "og:description",
        content: "서프라이즈! 너도 가져봐 벨리곰NFT!",
        vmid: "og:description",
      },
      {
        property: "og:url",
        content: "http://bellygom.world",
        vmid: "og:url",
      },
      {
        property: "og:image",
        content: "/bellygom_meta_img.png",
        vmid: "og:image",
      },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
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
  css: ["~/assets/scss/common.scss", "~/assets/scss/common_m.scss"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/mixins.js",
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
    '@nuxtjs/dotenv'
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
