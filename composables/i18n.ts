import type { RouteLocationRaw } from 'vue-router';
import type { LocaleCode } from '@/types';

const availableLocales: LocaleCode[] = ['en', 'es', 'fr', 'ja', 'zh'];
const localeRegex = new RegExp(`^/(${availableLocales.join('|')})`, 'i');

function removeLocaleCode(inputString: string) {
  const plain = inputString.replace(localeRegex, '');
  return plain.startsWith('?') || plain.startsWith('#') ? `/${plain}` : plain;
}

function changeLocale(inputString: string, code: LocaleCode) {
  return inputString.replace(localeRegex, `/${code}`);
}

const localizeUrl = (route: RouteLocationRaw, locale?: string | undefined) =>
  useLocaleRoute()(route, locale);

// const localizeUrl = useLocaleRoute();

const localeHome = availableLocales.map((l) => `/${l}`);
localeHome.push('/');

export { removeLocaleCode, localizeUrl, changeLocale, localeHome };
