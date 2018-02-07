import ReactNativeLanguages from 'react-native-languages';
import i18n from 'i18next';

import en from './translations/en.json';
import fr from './translations/fr.json';
import de from './translations/de.json';

export default i18n.init({
  debug: true,
  lng: ReactNativeLanguages.language,
  fallbackLng: 'en',
  resources: { en, fr, de }
});
