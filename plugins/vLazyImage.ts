import VLazyImage from 'v-lazy-image';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('v-lazy-image', VLazyImage);
});
