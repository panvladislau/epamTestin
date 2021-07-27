const BaseElements = require("../helpers/elements/BaseElements");
const waiters = require("../helpers/waiters");
const LoginPage = require("../pageLogic/LoginPage");
const MainPage = require("../pageLogic/MainPage");
const NavElement = require("../pageLogic/NavElement");

describe('MainPage test', () => {

    beforeEach( async () => {
        await browser.waitForAngularEnabled(false);
        //browser.ignoreSynchronization = true;
        MainPage.go("https://www.bbc.com/");
    })

    it('Url should change on "https://account.bbc.com/" after click on user icon', async () => {
        await BaseElements.click(NavElement.signInButton);
        await BaseElements.scrollTo(LoginPage.enterButton);
        await waiters.waitUntilIsVisible(LoginPage.enterButton);
        expect(MainPage.getUrl()).toContain("https://account.bbc.com/");
    })

    it('Should write "Чего-то не хватает. Пожалуйста, проверьте и попробуйте ещё раз."', async () => {
        await BaseElements.click(NavElement.signInButton);
        await BaseElements.click(LoginPage.enterButton);
        expect(await LoginPage.loginError.getText()).toEqual("Чего-то не хватает. Пожалуйста, проверьте и попробуйте ещё раз.");
    })

    it('Should write "Извините, этот пароль слишком короткий. В нём должно быть не менее 8 символов."', async () => {
        await BaseElements.click(NavElement.signInButton);
        await BaseElements.sendKeys(LoginPage.passwordField, "1234");
        await BaseElements.click(LoginPage.enterButton);
        expect(await LoginPage.passwordError.getText()).toEqual("Извините, этот пароль слишком короткий. В нём должно быть не менее 8 символов.");
    })

    it('varify that news frame leads to another page and url should change"', async () => {
        await BaseElements.scrollTo(MainPage.newsFrames.get(6));
        await BaseElements.click(MainPage.newsFrames.get(6));
        expect(MainPage.getUrl()).not.toContain("https://account.bbc.com/");
    })
})