import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class ViewContainer extends Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    paddingTop: 20
  }
})
