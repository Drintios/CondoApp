import React, {Component} from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import styles from "./styles/baseStyles";
import Footer from "./common/Footer";
import Header from "./common/Header";


class MessageScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
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
              <View style={[styles.boxCheck]}>
                <Icon name="check" size={26} color={colors.freeSpeechGreen}/>
              </View>
              <View style={[styles.boxEx]}>
                <Icon name="times" size={26} color={colors.freeSpeechRed}/>
              </View>
              <View style={[styles.boxWrite]}>
                <Icon name="pencil-square-o" size={26} color={colors.havelockBlue}/>
              </View>
              <View style={[styles.boxinBot]}>
              </View>
              <View style={[styles.boxinBotBor2]}>
              </View>
            </View>
          </View>
        </ScrollView>
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

export default MessageScreen;
