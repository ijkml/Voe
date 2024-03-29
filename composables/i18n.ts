import type { RouteLocationRaw } from 'vue-router';
import type { LocaleCode } from '@/types';

const localizeUrl = (route: RouteLocationRaw, locale?: string | undefined) =>
  useLocaleRoute()(route, locale);

const localeHome = availableLocales.map((l) => `/${l}`);
localeHome.push('/');

const ogLocales: Record<LocaleCode, `${LocaleCode}_${string}`> = {
  en: 'en_US',
  fr: 'fr_FR',
  es: 'es_ES',
  ja: 'ja_JP',
  zh: 'zh_CN',
};

export { localizeUrl, localeHome, ogLocales };
