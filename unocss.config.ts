import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-zinc-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  theme: {
    colors: {
      brand: {
        pri: {
          DEFAULT: 'hsl(263, 60%, 35%)',
          dark: 'hsl(263, 61%, 15%)',
        },
        sec: 'hsl(264, 100%, 88%)',
      },
    },
    fontFamily: {
      // serif: 'Venturis,ui-serif,Georgia,Cambria,"Times New Roman",Times,serif',
      serif: '',
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
