/**
 * Created by silviu.checherita on 5/25/2017.
 */

/**
 * Created by silviu.checherita on 5/24/2017.
 */

function MediaSample() {

    let expectedConditions = protractor.ExpectedConditions;

    this.video = element(by.tagName('video'));

    this.waitToLoad = () => {
        browser.wait(expectedConditions.presenceOf(this.video), 5000);
    };

    this.isLoaded = () => {
        return this.video.isPresent()
    };

    this.getCurrentTime = () => {
        return browser.executeScript('return arguments[0].currentTime', this.video);
    };

    this.setCurrentTime = (value) => {
        browser.executeScript('arguments[0].currentTime = arguments[1]', this.video, value);
    };

    this.pause = () => {
        browser.executeScript('arguments[0].pause()', this.video);
    };

    this.isPaused = () => {
        return browser.executeScript('return arguments[0].paused', this.video);
    };

    this.play = () => {
        browser.executeScript('arguments[0].play()', this.video);
    };

    this.getDuration = () => {
        return browser.executeScript('return arguments[0].duration', this.video);
    };

    this.isMuted = () => {
        return browser.executeScript('return arguments[0].muted', this.video);
    };

    this.setMuted = (value) => {
        browser.executeScript('arguments[0].muted = arguments[1]', this.video, value);
    };

    this.getVolume = () => {
        return browser.executeScript('return arguments[0].volume', this.video);
    };

    this.setVolume = (value) => {
        browser.executeScript('arguments[0].volume = arguments[1]', this.video, value);
    };

    this.setAutoPlay = (value) => {
        browser.executeScript('arguments[0].autoplay = arguments[1]', this.video, value);
    };

    this.getAutoPlay = () => {
        return browser.executeScript('return arguments[0].autoplay', this.video);
    };

    this.load = () => {
        return browser.executeScript('arguments[0].load()', this.video);
    };

    this.canPlayType = (mediaType) => {
        return browser.executeScript('return arguments[0].canPlayType(arguments[1])', this.video, mediaType);
    };

    this.setLoop = (value) => {
        browser.executeScript('arguments[0].loop = arguments[1]', this.video, value);
    };

    this.getLoop = () => {
        return browser.executeScript('return arguments[0].loop', this.video);
    };

    this.setControls = (value) => {
        browser.executeScript('arguments[0].controls = arguments[1]', this.video, value);
    };

    this.getControls = () => {
        return browser.executeScript('return arguments[0].controls', this.video);
    };
}

module.exports = MediaSample;
