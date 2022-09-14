import { install } from 'resize-observer';

export default defineNuxtPlugin(() => {
  if (process.client && !window.ResizeObserver) {
    install();
  }
});
