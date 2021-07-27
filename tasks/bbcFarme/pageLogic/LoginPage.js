const { element, by } = require("protractor");
const BasePage = require("./BasePage");

class Loginpage extends BasePage{
    constructor(){
        super();
        this.gmailField = element(by.css("#user-identifier-input"));
        this.passwordField = element(by.css(".field__input.field__input--password-toggle"));
        this.enterButton = element(by.css(".button.button--full-width"));
        this.passwordError = element(by.css(".form-message.form-message--error.form-message--password.field__error"));
        this.loginError = element(by.css(".form-message.form-message--error.form-message--username.field__error"));
    }
}

module.exports = new Loginpage();