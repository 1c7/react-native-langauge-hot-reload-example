import React, { Component } from 'react';
import { Text } from 'react-native';
import i18n from './i18n';

export default class Demo extends React.Component {
  render() {
    return (
      <Text>{i18n.t('current',{language: 'haha'})}</Text>
    )
  }
}