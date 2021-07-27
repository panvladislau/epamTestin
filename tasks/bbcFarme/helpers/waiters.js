const {browser, ExpectedConditions} = require("protractor");
const defaultTimeout = 15000;

class Waiters{
    async waitUntilInDom(element, timeOut = defaultTimeout) {
        await browser.wait(protractor.ExpectedConditions.presenceOf(element), timeOut).catch(error => {
            return new Error(`timeout: waiting for presence Of: ${element.locator()}`);
        });
    }

    async waitUntilIsClickable(element, timeout = defaultTimeout) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), timeout);
    }

    async waitUntilIsVisible(element, timeout = defaultTimeout) {
        await browser.wait(ExpectedConditions.visibilityOf(element), timeout);
    }
}

module.exports = new Waiters();