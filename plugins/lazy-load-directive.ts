export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy-img', (el: HTMLElement, binding) => {
    // lazy load bg-img
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.classList.add(
          typeof binding.value === 'string' && binding.value !== ''
            ? binding.value
            : 'img-y'
        );
        stop();
      }
    });
  });
});
