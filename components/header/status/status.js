import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet, Dimensions } from 'react-native';

class Status extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.status}>
        <Text style={styles.font}> {this.props.status} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        flexWrap: 'wrap',
    },
    status: {
        height:40,
        width: 10,
        backgroundColor: 'transparent',
        flex:1,
        zIndex: 1,
    },

    font: {
      fontFamily: 'ARCADECLASSIC',
      fontSize: 25,
    }

  });
export default Status;
