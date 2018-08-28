import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from './header/header'
import Board from './board/board'
import { NetworkInfo } from 'react-native-network-info';
class MainBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isJoined: false,
        isJoining: false,
        isHosting: false,
        isSampling: false,
        status: 'idle',
        input: '123',
        uri: 'localhost:3000'
    };
  }

  join = () => {
    console.log('join main')
    this.setState({isJoined: true, isHosting: false})
  }

  host = async() => {
    console.log('host')
    this.setState({isJoined: false, isHosting: true})
    this.setState({status: this.props.resource.ip})
    NetworkInfo.getIPAddress(ip => {
      this.setState({status: ip})
      return ip
    });
  }

  sample = () => {
    console.log('sample main')
    this.setState({status: 'press and hold to sample', isSampling: true,})


  }

  reset = () => {
    console.log('reset')
  }
  play = (key) => {
    this.setState({input: key})
    if(this.state.isJoined){
      console.log('remote play')
      this.props.resource.send("1" + key)

    } else {
      this.props.resource.play(key)  
    }
  }

  stop = (key) => {
    this.props.resource.stop(key)
    this.setState({input: ''})
    if(this.state.isJoined){
      console.log('remote play')
      this.props.resource.send("0" + key)

    } else {
      this.props.resource.stop(key)

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header status={this.state.status} input={this.state.input} ip={this.state.ip}/>
        <Board 
          join={this.join} 
          host={this.host} 
          sample={this.sample} 
          reset={this.reset} 
          play={this.play} 
          stop={this.stop}
          isSampling={this.state.isSampling}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#111111',
        alignItems: 'center',
        flex:1
    }
  });
export default MainBoard;


