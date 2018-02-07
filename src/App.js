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

  add_R(){
    i18n.addResourceBundle('ru', 'translation', {
      "current": "russian language!!!! \"{{language}}\"",
      'title':'asdasda'
    }, true, true);
  }

  render() {
    this.add_R();
    return (
      <Root />
    );
  }
}
