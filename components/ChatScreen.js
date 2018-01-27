import React from 'react';
import {TextInput, AppRegistry, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import Footer from "./common/Footer";
import Header from "./common/Header";

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
    navigationBarHidden: true
  };
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <Text>Chat with Poppy</Text>
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ChatScreen;
