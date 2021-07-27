const {browser, element, by} = require("protractor");
const BaseElements = require("../helpers/elements/BaseElements");
const BasePage = require("./BasePage");

class MainPage extends BasePage{
    constructor(){
        super();
        this.newsFrames = element.all(by.css(".block-link__overlay-link"));
    }
}

module.exports = new MainPage();