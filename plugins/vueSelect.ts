import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import '@/assets/scss/vue-select.scss';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('v-select', VueSelect);
});
