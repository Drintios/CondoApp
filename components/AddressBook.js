import React, {Component} from 'react';
import {TextInput, AppRegistry, Text, Image, View, ScrollView, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {Actions} from "react-native-router-flux";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles/baseStyles";
import Footer from "./common/Footer";
import Header from "./common/Header";

class AddressBook extends Component {
  static navigationOptions = {
    title: 'AddressBook',
  };
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
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
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

export default AddressBook;
