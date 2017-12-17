import React, {Component} from 'react';
import {TextInput, AppRegistry, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
    navigationBarHidden: true
  };
  render() {
    return (
      <View>
        <Text>Chat with Poppy</Text>
      </View>
    );
  }
}