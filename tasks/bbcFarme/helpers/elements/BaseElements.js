const waiters = require('../waiters.js');
const helpers = require('../helpers.js');
const {browser} = require("protractor");
const defaultTimeout = 15000;

class BaseElements {
    constructor() {}

    async click(element, timeout = defaultTimeout){
        await waiters.waitUntilIsVisible(element, timeout);
        await element.click();
    }

    async scrollTo(element, timeout = defaultTimeout) {
        await waiters.waitUntilInDom(element, timeout);
        await helpers.scrollTo(element);
    }

    async sendKeys(element, text, timeout = defaultTimeout) {
        await waiters.waitUntilIsVisible(element, timeout);
        await helpers.scrollTo(element);
        await element.clear();
        await element.sendKeys(text);
    }

    async pointMouseCursorTo(element) {
        await waiters.waitUntilIsVisible(element);
        await browser.actions().mouseMove(element).perform();
    }
}

module.exports = new BaseElements();