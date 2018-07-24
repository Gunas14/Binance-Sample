import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './Screens/Login'
import Home from './Screens/Home'

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = new StackNavigator ({
    Login : { screen : Login },
    Home : { screen : Home,
      navigationOptions: {
        title: "Home",
        headerLeft: null
      }, 
    },
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABABAB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts:{
    color : 'blue',
    fontSize : 20
  },
});
