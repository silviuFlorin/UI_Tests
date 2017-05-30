/**
 * Created by silviu.checherita on 5/29/2017.
 */

const BrowserMode = require('../data-providers/browserMode.json');

function BrowserUtils() {

    browser.ignoreSynchronization = true;

    this.openBrowser = function (mode, url) {
        switch (mode) {
            case BrowserMode.SELF:
                openBrowserInSelf(url);
                break;
            case BrowserMode.NEW_TAB:
                openBrowserInNewTab(url);
                break;
            case BrowserMode.PRIVATE_TAB:
                openBrowserInPrivateMode(url);
                break;
            default:
                openBrowserInSelf(url);
        }
    };

    function openBrowserInSelf(url) {
        browser.get(url);
    }

    function openBrowserInNewTab(url) {
        browser.executeScript("window.open('" + url + "','_blank');");
        browser.getAllWindowHandles().then(function (handles) {
            return browser.switchTo().window(handles[1]);
        })
            .then(function () {
                browser.get(url)
            });
    }

    function openBrowserInPrivateMode(url) {
        // TODO implement private browsing
    }

    this.checkBrowserOpenedAndLinkAccessed = function(mode, url){
        this.openBrowser(mode, url);
        expect(browser.getCurrentUrl()).toEqual(url);
    }
}

module.exports = BrowserUtils;