import React from 'react';
import { TextInput, Button, AppRegistry, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Navigate, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import { StackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';
// Components.
import Homepage from './components/Homepage';
import ChatScreen from './components/ChatScreen';
import AddressBook from './components/AddressBook';
import ContactScreen from './components/ContactScreen';
import ProfileScreen from './components/ProfileScreen';
import MessageScreen from './components/MessageScreen';

const SimpleApp = StackNavigator({
  Message: { screen: MessageScreen },
  Profile: { screen: ProfileScreen },
  Home:    { screen: Homepage },
  Address: { screen: AddressBook },
  Contact: { screen: ContactScreen },
  Chat:    { screen: ChatScreen },
},{
  navigationOptions: {
    header: null,
  },
});


export default SimpleApp;
