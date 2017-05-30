/**
 * Created by silviu.checherita on 5/26/2017.
 */

const MediaSample = require('../mediaSample');

function MediaSampleUtils() {

    let mediaSample = new MediaSample();

    this.checkMediaSampleLoaded = () => {
        mediaSample.waitToLoad();
        expect(mediaSample.isLoaded()).toBeTruthy();
    };

    this.checkMediaNotPlayingIfAutoplayIsFalse = () => {
        mediaSample.setAutoPlay(false);
        mediaSample.load();
        expect(mediaSample.isPaused()).toBe(true);
    };

    this.checkMediaIsPlaying = () => {
        mediaSample.play();
        expect(mediaSample.isPaused()).toBe(false);
    };

    this.checkMediaIsPaused = () => {
        mediaSample.pause();
        expect(mediaSample.isPaused()).toBe(true);
    };

    this.checkMediaIsMuted = () => {
        mediaSample.setMuted(true);
        expect(mediaSample.isMuted()).toBe(true);
    };

    this.checkMediaIsUnmuted = () => {
        mediaSample.setMuted(false);
        expect(mediaSample.isMuted()).toBe(false);
    };

    this.checkMediaVolumeChanged = (volume) => {
        mediaSample.setVolume(volume);
        expect(mediaSample.getVolume()).toEqual(volume);
    };

    this.checkCanPlayMedia = (mediaType) => {
        mediaSample.canPlayType(mediaType).then((res) => {
            expect(['maybe', 'probably'].includes(res)).toBe(true);
        })
    };

    this.checkIfControlsAreHidden = () => {
        mediaSample.setControls(false);
        expect(!mediaSample.getControls());
    };

    this.checkIfControlsAreDisplayed = () => {
        mediaSample.setControls(true);
        expect(mediaSample.getControls());
    };


    /*    this.checkLoop =  () => {
     mediaSample.setLoop(true);
     mediaSample.pause();
     mediaSample.getDuration().then( (res) => {
     console.log(res);
     })
     mediaSample.getDuration().then( (duration) => {
     console.log('Duration: ', duration);
     expect(duration).not.toBeLessThan(0);

     mediaSample.setCurrentTime(duration).then( (time) => {
     mediaSample.play();
     expect(mediaSample.getCurrentTime()).toBeLessThan(time)
     })
     })
     }*/
}

module.exports = MediaSampleUtils;