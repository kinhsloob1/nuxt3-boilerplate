import { resolve } from 'path';
import svgicon from 'vite-plugin-svgicon';
import svgLoader from 'vite-svg-loader';
import { VitePWA } from 'vite-plugin-pwa';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-lodash', '@vueuse/nuxt'],
  app: {
    pageTransition: {
      name: 'nuxt-page-fade',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'nuxt-layout-fade',
      mode: 'out-in',
    },
  },
  meta: {
    title: 'Gusbell | Nuxt 3 template',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      {
        rel: 'stylesheet',
        href: '/css/campton.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/reset.css',
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicon.png',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
  },
  css: ['assets/scss/global.scss'],
  lodash: {
    prefix: 'useLoadash',
    prefixSkip: [],
    exclude: [],
    alias: [
      //   ['camelCase', 'stringToCamelCase'],
      //   ['kebabCase', 'stringToKebabCase'],
    ],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          video: ['src', 'poster'],
          source: ['src'],
          img: ['src'],
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href'],
          icon: ['data'],
          'v-lazy-image': ['src', 'src-placeholder'],
          vLazyImage: ['src', 'src-placeholder'],
          'snippet-image-card': ['image-src'],
          SnippetImageCard: ['image-src'],
        },
      },
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          cleanupOutdatedCaches: true,
        },
        devOptions: {
          enabled: true,
        },
      }),
      svgicon({
        include: ['**/assets/svgs/icons/*.svg'],
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
            },
          ],
        },
      }),
      svgLoader({
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
            },
          ],
        },
      }),
    ],
  },
  build: {
    cache: true,
    analyze: {
      filename: 'stats.html',
      emitFile: true,
      open: true,
      json: false,
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      compilerOptions: {
        jsx: 'preserve',
        types: [
          // https://pinia.vuejs.org/
          '@pinia/nuxt',
          'vite/client',
        ],
        typeRoots: [
          resolve('./node_modules/@types'),
          resolve('./typings'),
        ],
      },
    },
  },
});
