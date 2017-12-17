import React from 'react';
import {
   TextInput, Button, AppRegistry, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Navigate, KeyboardAvoidingView
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { Hideo } from 'react-native-textinput-effects';
import { StackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';
import { Homepage } from './components/Homepage';

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

class ContactPedro extends React.Component {
  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={[styles.headerIn]}>
          <TouchableOpacity style={[styles.logoutm]} onPress={() => navigate('Address')}>
          {BackButton}
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[styles.content]}>
            <View style={[styles.box3]}>
              <Image style={[styles.contactImage]} source={require('./images/power-cord.png')}/>
              <Text style={[styles.contactTitle]}>Pedro Camacho</Text>
              <Text style={[styles.contactDescTitle]}>INFORMACION DE INTERES</Text>
              <Text style={[styles.contactDesc]}>Reparacion de cableado</Text>
              <Text style={[styles.contactPhone]}>Telf: +17865853226</Text>
            </View>
            <View style={[styles.box4]}>
              <TouchableOpacity style={[styles.boxCheck]} onPress={() => Communications.phonecall('+17865853226', true)}>
                <View>{PhoneIcon}</View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.boxWrite]} onPress={() => Communications.email(['canaanabelardo@gmail.com'],null,null,'My Subject','My body text')}>

                <View>{EditIcon}</View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.footerIn]}>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
          <View style={[styles.boxFooterIcons]}>{MessageIconf}</View>
          <Text style={[styles.minitextFooter]}>Mensajes</Text>
        </View>
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Address')}>
          <View style={[styles.boxFooterIcons]}>{AddressIconf}</View>
          <Text style={[styles.minitextFooter]}>Directorio</Text>
        </TouchableOpacity>
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

class ContactAbelardo extends React.Component {
  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={[styles.headerIn]}>
          <TouchableOpacity style={[styles.logoutm]} onPress={() => navigate('Address')}>
          {BackButton}
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[styles.content]}>
            <View style={[styles.box3]}>
              <Image style={[styles.contactImage]} source={require('./images/tap.png')}/>
              <Text style={[styles.contactTitle]}>Abelardo Canaan</Text>
              <Text style={[styles.contactDescTitle]}>INFORMACION DE INTERES</Text>
              <Text style={[styles.contactDesc]}>Reparacion de tuberias</Text>
              <Text style={[styles.contactPhone]}>Telf: +17865853226</Text>
            </View>
            <View style={[styles.box4]}>
              <TouchableOpacity style={[styles.boxCheck]} onPress={() => Communications.phonecall('+17865853226', true)}>
                <View>{PhoneIcon}</View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.boxWrite]} onPress={() => Communications.email(['canaanabelardo@gmail.com'],null,null,'My Subject','My body text')}>

                <View>{EditIcon}</View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.footerIn]}>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
          <View style={[styles.boxFooterIcons]}>{MessageIconf}</View>
          <Text style={[styles.minitextFooter]}>Mensajes</Text>
        </View>
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Address')}>
          <View style={[styles.boxFooterIcons]}>{AddressIconf}</View>
          <Text style={[styles.minitextFooter]}>Directorio</Text>
        </TouchableOpacity>
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

class AddressBook extends React.Component {
  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={[styles.headerIn]}>
          <TouchableOpacity style={[styles.logoutm]} onPress={() => navigate('Profile')}>
            {BackButton}
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[styles.contactWrapper]}>
            <Grid style={{marginTop: 25}}>
              <Col>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
              </Col>
            </Grid>
          </View>
        </ScrollView>
        <View style={[styles.footerIn]}>
          <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
            <View style={[styles.boxFooterIcons]}>{MessageIconf}</View>
            <Text style={[styles.minitextFooter]}>Mensajes</Text>
          </View>
          <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Address')}>
            <View style={[styles.boxFooterIcons]}>{AddressIconf}</View>
            <Text style={[styles.minitextFooter]}>Directorio</Text>
          </TouchableOpacity>
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
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Address')}>
          <View style={[styles.boxFooterIcons]}>{AddressIconf}</View>
          <Text style={[styles.minitextFooter]}>Directorio</Text>
        </TouchableOpacity>
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
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Address')}>
          <View style={[styles.boxFooterIcons]}>{AddressIconf}</View>
          <Text style={[styles.minitextFooter]}>Directorio</Text>
        </TouchableOpacity>
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




const SimpleApp = StackNavigator({
  Home: { screen: Homepage },
  Profile: { screen: ProfileScreen },
  Address: { screen: AddressBook },
  Pedro: { screen: ContactPedro },
  Abelardo: { screen: ContactAbelardo },
  Message: { screen: MessageScreen },
  Chat: { screen: ChatScreen },
},{
  navigationOptions: {
    header: null,
  },
});


export default SimpleApp;
