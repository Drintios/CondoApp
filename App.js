import React from 'react';
import { TextInput, Button, AppRegistry, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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

const CondoApp = StackNavigator({
  Contact: { screen: ContactScreen },
  Profile: { screen: ProfileScreen },
  Home:    { screen: Homepage },
  Message: { screen: MessageScreen },
  Address: { screen: AddressBook },
  Chat:    { screen: ChatScreen },
},{
  navigationOptions: {
    header: null,
    initialRouteName: 'Profile'
  },
});

AppRegistry.registerComponent('CondoApp', () => CondoApp);

export default CondoApp;
