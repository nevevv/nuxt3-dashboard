export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  css: ["assets/css/style.css"],
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  runtimeConfig: {
    public: {
      api_url: process.env.API_URL,
    },
  },
});

