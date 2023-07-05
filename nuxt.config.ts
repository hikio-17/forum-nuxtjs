export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ['store']
  },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    "@/assets/css/style.css",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
})
