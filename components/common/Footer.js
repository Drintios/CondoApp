import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Navigate} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./../styles/baseStyles";

class Footer extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.footerIn]}>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
          <View style={[styles.boxFooterIcons]}>
            <Icon name="envelope-o" size={26} color={colors.gainsboro}/>
          </View>
          <Text style={[styles.minitextFooter]}>Mensajes</Text>
        </View>
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Address')}>
          <View style={[styles.boxFooterIcons]}>
            <Icon name="address-card-o" size={26} color={colors.gainsboro}/>
          </View>
          <Text style={[styles.minitextFooter]}>Directorio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boxf,styles.boxc0, styles.boxFooter]} onPress={() => navigate('Profile')}>
          <View style={[styles.boxFooterHomeIcons]}>
            <Icon name="home" size={26} color={colors.white}/>
          </View>
          <Text style={[styles.minitextFooter]}>Home</Text>
        </TouchableOpacity>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
          <View style={[styles.boxFooterIcons]}>
            <Icon name="plus" size={26} color={colors.gainsboro}/>
          </View>
          <Text style={[styles.minitextFooter]}>Pronto</Text>
        </View>
        <View style={[styles.boxf,styles.boxc0, styles.boxFooter]}>
          <View style={[styles.boxFooterIcons]}>
            <Icon name="plus" size={26} color={colors.gainsboro}/>
          </View>
          <Text style={[styles.minitextFooter]}>Pronto</Text>
        </View>
      </View>
    )
  }
}

export default Footer;