export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },

  routeRules: {
    '/': { isr: true, prerender: true },
  },

  site: {
    url: process.env.NUXT_SITE_URL || 'https://shigatena.dev',
  },

  css: ['~/assets/style/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      available: process.env.NUXT_PUBLIC_AVAILABLE,
      meetingLink: process.env.NUXT_PUBLIC_MEETING_LINK,
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  devtools: {
    enabled: true,
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    'nuxt-svgo',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxt/fonts',
  ],

  image: {
    format: ['webp'],
    screens: {
      avatar: 96,
      cover: 256,
      project: 1536,
      projectLg: 3072,
    },
  },

  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast'],
      },
    ],
  },

  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    baseUrl: '/',
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: '~/i18n.config.ts',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/', '/writing', '/works', '/about'],
    },
  },

  content: {
    watch: {
      ws: {
        showURL: false,
      },
    },
    highlight: {
      theme: 'github-dark',
    },
    navigation: {
      fields: ['image', '_id'],
    },
    markdown: {
      anchorLinks: false,
    },
    locales: ['en'],
    defaultLocale: 'en',
  },

  svgo: {
    autoImportPath: './assets/logo/',
  },

  compatibilityDate: '2024-07-31',
})
