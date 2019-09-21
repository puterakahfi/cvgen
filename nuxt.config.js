import pkg from "./package";

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/cvgen/"
      }
    }
    : {};

export default {
  ...routerBase,
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Putera Kahfi",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vue-github-activity",
    { src: "~/plugins/aos", ssr: false }
  ],
  modules: [
    "nuxt-buefy",
    "@nuxtjs/axios",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          // import whole set
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  }
};
