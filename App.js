import React from 'react';
import {
   TextInput, Button, AppRegistry, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Navigate, KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import { StackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    const customTextButton = (
      <Icon.Button name="sign-in" backgroundColor="#11cf78" onPress={() => navigate('Profile')} >
        <Text style={{fontFamily: 'Roboto', fontSize: 15, color:"#FFF"}} >Iniciar Sesion</Text>
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

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
    navigationBarHidden: true
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {


  render() {
    navigationOptions = {
      headerMode:'screen'
    };
const { navigate } = this.props.navigation;

    return (

      <View style={styles.container}>
      <View style={[styles.headerIn]}>
      <TouchableOpacity style={[styles.logout]} onPress={()=> {() => navigate('Home')}}  >
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
            <View style={[styles.boxMessage]}>{MessageIconf}</View>
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
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Message')}>
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


class MessageScreen extends React.Component {

  render() {
const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <View style={[styles.headerIn]}>
        <TouchableOpacity style={[styles.logoutm]} onPress={() => navigate('Profile')}>
        {BackButton}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.trash]} onPress={() => navigate('Message')}>
        {TrashIcon}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.reminder]} onPress={() => navigate('Message')}>
        {ReminderIcon}
        </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[styles.content]}>
            <View style={[styles.box3]}>

                        <Text style={[styles.userPM]}>Reunion de codominio 28 de Agosto</Text>
            <Text style={[styles.minitext]}>INFORMACION DE INTERES</Text>
            <View style={[styles.boxinCenterM]}>
  <Text style={[styles.minitext]}>Se le informa toda la comunidad que habra una reunion de Condomino el dia 28 de agosto a las 7:00p.m</Text>
            </View>
            <View style={[styles.boxinBot]}>

            <Text> Asistira a la reunion?</Text>
            </View>
            <View style={[styles.boxinBotBor]}>
            </View>
            </View>
            <View style={[styles.box4]}>
            <View style={[styles.boxCheck]}>{CheckIcon}</View>
            <View style={[styles.boxEx]}>{ExIcon}</View>
            <View style={[styles.boxWrite]}>{EditIcon}</View>
            <View style={[styles.boxinBot]}>

            </View>
            <View style={[styles.boxinBotBor2]}>
            </View>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.footerIn]}>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
  <View style={[styles.boxFooterIcons]}>{MessageIconf}</View>
          <Text style={[styles.minitextFooter]}>Mensajes</Text>
        </View>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
  <View style={[styles.boxFooterIcons]}>{AddressIconf}</View>
          <Text style={[styles.minitextFooter]}>Directorio</Text>
        </View>
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Profile')}>
  <View style={[styles.boxFooterHomeIcons]}>{HomeIconf}</View>
          <Text style={[styles.minitextFooter]}>Home</Text>
        </TouchableOpacity>
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


const MessageIcon = (<Icon name="envelope" size={26} color="#ddd"/>);
const MessageIconf = (<Icon name="envelope-o" size={26} color="#ddd"/>);
const AddressIconf = (<Icon name="address-card-o" size={26} color="#ddd"/>);
const HomeIconf = (<Icon name="home" size={26} color="#FFF"/>);
const PlusIconf = (<Icon name="plus" size={26} color="#ddd"/>);
const ReminderIcon = (<Icon name="clock-o" size={26} color="#FFF"/>);
const ExIcon = (<Icon name="times" size={26} color="#DF0101"/>);
const LogoutButton = (<Icon.Button name="arrow-left" backgroundColor={azul} color="#FFF">
                      <Text style={{fontFamily: 'Roboto', fontSize: 20, color:"#FFF"}}>Logout</Text>
                        </Icon.Button>);

const UserIcon = (<Icon name="user-circle-o" size={110} color="#ddd"/>);
const BackButton = (<Icon name="arrow-left" backgroundColor={azul} size={26} color="#FFF"/>);
const TrashIcon = (<Icon name="trash" size={26} color="#FFF"/>);
const CheckIcon = (<Icon name="check" size={26} color="#01DF01"/>);
const EditIcon = (<Icon name="pencil-square-o" size={26} color="#848484"/>);

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
    secureTextEntry
    // this is used as backgroundColor of icon container view.
    iconBackgroundColor={'#4379eb'}
    inputStyle={{ fontFamily: 'Roboto',
        fontSize: 15,
        color:"#FFF",
        backgroundColor:"#4379eb" }}
  />
);
const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
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
  boxEx: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 200,
    marginTop: 18,
    marginBottom: 10,
    borderRadius:50,
    borderWidth:1,
    borderColor: '#ddd',
  },
  boxWrite: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 280,
    marginTop: 18,
    marginBottom: 10,
    borderRadius:50,
    borderWidth:1,
    borderColor: '#ddd',
  },
  boxCheck: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: 125,
    marginTop: 18,
    marginBottom: 10,
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
  boxc0: {
  backgroundColor: '#FFF'
},
box3: {
  alignItems: 'center',
  width: 450,
  height: 200,
  backgroundColor: '#FFF',
  marginBottom: 10,
  marginTop: 10
},
userPM:{
    marginLeft: 10,
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: azul,
    marginBottom:7

  },
box4: {
  width: 450,
  height: 85,
  backgroundColor: '#FFF',
  marginBottom: 5,
  marginTop: 5,
  flex: .5,
  flexDirection: 'row',
  alignItems: 'flex-start'
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
  boxinCenterM:{
    //justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 75,
    backgroundColor: '#FFF',
    position: 'absolute',
    marginBottom: 10,
    marginTop: 100,
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
  },
  logoutm:{
    marginTop:5,
    marginLeft:10,
    marginTop:30,
  },
  trash:{
    position: 'absolute',
    right:15,
    marginTop:5,
    marginLeft:10,
    marginTop:30,
  },
  reminder:{
    position: 'absolute',
    right:50,
    marginTop:5,
    marginLeft:10,
    marginTop:30,
  }
});



const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Message: { screen: MessageScreen },
  Chat: { screen: ChatScreen },
},{
  navigationOptions: {
    header: null,
  },
  });


export default SimpleApp;
