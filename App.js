/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Sound from 'react-native-sound';
// import { NetworkInfo } from 'react-native-network-info';
var dgram = require('react-native-udp')
// import MainBoard from './components'
import MainBoard from './components/main';
import ResourceManager from './controller/resource'
var resource = new ResourceManager()
// var socket = dgram.createSocket('udp4')
// socket.bind(12345)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var sound, sound2
type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    sound = new Sound('https://www.englishdom.com/staticus/vigilance.mp3', null, (error) => {
      if (error) {
        // do something
        console.log('error')
        console.log(error)
      }
      // play when loaded
      sound.play();
    });

    // NetworkInfo.getIPAddress(ip => {
    //   console.log('ip')
    //   console.log(ip);
    // });


    // let a = dgram.createSocket('udp4');
    // let aPort = 12345;
    // a.bind(aPort, function(err) {
    //   if (err) throw err;
    // })

    // a.on('message', function(msg, rinfo) {
    //   console.log('message was received', msg)
    // })

    console.log('port joined')
  }

  render() {
    return (
      <MainBoard resource={resource}/>
    );
  }
}

var onPress = () => {
  console.log('press main')

  // sound.play()
// var sound2 = new Sound('https://www.englishdom.com/staticus/vilify.mp3', null, (error) => {
//   if (error) {
//     // do something
//     console.log('error')
//     console.log(error)
//   }
  
  
//   // play when loaded
//   sound2.play();
// });
}
