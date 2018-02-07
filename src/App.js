import React, { PureComponent } from 'react';
import ReactNativeLanguages from 'react-native-languages';
import i18n from './i18n';
import Root from './Root';

export default class App extends PureComponent {
  componentWillMount() {
    ReactNativeLanguages.addEventListener('change', this._onLanguagesChange);
  }

  componentWillUnmount() {
    ReactNativeLanguages.removeEventListener('change', this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language, languages }) => {
    i18n.changeLanguage(language);
  };

  add_Russian(){
    // you can run this when HTTP request return content
    i18n.addResourceBundle('ru', 'translation', {
      "current": "Russian language!! \"{{language}}\"",
    }, true, true);
  }

  render() {
    this.add_Russian();
    return (
      <Root />
    );
  }
}
