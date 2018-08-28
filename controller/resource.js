import SoundManager from './sound/sound'
import Host from './host/host';
class ResourceManager {

    constructor(){
        this.sound = new SoundManager()
        this.host = new Host()
        this.host.setListener(this.sound)
    }

    send(signal){
        this.host.sendSignal(signal)
    }

    play(key){
        this.sound.play(key)
    }

    stop(key){
        this.sound.stop(key)
    }

    recordStart(key) {

    }

    recordStop(key) {

    }
}

export default ResourceManager