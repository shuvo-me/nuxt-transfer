// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
  vite:{
    plugins: [svgLoader()]
  },
  colorMode: {
    classSuffix: ''
  },
})
