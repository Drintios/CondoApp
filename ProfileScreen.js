import React, {Component} from 'react';
import { TextInput, AppRegistry, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Navigate } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";

export default class ProfileScreen extends React.Component {

  render() {

    return (

      <View style={styles.container}>
        <View style={[styles.headerIn]}>
        <TouchableOpacity style={[styles.logout]} onPress={()=> {Actions.Login}}  >
        {LogoutButton}
        </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[styles.content]}>
            <View style={[styles.box3]}>
            <View style={[styles.boxinLef]}>
            {UserIcon}
            </View>
            <View style={[styles.boxinRight]}>
            <Text style={[styles.tittle]}>Bienvenido</Text>
            <Text style={[styles.userP]}>JOSE AVILA</Text>
            <Text style={[styles.minitext]}>josemanuelavila2@gmail.com</Text>
            </View>
            <View style={[styles.boxinBot]}>
            <Text style={[styles.minitext]}> NOTIFICACIONES PENDIENTES</Text>
            </View>
            <View style={[styles.boxinBotBor]}>
            </View>
            </View>
            <View style={[styles.box4]}>
            <View style={[styles.boxinLef2]}>
            <View style={[styles.boxMessage]}>{MessageIcon}</View>
            </View>
            <View style={[styles.boxinCenter]}>
            <Text style={[styles.tittle2]}>Tienes un mensaje sin leer</Text>
            <Text style={[styles.minitext]}>Titulo del Mensaje</Text>
            </View>
            <View style={[styles.boxinRight2]}>
            <Text style={[styles.minitext]}>28 Jul</Text>
            </View>
            <View style={[styles.boxinBot]}>

            </View>
            <View style={[styles.boxinBotBor2]}>
            </View>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.footerIn]}>
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={Actions.Messages}>
  <View style={[styles.boxFooterIcons]}>{MessageIconf}</View>
          <Text style={[styles.minitextFooter]}>Mensajes</Text>
        </TouchableOpacity>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
  <View style={[styles.boxFooterIcons]}>{AddressIconf}</View>
          <Text style={[styles.minitextFooter]}>Directorio</Text>
        </View>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
  <View style={[styles.boxFooterHomeIcons]}>{HomeIconf}</View>
          <Text style={[styles.minitextFooter]}>Home</Text>
        </View>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
  <View style={[styles.boxFooterIcons]}>{PlusIconf}</View>
          <Text style={[styles.minitextFooter]}>Pronto</Text>
        </View>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
  <View style={[styles.boxFooterIcons]}>{PlusIconf}</View>
          <Text style={[styles.minitextFooter]}>Pronto</Text>
        </View>
        </View>
      </View>

    );
  }
}


const UserIcon = (<Icon name="user-circle-o" size={110} color="#ddd"/>);
const MessageIcon = (<Icon name="envelope" size={26} color="#ddd"/>);
const MessageIconf = (<Icon name="envelope-o" size={26} color="#ddd"/>);
const AddressIconf = (<Icon name="address-card-o" size={26} color="#ddd"/>);
const HomeIconf = (<Icon name="home" size={26} color="#FFF"/>);
const PlusIconf = (<Icon name="plus" size={26} color="#ddd"/>);

const LogoutButton = (<Icon.Button name="arrow-left" backgroundColor={azul} color="#FFF">
                  <Text style={{fontFamily: 'Roboto', fontSize: 20, color:"#FFF"}}  onPress={Actions.Login} >Logout</Text>
                </Icon.Button>);

