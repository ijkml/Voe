import type { RawLocation } from '@intlify/vue-router-bridge';
import type { RouteLocation, RouteLocationRaw } from 'vue-router';
import type { LocaleCode } from '@/types';

const availableLocales: LocaleCode[] = ['en', 'es', 'fr', 'ja', 'zh'];

function removeLocaleCode(inputString: string) {
  const regex = new RegExp(`^/(${availableLocales.join('|')})`, 'i');
  return inputString.replace(regex, '');
}

const localePath = (
  route: RawLocation | RouteLocation | RouteLocationRaw,
  locale?: string | undefined
) => useLocalePath()(route as RawLocation | RouteLocation, locale);

export { removeLocaleCode, localePath };
