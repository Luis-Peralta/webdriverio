import Wdio from '../utils/Wdio';

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
        this.url = process.env.BASE_URL ?? '';
    }

    async openUrl(url = this.url) {
        await Wdio.goTo(url);
    }

    async login({ username = process.env.USERNAME || '', password = process.env.PASSWORD || '' } : { username?: string, password?: string } = {}) {
        await Wdio.waitAndType({ selector: login.usernameInput, text: username });
        await Wdio.waitAndType({ selector: login.passwordInput, text: password });
        await Wdio.waitAndClick({ selector: login.loginButton });
    }

    async isCartIconDisplayed() {
        return Wdio.isElementDisplayed({ selector: home.cartIcon });
    }
}