/**
 * Created by silviu.checherita on 5/26/2017.
 */

const MediaSample = require('../mediaSample');

function MediaSampleUtils() {

    let mediaSample = new MediaSample();

    this.checkMediaSampleLoaded = function(){
        mediaSample.waitToLoad();
        expect(mediaSample.isLoaded()).toBeTruthy();
    };

    this.checkMediaNotPlayingIfAutoplayIsFalse = function(){
        mediaSample.setAutoPlay(false);
        mediaSample.load();
        expect(mediaSample.isPaused()).toBe(true);
    };

    this.checkMediaIsPlaying = function(){
        mediaSample.play();
        expect(mediaSample.isPaused()).toBe(false);
    };

    this.checkMediaIsPaused = function(){
        mediaSample.pause();
        expect(mediaSample.isPaused()).toBe(true);
    };

    this.checkMediaIsMuted = function(){
        mediaSample.setMuted(true);
        expect(mediaSample.isMuted()).toBe(true);
    };

    this.checkMediaIsUnmuted = function(){
        mediaSample.setMuted(false);
        expect(mediaSample.isMuted()).toBe(false);
    };

    this.checkMediaVolumeChanged = function(volume){
        mediaSample.setVolume(volume);
        expect(mediaSample.getVolume()).toEqual(volume);
    };

    this.checkCanPlayMedia = function (mediaType) {
        mediaSample.canPlayType(mediaType).then(function (res) {
            expect(['maybe', 'probably'].includes(res)).toBe(true);
        })
    };

    this.checkIfControlsAreHidden = function(){
        mediaSample.setControls(false);
           expect(!mediaSample.getControls());
    };

    this.checkIfControlsAreDisplayed = function(){
        mediaSample.setControls(true);
        expect(mediaSample.getControls());
    };


/*    this.checkLoop = function () {
        mediaSample.setLoop(true);
        mediaSample.pause();
        mediaSample.getDuration().then(function (res) {
            console.log(res);
        })
        mediaSample.getDuration().then(function (duration) {
            console.log('Duration: ', duration);
            expect(duration).not.toBeLessThan(0);

            mediaSample.setCurrentTime(duration).then(function (time) {
                mediaSample.play();
                expect(mediaSample.getCurrentTime()).toBeLessThan(time)
            })
        })
    }*/
}

module.exports = MediaSampleUtils;