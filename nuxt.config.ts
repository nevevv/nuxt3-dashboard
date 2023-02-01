export default defineNuxtConfig({
    ssr: false,
    css: ["~/static/css/style.css"],
    app: {
        pageTransition: {name: "page", mode: "out-in"},
    },
    modules: [
        "@pinia/nuxt",
    ],

    runtimeConfig: {
        public: {
            baseURL: process.env.API_URL
        }
    },

});
