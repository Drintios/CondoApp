import React, {Component} from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles/baseStyles";

const AddressIconf = (<Icon name="address-card-o" size={26} color={colors.gainsboro}/>);
const BackButton = (<Icon name="arrow-left" backgroundColor={colors.azul} size={26} color={colors.white}/>);
const HomeIconf = (<Icon name="home" size={26} color={colors.white}/>);
const MessageIconf = (<Icon name="envelope-o" size={26} color={colors.gainsboro}/>);
const PlusIconf = (<Icon name="plus" size={26} color={colors.gainsboro}/>);


class AddressBook extends Component {
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
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
                  <Text>Pedro Camacho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxRight]} onPress={() => navigate('Abelardo')}>
                  <Image source={require('./../images/tap.png')}/>
                  <Text>Abelardo Canaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactBoxLeft]} onPress={() => navigate('Pedro')}>
                  <Image source={require('./../images/power-cord.png')}/>
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

export default AddressBook;
