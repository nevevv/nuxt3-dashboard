// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["~~/static/css/style.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "~~/assets/logo-icon.png" },
      ],
    },
  },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      api_url: process.env.API_URL,
    },
  },
});
