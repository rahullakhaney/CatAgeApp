import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import ViewContainer from './components/ViewContainer'

export default class App extends Component {

  constructor(props) {
   super(props);
   this.state = { age: '' };
  }

  _handleTextChange = (event) => {
    var age = event.nativeEvent.text;
    this.setState({age: age});
  }

  render() {
    var content = null;
    if (this.state.age != '') {
      content = <Text style = {styles.ageResult}>Your age in Cat Years is: {this.state.age * 7}</Text>
    } else {
      content = <Text style = {styles.instructions}>Your age in cat years will be displayed here</Text>
    }

    return (
      <ViewContainer>
        <View style = {styles.Container}>
          <Text style = {styles.Heading}>Cat Age Calculator</Text>
          <Text style = {styles.SubHeading}>Enter your age</Text>
          <TextInput
          style = {styles.ageInput}
          returnKeyType = 'go'
          onSubmitEditing={this._handleTextChange}
          />
          {content}
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
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
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
  },
  ageInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    color: 'black'
  },
  ageLabel: {
    fontFamily: ParentFont,
    fontSize: 16,
    margin: 10,
    marginBottom: 20
  },
  ageResult: {
    fontFamily: ParentFont,
    fontSize: 20,
    padding: 4,
    margin: 10,
    marginTop: 20
  },
  instructions: {
    fontFamily: ParentFont,
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    marginTop: 5
  }
})
