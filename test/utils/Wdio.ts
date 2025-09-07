export default class Wdio { 
    //  *** ELEMENT ***
    private static async getElement(selector: string) {
        return $(selector);
    }

    //  *** ACTIONS ***
    static async goTo(url: string) {
        await browser.url(url);
    }

    static async waitAndType({ selector, text } : { selector: string; text: string }) {
        const element = await this.getElement(selector);
        await this.waitForDisplayed(selector);
        await element.setValue(text);
    }

    static async waitAndClick({ selector } : { selector: string }) {
        const element = await this.getElement(selector);
        await this.waitForDisplayed(selector);
        await element.click();
    }

    // *** WAITS ***
    static async waitForDisplayed(selector: string, timeout = 5000) {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({ timeout });
    }

    static async isElementDisplayed({ selector } : { selector: string }) {
        return $(selector).isDisplayed();
    }

}