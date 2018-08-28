
import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
var audioPath = AudioUtils.DocumentDirectoryPath;
var files = [
    require('./assets/StrangeKit/strangeKit02-Metalfart..wav'),
    require('./assets/StrangeKit/strangeKit03-MatalHammer..wav'),
    require('./assets/StrangeKit/strangeKit04-Insect..wav'),
    require('./assets/StrangeKit/strangeKit06-BowlMarble..wav'),
    require('./assets/StrangeKit/strangeKit06-Scarper!..wav'),
    require('./assets/StrangeKit/strangeKit02-Pzang..wav'),
    require('./assets/StrangeKit/strangeKit03-Ouch!..wav'),
    require('./assets/StrangeKit/strangeKit05-Bizarre..wav'),
    require('./assets/StrangeKit/strangeKit06-Hat..wav'),
    require('./assets/StrangeKit/strangeKit06-TeaCup..wav'),
    require('./assets/StrangeKit/strangeKit02-Scratchy..wav'),
    require('./assets/StrangeKit/strangeKit03-Plonk..wav'),
    require('./assets/StrangeKit/strangeKit05-Bizzare2..wav'),
    require('./assets/StrangeKit/strangeKit06-LegIt!..wav'),
    require('./assets/StrangeKit/strangeKit06-TinMarble..wav'),
    require('./assets/StrangeKit/strangeKit02-Snap..wav'),
    require('./assets/StrangeKit/strangeKit03-PopReverb..wav'),
    require('./assets/StrangeKit/strangeKit05-Buzz..wav'),
    require('./assets/StrangeKit/strangeKit06-Marp..wav'),
    require('./assets/StrangeKit/strangeKit06-Twanger..wav'),
    require('./assets/StrangeKit/strangeKit02-Snap2..wav'),
    require('./assets/StrangeKit/strangeKit03-QuickSaw..wav'),
    require('./assets/StrangeKit/strangeKit05-TTweat..wav'),
    require('./assets/StrangeKit/strangeKit06-MetalTwang..wav'),
    require('./assets/StrangeKit/strangeKit06-Warp..wav'),
    require('./assets/StrangeKit/strangeKit03-BreakMe..wav'),
    require('./assets/StrangeKit/strangeKit04-Cricket..wav'),
    require('./assets/StrangeKit/strangeKit05-TweedleDee..wav'),
    require('./assets/StrangeKit/strangeKit06-MetalTwang2..wav'),
    require('./assets/StrangeKit/strangeKit06-Woo..wav'),
    require('./assets/StrangeKit/strangeKit03-ChinaTube..wav'),
    require('./assets/StrangeKit/strangeKit04-Cricket2..wav'),
    require('./assets/StrangeKit/strangeKit05-Tweedledum..wav'),
    require('./assets/StrangeKit/strangeKit06-Ruler..wav'),
    require('./assets/StrangeKit/strangeKit06-warp2..wav')]
class SoundManager {
    constructor(){
        this.sound = {}        
        for(var i = 1; i <= 12; i++ ){
            this.sound[i] = new Sound(files[i - 1], null, (error) => {
                if (error) {
                    // do something
                    console.log('error')
                    console.log(error)
                }
            })
        }
        this.audioPath = AudioUtils.DocumentDirectoryPath
        this.isRecording = false
    }
    play = (key) => {
        this.sound[key].play()
        console.log('play')
    }

    stop = (key) => {
        this.sound[key].stop()
    }

    prepareRecordingPath(audioPath){
        AudioRecorder.prepareRecordingAtPath(audioPath, {
          SampleRate: 22050,
          Channels: 1,
          AudioQuality: "Low",
          AudioEncoding: "aac",
          AudioEncodingBitRate: 32000
        });
      }

    startRecording = (key) => {
        this.prepareRecordingPath(this.audioPath + '/' + key + '.aac')

        try {
            const filePath = await AudioRecorder.startRecording();
        } catch (error) {
            console.error(error);
        }
    }

    stopRecording = (key) => {
        if (!this.state.recording) {
            console.warn('Can\'t stop, not recording!');
            return;
        }
    
        this.setState({stoppedRecording: true, recording: false, paused: false});
    
        try {
            const filePath = await AudioRecorder.stopRecording()
            if (Platform.OS === 'android') {
                this.finishRecording(true, filePath);
            }
            return filePath;
        } catch (error) {
            console.error(error);
        }
    }

    finishRecording(didSucceed, filePath, fileSize) {
        this.isRecording = false
        console.log('finishRecording')
    }
}

export default SoundManager