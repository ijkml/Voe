import type { LocaleCode } from '@/types';

const availableLocales: LocaleCode[] = ['en', 'es', 'fr', 'ja', 'zh'];
const localeRegex = new RegExp(`^/(${availableLocales.join('|')})`, 'i');

function removeLocaleCode(inputString: string) {
  const plain = inputString.replace(localeRegex, '');
  return plain.startsWith('?') || plain.startsWith('#') ? `/${plain}` : plain;
}

export { removeLocaleCode, availableLocales };
