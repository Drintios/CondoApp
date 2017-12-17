import React, {Component} from 'react';
import {TextInput, AppRegistry, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import {styles, colors} from "./styles/baseStyles";


export default class Homepage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    const customTextButton = (
      <Icon.Button name="sign-in" backgroundColor="#11cf78" onPress={() => navigate('Address')} >
        <Text style={{fontFamily: 'Roboto', fontSize: 15, color:colors.white}} >Iniciar Sesion</Text>
      </Icon.Button>
    );
    return (
      <Image source={require('./images/bg.jpg')} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={[styles.header]}></View>
          <ScrollView>
            <View style={[styles.content]}>
              <View style={[styles.whbox]}></View>
              <Image source={require('./images/logo.png')} style={styles.LogoP}/>
              <View style={[styles.whbox]}></View>
              <View style={[styles.content]}>
              <View style={[styles.textInput]}>
                {customUserName}
              </View>
              <View style={[styles.textInput]}>
                {customPassword}
              </View>
                {customTextButton}
              </View>
            </View>
          </ScrollView>
          <View style={[styles.footer]}></View>
        </KeyboardAvoidingView>
      </Image>
    );
  }
}