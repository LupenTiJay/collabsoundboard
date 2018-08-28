import { NetworkInfo } from 'react-native-network-info';
var dgram = require('react-native-udp')
class Host {
    constructor(){
        this.tx = dgram.createSocket('udp4');
        this.rx.bind(12345, function(err) {
          if (err) throw err;
        })
    }

    getNetworkInfo = async () => {
        NetworkInfo.getIPAddress(ip => {
            console.log('ip')
            console.log(ip);
            console.log(rinfo)
        });
    }

    getSocket = () => {
        return this.rx.on('message', function(msg, rinfo) {
            console.log('message was received', msg)
        })
    }

    setListener = (sound) => {
        this.rx.on('message', (msg, rinfo) => {
            var msg = new TextDecoder("utf-8").decode(msg);

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