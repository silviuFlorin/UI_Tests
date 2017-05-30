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
        'OGV': {type: 'OGV', browserMode: browserMode.NEW_TAB, uri: 'https://www.s-config.com/core/wp-content/uploads/2015/09/Ukidig.ogv'},
        'MP4': {type: 'MP4', browserMode: browserMode.NEW_TAB, uri: 'http://www.html5videoplayer.net/videos/toystory.mp4'},
        'VP8': {type: 'VP8', browserMode: browserMode.SELF, uri: 'https://upload.wikimedia.org/wikipedia/commons/6/61/2160p_Demo_-_3840x2160_pixel_4k_Video_-_a_timelapse_project_by_Florian_Friedrich.webm'},
        'VP9': {type: 'VP9', browserMode: browserMode.SELF, uri: 'https://hg.mozilla.org/mozilla-central/raw-file/d2dac18d0562/content/media/test/vp9cake.webm'}
    }
};