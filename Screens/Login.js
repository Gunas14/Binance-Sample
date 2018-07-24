import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';


class Login extends Component {
    render() {
      return (
          <View style = {styles.container}>
              <TextInput style = { styles.textField }
              underlineColorAndroid = "transparent"
              placeholder = "username" />
              <TextInput style = { styles.textField }
              underlineColorAndroid = "transparent"
              placeholder = "password" />
            <TouchableHighlight onPress={() => this.props.navigation.push('Home')}>
            <Text style = {styles.text}>
               Login
            </Text>
            </TouchableHighlight>
          </View>
      );
    }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#3b5998',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textField : {
        marginLeft : 30,
        marginRight : 30,
        marginBottom : 20,
        height : 45,
        backgroundColor: '#FFF',
    },
    text: {
        marginLeft : 60,
        marginRight : 60,
        height : 40,
        textAlign : 'center',
        color : '#3b5998',
        paddingTop: 8,
        backgroundColor: '#8b9dc3'
     }
})

  export default Login;