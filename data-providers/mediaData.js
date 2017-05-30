/**
 * Created by silviu.checherita on 5/30/2017.
 */

'use strict';

const browserMode = require('./browserMode.json');


module.exports = {
    mediaData: {
        'MP3': {type: 'MP3', browserMode: browserMode.SELF, uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},
        'OGG': {type: 'OGG', browserMode: browserMode.NEW_TAB, uri: 'https://upload.wikimedia.org/wikipedia/en/4/45/ACDC_-_Back_In_Black-sample.ogg'},
        'WebM': {type: 'WebM', browserMode: browserMode.NEW_TAB, uri: 'https://www.quirksmode.org/html5/videos/big_buck_bunny.webm'},
    }
};