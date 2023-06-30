export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ['store']
  },
  modules: [
    '@pinia/nuxt',
  ],
  css: ["@/public/assets/css/style.css"],
})
