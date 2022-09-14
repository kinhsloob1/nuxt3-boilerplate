import VueScreen from 'vue-screen';
import { grid } from '~/composables/vueSreen';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScreen, {
    grid,
  });
});
