import { useLazyPix } from 'lazy-pix';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy-img', useLazyPix('img-y'));
});