const customTextButton = (
  <Icon.Button name="sign-in" backgroundColor="#11cf78" onPress={Actions.ProfileScreen}>
    <Text style={{fontFamily: 'Roboto', fontSize: 15, color:"#FFF"}}>Iniciar Sesion</Text>
  </Icon.Button>
);
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
const azul = "#4379eb";
const customPassword = (
  <Hideo
    iconClass={Icon}
    iconName={'key'}
    iconColor={'white'}
    label="Password"
    // this is used as backgroundColor of icon container view.
    iconBackgroundColor={'#4379eb'}
    inputStyle={{ fontFamily: 'Roboto',
        fontSize: 15,
        color:"#FFF",
        backgroundColor:"#4379eb" }}
  />
);
const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMessage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    position: 'absolute',
    left:40,
    marginBottom: 10,
    borderRadius:50,
    borderWidth:1,
    borderColor: '#ddd',
  },
  boxFooterIcons: {
    marginTop:3,
    justifyContent:'center',
    alignItems:'center',
    width:40,
    height:40,
    backgroundColor: '#FFF',
    borderRadius:50,
    borderWidth:1,
    borderColor: '#ddd',
  },
  boxFooterHomeIcons: {
    marginTop:3,
    justifyContent:'center',
    alignItems:'center',
    width:40,
    height:40,
    backgroundColor: '#ddd',
    borderRadius:50,
    borderWidth:1,
    borderColor: '#ddd',
  },
  textInput:{
    width: 250,
    height: 60,
    backgroundColor: 'transparent',
  },
  LogoP:{

    width:250, //por cada 50
    height:35, // sube 7 hei
    marginBottom: 10,
  },
  backgroundImage: {
  //  alignItems: 'center',
  //  justifyContent: 'center',
    flex: 2,
    width: null,
    height:null,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    zIndex: 10
  },
  headerIn: {
    height: 75,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: azul,
    zIndex: 10
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  footer: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  footerIn: {
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    flex: .5,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    marginBottom: 10
  },
  boxf: {
    alignItems: 'center',
    width: 72,
    height: 100,
    backgroundColor: '#333',
    marginBottom: 10
  },
  box3: {
    width: 450,
    height: 200,
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 10
  },
  box4: {
    width: 450,
    height: 85,
    backgroundColor: '#FFF',
    marginBottom: 5,
    marginTop: 5
  },
  boxc0: {
  backgroundColor: '#FFF'
},
  boxc1: {
  backgroundColor: '#2196F3'
},
boxc2: {
  backgroundColor: '#8BC34A'
},
boxc3: {
  backgroundColor: '#e3aa1a'
},
  boxinLef: {
    justifyContent: 'center',
      alignItems: 'center',
    width: 180,
    height: 200,
    backgroundColor: '#FFF',
    position: 'absolute',
    left:35,
    marginBottom: 10
  },
  boxinLef2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 70,
    backgroundColor: '#FFF',
    position: 'absolute',
    left:35,
    marginBottom: 10
  },
  boxinRight: {
    width: 250,
    height: 250,
    backgroundColor: '#FFF',
    position: 'absolute',
    left:200,
    marginTop:5,
    marginBottom: 10
  },
  boxinRight2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 70,
    backgroundColor: '#FFF',
    position: 'absolute',
    left:305,
    marginBottom: 10
  },
  boxinCenter:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 75,
    backgroundColor: '#FFF',
    position: 'absolute',
    left:125,
    marginBottom: 10
  },
  boxinBot: {
    alignItems: 'center',
    width: 450,
    height: 25,
    position: 'absolute',
    top:180,
    bottom:0,
    marginBottom: 10
  },
  boxinBotBor: {
      alignItems: 'center',
      width: 450,
      height: 25,
      borderBottomColor:"#ddd",
      borderBottomWidth:300,
      position: 'absolute',
      top:190,
      bottom:0,
      marginTop:8,
      marginBottom: 10
    },
  boxinBotBor2: {
        alignItems: 'center',
        width: 450,
        height: 10,
        borderBottomColor:"#ddd",
        borderBottomWidth:300,
        position: 'absolute',
        top:80,
        bottom:0,
        marginTop:3,
        marginBottom: 10
    },
  wbox: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  whbox: {
    width: 100,
    height: 50,
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  user:{
    fontFamily: 'Roboto',
    fontSize: 15,
    color:"#FFF",
    backgroundColor:"#4379eb"
  },
  userP:{
      fontFamily: 'Roboto',
      fontSize: 25,
      color: azul,
      marginBottom:7

    },
    tittle:{
      fontFamily: 'Roboto',
      fontSize: 40,
      color:"#999",
      marginTop:35,
      marginBottom:10
    },
    tittle2:{
      fontFamily: 'Roboto',
      fontSize: 14,
      color:"#999",
      marginTop:0,
      marginBottom:5
    },
    minitext:{
      fontFamily: 'Roboto',
      fontSize: 13,
      color:"#999",
      marginBottom:10

    },
    minitextFooter:{
      marginTop: 0,
      fontFamily: 'Roboto',
      fontSize: 13,
      color:"#999",
      marginBottom:10

    },
    minitext2:{
      fontFamily: 'Roboto',
      fontSize: 13,
      color:"#999",
      marginBottom:0

    },

  logout:{
    marginTop:30,
  }
});
