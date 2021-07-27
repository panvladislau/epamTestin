const {browser} = require("protractor");

class BasePage{
    constructor() {}
    
    async go(url) {
        await browser.get(url);
    }

    async getUrl(){
        return await browser.getCurrentUrl();
    }

    async getTitle(){
        return await browser.getTitle();
    }
}

module.exports = BasePage;