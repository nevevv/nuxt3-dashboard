// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["~~/static/css/style.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        },
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
