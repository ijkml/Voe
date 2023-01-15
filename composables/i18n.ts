import type { RouteLocationRaw } from 'vue-router';
import type { LocaleCode } from '@/types';

const availableLocales: LocaleCode[] = ['en', 'es', 'fr', 'ja', 'zh'];

function removeLocaleCode(inputString: string) {
  const regex = new RegExp(`^/(${availableLocales.join('|')})`, 'i');
  return inputString.replace(regex, '');
}

const localizeUrl = (route: RouteLocationRaw, locale?: string | undefined) =>
  useLocaleRoute()(route, locale);

// const localizeUrl = useLocaleRoute();

export { removeLocaleCode, localizeUrl };
