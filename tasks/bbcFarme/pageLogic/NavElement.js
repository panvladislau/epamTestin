const {browser, element, by} = require("protractor");
const BaseElements = require("../helpers/elements/BaseElements");
const BasePage = require("./BasePage");

class NavElement extends BasePage{
    constructor(){
        super();
        this.signInButton = element(by.css("#idcta-statusbar"));
    }
}

module.exports = new NavElement();