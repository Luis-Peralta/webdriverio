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

  static async switchToLastTab() {
    const tabIds = await this.getWindowsTabs();
    await browser.switchToWindow(tabIds[tabIds.length - 1]);
  }

  static async switchToTabByUrlMatch(urlPart: string) {
    await browser.switchWindow(urlPart);
  }

  // *** DATA ***
  /**
   * This method is supposed to be used when we have more than one tab opened
   * @returns Array with the windows IDs (tabs)
   */
  static async getWindowsTabs() {
    await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1);
    return browser.getWindowHandles();
  }

  /**
   * @param selector Selector of the element
   * @returns Text of the element
   */
  static async getText({ selector } : { selector: string }) {
    const element = await this.getElement(selector);
    await this.waitForDisplayed(selector);
    return element.getText();
  }

  // *** WAITS ***
  static async waitForDisplayed(selector: string, timeout = 5000) {
    const element = await this.getElement(selector);
    await element.waitForDisplayed({ timeout });
  }

  static async isElementDisplayed({ selector } : { selector: string }) {
    return $(selector).isDisplayed();
  }

  static async waitUntilTextChanges({ selector, text } : { selector: string; text: string }, timeout = 5000) {
    const element = await this.getElement(selector);
    await browser.waitUntil(async () => (await element.getText()) !== text, { timeout });
  }

}