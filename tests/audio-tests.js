/**
 * Created by silviu.checherita on 5/25/2017.
 */
const MediaSampleUtils = require('../utils/mediaSampleUtils');
const BrowserUtils = require('../utils/browserUtils');
const MediaData = require('../data-providers/mediaData');
const using = require('jasmine-data-provider');

describe('Audio content is being properly played back', function() {

    let browserUtils = new BrowserUtils();
    let mediaSampleUtils = new MediaSampleUtils();

    using(MediaData.mediaData, function (data) {

        it('Should launch Firefox and open the following ' + data.type + ' audio sample.', function () {

            browserUtils.checkBrowserOpenedAndLinkAccessed(data.browserMode, data.uri);
        });

        it('Should load the ' + data.type + ' Sample - ' + data.type, function () {
            mediaSampleUtils.checkMediaSampleLoaded();
        });

        it('Should not play when autoplay is set to false - ' + data.type, function () {

            mediaSampleUtils.checkMediaNotPlayingIfAutoplayIsFalse();
        });

        it('Should play when pressing the play button - ' + data.type, function () {

            mediaSampleUtils.checkMediaIsPlaying();
        });

        it('Should pause when pressing the pause button - ' + data.type, function () {

            mediaSampleUtils.checkMediaIsPaused();
        });

        it('Should mute when pressing the mute button - ' + data.type, function () {

            mediaSampleUtils.checkMediaIsMuted();
        });

        it('Should unmute when pressing the unmute button - ' + data.type, function () {

            mediaSampleUtils.checkMediaIsUnmuted();
        });

        it('Should change the volume level - ' + data.type, function () {

            mediaSampleUtils.checkMediaVolumeChanged(0.5);
        });

        it('Should hide controls - ' + data.type, function () {

            mediaSampleUtils.checkIfControlsAreHidden();
        });

        it('Should display controls - ' + data.type, function () {

            mediaSampleUtils.checkIfControlsAreDisplayed();
        });

        /*    it('Should loop the media type', function () {

         mediaSampleUtils.checkLoop();
         });

         it('Should play the media type', function () {

         mediaSampleUtils.checkCanPlayMedia('audio/mpeg');
         });*/
    })


}, 5000);