import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App'

export default class CatAgeApp extends Component {
  render() {
    return (
      <App />
    );
  }
}



AppRegistry.registerComponent('CatAgeApp', () => CatAgeApp);
