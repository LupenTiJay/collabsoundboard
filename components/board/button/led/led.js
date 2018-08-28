import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableHighlight } from 'react-native';

class LED extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOn: false
    };
  }

  render() {
    return (
      <View style={styles.container} backgroundColor={(this.props.isOn? "red": "maroon")}>
      </View>
    );
  }
}

var toggle = () => {
    this.setState({isOn: !this.state.isOn})
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'maroon',
      height:12,
      width: 12,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: 'grey',
      alignItems: 'center',
    },

    button: {
      height:50,
      width:50,
      // alignContent: 'center',
    },
    led: {
    //   backgroundColor: (this.props.isOn? 'red':'maroon')
    }
  });
export default LED;


