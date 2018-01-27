import React from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import styles from "./styles/baseStyles";
import Header from "./common/Header";
import Footer from "./common/Footer";

class ContactScreen extends React.Component {
  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
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
                <View>
                  <Icon name="phone" size={26} color={colors.freeSpeechGreen}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.boxWrite]} onPress={() => Communications.email(['canaanabelardo@gmail.com'],null,null,'My Subject','My body text')}>

                <View>
                  <Icon name="pencil-square-o" size={26} color={colors.havelockBlue}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ContactScreen;
