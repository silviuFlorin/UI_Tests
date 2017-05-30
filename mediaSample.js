/**
 * Created by silviu.checherita on 5/25/2017.
 */

/**
 * Created by silviu.checherita on 5/24/2017.
 */

function MediaSample() {

    let expectedConditions = protractor.ExpectedConditions;

    this.video = element(by.tagName('video'));

    this.waitToLoad = function(){
        browser.wait(expectedConditions.presenceOf(this.video), 5000);
    };

    this.isLoaded = function () {
        return this.video.isPresent()
    };

    this.getCurrentTime = function() {
        return browser.executeScript('return arguments[0].currentTime', this.video);
    };

    this.setCurrentTime = function(value) {
        browser.executeScript('arguments[0].currentTime = arguments[1]', this.video, value);
    };

    this.pause = function() {
        browser.executeScript('arguments[0].pause()', this.video);
    };

    this.isPaused = function() {
        return browser.executeScript('return arguments[0].paused', this.video);
    };

    this.play = function() {
        browser.executeScript('arguments[0].play()', this.video);
    };

    this.getDuration = function() {
        return browser.executeScript('return arguments[0].duration', this.video);
    };

    this.isMuted = function() {
        return browser.executeScript('return arguments[0].muted', this.video);
    };
    
    this.setMuted = function(value) {
        browser.executeScript('arguments[0].muted = arguments[1]', this.video, value);
    };

    this.getVolume = function() {
        return browser.executeScript('return arguments[0].volume', this.video);
    };

    this.setVolume = function(value) {
        browser.executeScript('arguments[0].volume = arguments[1]', this.video, value);
    };

    this.setAutoPlay = function(value) {
        browser.executeScript('arguments[0].autoplay = arguments[1]', this.video, value);
    };

    this.getAutoPlay = function() {
        return browser.executeScript('return arguments[0].autoplay', this.video);
    };

    this.load = function() {
        return browser.executeScript('arguments[0].load()', this.video);
    };

    this.canPlayType = function(mediaType) {
        return browser.executeScript('return arguments[0].canPlayType(arguments[1])', this.video, mediaType);
    };

    this.setLoop = function (value) {
        browser.executeScript('arguments[0].loop = arguments[1]', this.video, value);
    };

    this.getLoop = function () {
        return browser.executeScript('return arguments[0].loop', this.video);
    };

    this.setControls = function(value) {
        browser.executeScript('arguments[0].controls = arguments[1]', this.video, value);
    };

    this.getControls = function() {
        return browser.executeScript('return arguments[0].controls', this.video);
    };
}

module.exports = MediaSample;
