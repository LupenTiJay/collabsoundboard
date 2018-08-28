import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Status from './status/status'
import Input from './input/input'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.lcd} source={require('./assets//lcd.jpg')}/> */}
        <Status status={this.props.status}/>
        <Input input={this.props.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FAB49',
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: Dimensions.get('window').width + 10,
        borderWidth: 10,
        borderColor: '#303030',
    },
    lcd: {
        flex:1,
        height: undefined,
        width: undefined,
        zIndex: 0,
    },
    input: {
      height: 50,
      width: 50,
      backgroundColor: 'red'  
    },
    status: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
  });
export default Header;


