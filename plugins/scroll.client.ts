// Fix for scrollToTop bug
export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp();

  nuxtApp.hooks.hook('page:transition:finish', async () => {
    window?.scrollTo({ top: 8 });
  });
});
