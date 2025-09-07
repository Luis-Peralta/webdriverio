import Main from '../pages/Main';
const main = new Main();

describe('Main Page', () => {
    it('should open the main page and login', async () => {
        await main.openUrl();
        await expect(browser).toHaveUrl(main.url);
        await main.login();
        expect(await main.isCartIconDisplayed()).toBeTruthy();
    });
});