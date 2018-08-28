import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableHighlight } from 'react-native';
import LED from './led/led'
class SoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ledOn: false
    };
  }
  onPressIn = () => {
    this.setState({ledOn: true})
    this.props.onPressIn(this.props.title)
    console.log('in')
  }

  onPressOut = () => {
    this.setState({ledOn: false})
    if (this.props.onPressOut !== undefined) {
      this.props.onPressOut(this.props.title)
      console.log('out')
    }
  }

  onPress = () => {
    this.props.onPress(this.props.title)
  }
  render() {
    return (
      <View style={styles.container} onTouchStart={this.onPressIn} onTouchEnd={this.onPressOut}>
        {/* <Button title="button"/> */}
        <LED isOn={this.state.ledOn}/>
        <TouchableHighlight style={styles.button}>
          <Image style={styles.button} source={require('./assets/button.png')}/>
        </TouchableHighlight>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#111111',
      height:80,
      width: 60,
      margin: 10,
      borderRadius: 80,
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      height:50,
      width:50,
      // alignContent: 'center',
    },
    title: {
      color: 'white'
    }
  });
export default SoundButton;


