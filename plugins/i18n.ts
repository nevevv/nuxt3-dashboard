import { createI18n } from "vue-i18n";
import oz from "~~/locales/oz.json";
import ru from "~/locales/ru.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "oz",
    messages: {
      oz,
      ru,
    },
  });

  vueApp.use(i18n);
});
