import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import ja from '../locales/ja.json';
import ne from '../locales/ne.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en, hi, ja, ne
};

const currentLocale = I18n.currentLocale();
//console.log("RTL: ", currentLocale);
//I18n.locale = 'en';

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('hi') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
};

 export const setLanguage = (locale) => {
   I18n.locale = locale;
 };

 export const getLanguage = () => I18n.locale;

export default I18n;
