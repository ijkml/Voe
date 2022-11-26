import type { BasicColorSchema } from '@vueuse/core';

const colorMode = useColorMode();

function switchTheme(): Promise<BasicColorSchema> {
  return new Promise((resolve: (T: BasicColorSchema) => void) => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
    resolve(colorMode.value);
  });
}

function getTheme(): Promise<BasicColorSchema> {
  return Promise.resolve(colorMode.value);
}

export { colorMode, switchTheme, getTheme };
