import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';
import ViewContainer from './components/ViewContainer'

export default class App extends Component {
  render() {
    return (
      <ViewContainer>
        <View style = {styles.Container}>
          <Text style = {styles.Heading}>Cat Age Calculator</Text>
          <Text style = {styles.SubHeading}>Enter your age</Text>
        </View>
      </ViewContainer>
    );
  }
}

var ParentFont = 'Avenir-Medium';

const styles = StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor: 'mistyrose',
    alignItems: 'center'
  },
  Heading: {
    fontFamily: ParentFont,
    fontSize: 26,
    marginTop: 30
  },
  SubHeading: {
    fontFamily: ParentFont,
    fontSize: 20,
    marginTop: 10

  }
})
