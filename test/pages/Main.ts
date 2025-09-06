export default class Main {
    url: string;
    constructor() {
        this.url = 'https://www.saucedemo.com/';
    }

    async openUrl(url = this.url) {
        await browser.url(url);
        await browser.pause(3000);
    }
}