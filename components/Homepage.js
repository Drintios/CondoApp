import React from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate, KeyboardAvoidingView} from 'react-native';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles/baseStyles";

const customUserName = (
  <Hideo
    iconClass={Icon}
    iconName={'user-o'}
    iconColor={'white'}
    label="Username"
    // this is used as backgroundColor of icon container view.
    iconBackgroundColor={'#4379eb'}
    inputStyle={{ fontFamily: 'Roboto',
        fontSize: 15,
        color:"#FFF",
        backgroundColor:"#4379eb" }}
  />
);

const customPassword = (
  <Hideo
    iconClass={Icon}
    iconName={'key'}
    iconColor={'white'}
    label="Password"
    secureTextEntry
    // this is used as backgroundColor of icon container view.
    iconBackgroundColor={'#4379eb'}
    inputStyle={{ fontFamily: 'Roboto',
        fontSize: 15,
        color:"#FFF",
        backgroundColor:"#4379eb" }}
  />
);

class Homepage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Image source={require('./../images/bg.jpg')} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={[styles.header]}></View>
          <ScrollView>
            <View style={[styles.content]}>
              <View style={[styles.whbox]}></View>
              <Image source={require('./../images/logo.png')} style={styles.LogoP}/>
              <View style={[styles.whbox]}></View>
              <View style={[styles.content]}>
              <View style={[styles.textInput]}>
                {customUserName}
              </View>
              <View style={[styles.textInput]}>
                {customPassword}
              </View>
                <Icon.Button name="sign-in" backgroundColor="#11cf78" onPress={() => navigate('Profile')} >
                  <Text style={{fontFamily: 'Roboto', fontSize: 15, color:colors.white}} >Iniciar Sesion</Text>
                </Icon.Button>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Image>
    );
  }
}

export default Homepage;
