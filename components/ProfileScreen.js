import React from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import styles from "./styles/baseStyles";
import Footer from "./common/Footer";
import Header from "./common/Header";

class ProfileScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (

      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <View style={[styles.content]}>
            <View style={[styles.box3]}>
              <View style={[styles.boxinLef]}>
               <Icon name="user-circle-o" size={110} color={colors.gainsboro}/>
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
                <View style={[styles.boxMessage]}>
                  <Icon name="envelope-o" size={26} color={colors.gainsboro}/>
                </View>
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
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ProfileScreen;
