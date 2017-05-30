/**
 * Created by silviu.checherita on 5/25/2017.
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/audio-video-tests.js'],
    capabilities: {
        browserName: "firefox",
        firefox_binary: "C:/Program Files/Nightly/firefox.exe",
    },
};
