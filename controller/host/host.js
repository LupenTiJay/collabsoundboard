// import { NetworkInfo } from 'react-native-network-info';
var dgram = require('react-native-udp')
import { NetworkInfo } from 'react-native-network-info';

class Host {
    constructor(){
        this.rx = dgram.createSocket('udp4');
        this.rx.bind(12345, function(err) {
          if (err) throw err;
        })
    }
    toByteArray(obj) {
        var uint = new Uint8Array(obj.length);
        for (var i = 0, l = obj.length; i < l; i++){
          uint[i] = obj.charCodeAt(i);
        }
      
        return new Uint8Array(uint);
      }
    getSocket = () => {
        return this.rx.on('message', function(msg, rinfo) {
            console.log('message was received', msg)
        })
    }
    sendSignal = (signal) => {
        var sig = this.toByteArray(signal)
        this.rx.send(sig, 0, sig.length, 12345, "192.168.1.149",)
    }
    setListener = (sound) => {
        this.rx.on('message', (msg, rinfo) => {
            var msg = new TextDecoder("utf-8").decode(msg);
            console.log('hit')
            console.log(msg)
            if(msg[0] === "1") {
                console.log("play")
                sound.play(msg.slice(1))
            }
            else {
                sound.stop(msg.slice(1))
            }
        })
    };
}

export default Host