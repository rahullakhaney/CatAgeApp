import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class CatAgeApp extends Component {
  render() {
    return (
      <Text>Hello World</Text>
    );
  }
}



AppRegistry.registerComponent('CatAgeApp', () => CatAgeApp);
