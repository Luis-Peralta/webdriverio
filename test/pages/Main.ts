const login = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]'
}

const home = {
    cartIcon:'#shopping_cart_container'
}

export default class Main {
    url: string;

    constructor() {
        this.url = 'https://www.saucedemo.com/';
    }

    async openUrl(url = this.url) {
        await browser.url(url);
    }

    async doLogin({ username = process.env.USERNAME || '', password = process.env.PASSWORD || '' } : { username?: string, password?: string } = {}) {
        console.log(`Logging in with user: ${username} and password: ${password}`);
        await $(login.usernameInput).setValue(username);
        await $(login.passwordInput).setValue(password);
        await $(login.loginButton).click();
        await browser.pause(3000);
    }

    async isCartIconDisplayed() {
        return await $(home.cartIcon).isDisplayed();
    }
}