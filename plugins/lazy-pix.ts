import { useLazyPix } from 'lazy-pix';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy-pix', useLazyPix('img-y'));
});
