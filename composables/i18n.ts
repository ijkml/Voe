import type { RouteLocationRaw } from 'vue-router';
import type { LocaleCode } from '@/types';

const availableLocales: LocaleCode[] = ['en', 'es', 'fr', 'ja', 'zh'];

function removeLocaleCode(inputString: string) {
  const regex = new RegExp(`^/(${availableLocales.join('|')})`, 'i');
  const plain = inputString.replace(regex, '');
  return plain.startsWith('?') || plain.startsWith('#') ? `/${plain}` : plain;
}

function changeLocale(inputString: string, code: LocaleCode) {
  const regex = new RegExp(`^/(${availableLocales.join('|')})`, 'i');
  return inputString.replace(regex, `/${code}`);
}

const localizeUrl = (route: RouteLocationRaw, locale?: string | undefined) =>
  useLocaleRoute()(route, locale);

// const localizeUrl = useLocaleRoute();

const localeHome = availableLocales.map((l) => `/${l}`);
localeHome.push('/');

export { removeLocaleCode, localizeUrl, changeLocale, localeHome };
