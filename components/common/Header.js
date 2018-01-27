import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./../styles/baseStyles";

class Header extends React.Component {
  render () {
    console.log(this.props.navigation.state.routeName);
    const { goBack } = this.props.navigation;
    return (
      <View style={[styles.headerIn]}>
        <TouchableOpacity style={[styles.logoutm]} onPress={() => goBack()}>
          <Icon name="arrow-left" backgroundColor={colors.azul} size={26} color={colors.white}/>
        </TouchableOpacity>
        {this.props.navigation.state.routeName === 'Message' &&
          <TouchableOpacity style={[styles.trash]} onPress={() => navigate('Message')}>
            <Icon name="trash" size={26} color={colors.white}/>
          </TouchableOpacity>
        }
        {this.props.navigation.state.routeName === 'Message' &&
          <TouchableOpacity style={[styles.reminder]} onPress={() => navigate('Message')}>
            <Icon name="clock-o" size={26} color={colors.white}/>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

export default Header;
