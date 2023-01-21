// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["~~/static/css/style.css"],
  plugins: ["@/store"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
