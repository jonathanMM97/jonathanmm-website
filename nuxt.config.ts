import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s | Jonathan M. M. Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=2' },
        { name: 'robots', content: 'index, follow' },
        {
          name: 'description',
          content:
            'Portfolio of Jonathan M. M., a passionate web developer specializing in front-end development and user experience design.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preload',
          href: '/fonts/205TF-Exposure-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
      ],
    },
  },
  compatibilityDate: '2026-08-11',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: ['300', '400', '700', '800'],
      },
    ],
  },

  modules: ['@nuxt/fonts', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'es', language: 'es-ES', file: 'es.json' },
      { code: 'en', language: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})
