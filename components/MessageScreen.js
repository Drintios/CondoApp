import React, {Component} from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import {BackButton, ReminderIcon, TrashIcon, CheckIcon, ExIcon, EditIcon, MessageIconf, AddressIconf, HomeIconf, PlusIconf} from "./styles/icons";
import styles from "./styles/baseStyles";


class MessageScreen extends Component {

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

export default MessageScreen;
