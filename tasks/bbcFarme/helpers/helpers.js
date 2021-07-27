const {browser} = require("protractor");

class Helpers {
    constructor() {}

    async reloadPage(){
        browser.refresh();
    }

    async changeFrame(index){
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[index]);
        });
    }

    async closeFrame(){
        browser.getAllWindowHandles().then(function (handles) {
            browser.close();
        });
    }

    async scrollTo(element) {
        return browser.executeScript('arguments[0].scrollIntoView({behavior: "smooth", block: "center"});', element.getWebElement());
    }

    async scrollToTop() {
        return browser.executeScript('window.scroll(0, 0)');
    }
}

module.exports = new Helpers();