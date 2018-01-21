import React, {Component} from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import styles from "./styles/baseStyles";
import {LogoutButton, UserIcon, MessageIconf, AddressIconf, HomeIconf, PlusIconf} from "./styles/icons";

class ProfileScreen extends Component {
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

export default ProfileScreen;
