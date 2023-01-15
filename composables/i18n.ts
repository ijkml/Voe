import type { LocaleCode } from '@/types';

const availableLocales: LocaleCode[] = ['en', 'es', 'fr', 'ja', 'zh'];

function removeLocaleCode(inputString: string) {
  const regex = new RegExp(`^/(${availableLocales.join('|')})`, 'i');
  return inputString.replace(regex, '');
}

const localizeUrl = useLocaleRoute();

export { removeLocaleCode, localizeUrl };
