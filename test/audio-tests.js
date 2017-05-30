/**
 * Created by silviu.checherita on 5/25/2017.
 */
const MediaSampleUtils = require('../utils/mediaSampleUtils');
const BrowserMode = require('../data-providers/browserMode.json');
const BrowserUtils = require('../utils/browserUtils');

describe('MP3 audio content is being properly played back', function() {

    let browserUtils = new BrowserUtils();
    let mediaSampleUtils = new MediaSampleUtils();

    it('Should launch Firefox and open the following MP3 audio sample.', function () {

        browserUtils.checkBrowserOpenedAndLinkAccessed(BrowserMode.SELF, 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    });

    it('Should load the MP3 Sample', function () {
        mediaSampleUtils.checkMediaSampleLoaded();
    });

    it('Should not play when autoplay is set to false', function () {

        mediaSampleUtils.checkMediaNotPlayingIfAutoplayIsFalse();
    });

    it('Should play when pressing the play button', function () {

        mediaSampleUtils.checkMediaIsPlaying();
    });

    it('Should pause when pressing the pause button', function () {

        mediaSampleUtils.checkMediaIsPaused();
    });

    it('Should mute when pressing the mute button', function () {

        mediaSampleUtils.checkMediaIsMuted();
    });

    it('Should unmute when pressing the unmute button', function () {

        mediaSampleUtils.checkMediaIsUnmuted();
    });

    it('Should change the volume level', function () {

        mediaSampleUtils.checkMediaVolumeChanged(0.5);
    });

    it('Should hide controls', function () {

        mediaSampleUtils.checkIfControlsAreHidden();
    });

    it('Should display controls', function () {

        mediaSampleUtils.checkIfControlsAreDisplayed();
    });

/*    it('Should loop the media type', function () {

        mediaSampleUtils.checkLoop();
    });

    it('Should play the media type', function () {

        mediaSampleUtils.checkCanPlayMedia('audio/mpeg');
    });*/

}, 5000);