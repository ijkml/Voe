import { useRequestHeaders } from '#imports';
import type { LocaleCode } from '@/types';
const { locale, availableLocales } = useI18n();

const userLanguage = ref<LocaleCode>('en');

// const langCodes: LocaleCode[] = ['en', 'fr', 'ja', 'zh', 'es'];
function isAvailable(code: any): code is LocaleCode {
  return availableLocales.includes(code);
}

function getBrowserLang(): void {
  let lang;

  if (process.client) {
    let code = navigator.language;
    if (code.includes('-')) {
      code = code.split('-')[0];
    }
    lang = code;
  } else if (process.server) {
    const header = useRequestHeaders(['accept-language']);
    const accept = header['accept-language'];
    if (accept) {
      lang = accept.slice(0, 2);
    }
  }

  if (isAvailable(lang)) {
    userLanguage.value = lang;
  }
}

// tell me, what am i doing here?!
function setLocale(code: LocaleCode) {
  if (isAvailable(code)) {
    locale.value = code;
    userLanguage.value = code;
  }
}

export { getBrowserLang, userLanguage, setLocale };
