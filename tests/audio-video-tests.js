/**
 * Created by silviu.checherita on 5/25/2017.
 */
const MediaSampleUtils = require('../utils/mediaSampleUtils');
const BrowserUtils = require('../utils/browserUtils');
const MediaData = require('../data-providers/mediaData');
const using = require('jasmine-data-provider');

let browserUtils = new BrowserUtils();

beforeAll(() => {
    browser.manage().window().maximize();
});

beforeEach(() => {
    browser.ignoreSynchronization = true;
});

afterEach(() => {
    browser.ignoreSynchronization = false;
    browserUtils.closeOpenedTab();
});

using(MediaData.mediaData, (data) => {
    let mediaSampleUtils = new MediaSampleUtils();

    describe(data.type + ' content is being properly played back', () => {

        it('Should launch Firefox and open the following ' + data.type + ' audio sample.', () => {

            browserUtils.checkBrowserOpenedAndLinkAccessed(data.browserMode, data.uri);
        });

        it('Should load the ' + data.type + ' Sample - ' + data.type, () => {
            mediaSampleUtils.checkMediaSampleLoaded();
        });

        it('Should not play when autoplay is set to false - ' + data.type, () => {

            mediaSampleUtils.checkMediaNotPlayingIfAutoplayIsFalse();
        });

        it('Should play when pressing the play button - ' + data.type, () => {

            mediaSampleUtils.checkMediaIsPlaying();
        });

        it('Should pause when pressing the pause button - ' + data.type, () => {

            mediaSampleUtils.checkMediaIsPaused();
        });

        it('Should mute when pressing the mute button - ' + data.type, () => {

            mediaSampleUtils.checkMediaIsMuted();
        });

        it('Should unmute when pressing the unmute button - ' + data.type, () => {

            mediaSampleUtils.checkMediaIsUnmuted();
        });

        it('Should change the volume level - ' + data.type, () => {

            mediaSampleUtils.checkMediaVolumeChanged(0.5);
        });

        it('Should hide controls - ' + data.type, () => {

            mediaSampleUtils.checkIfControlsAreHidden();
        });

        it('Should display controls - ' + data.type, () => {

            mediaSampleUtils.checkIfControlsAreDisplayed();
        });

        /*    it('Should loop the media type', () => {

         mediaSampleUtils.checkLoop();
         });

         it('Should play the media type', () => {

         mediaSampleUtils.checkCanPlayMedia('audio/mpeg');
         });*/
    })

}, 5000);