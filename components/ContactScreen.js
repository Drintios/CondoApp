import React, {Component} from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import styles from "./styles/baseStyles";
import {BackButton, PhoneIcon, EditIcon, MessageIconf, AddressIconf, HomeIconf, PlusIconf} from "./styles/icons";

class ContactScreen extends Component {
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
              <Image style={[styles.contactImage]} source={require('./../images/tap.png')}/>
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

export default ContactScreen;
