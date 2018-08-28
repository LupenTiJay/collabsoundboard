import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SoundButton from './button/soundButton'
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    var buttonList = [
        <SoundButton title="join" key="join" onPressIn={this.props.join}/>,
        <SoundButton title="host" key="host" onPressIn={this.props.host}/>,
        <SoundButton title="sample" key="sample" onPressIn={this.props.sample}/>,
        <SoundButton title="reset" key="reset" onPressIn={this.props.reset}/>,
    ]

    for(var i = 1; i <= 12; i++){
        buttonList.push(<SoundButton title={i} key={i} onPressIn={this.props.play} onPressOut={this.props.stop}/>)
    }
    return (
      <View style={styles.container}>
        {buttonList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#111111',
        flex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Dimensions.get('window').width,
        alignContent: 'center',
        justifyContent: 'center'
    }
  });
export default Board;


