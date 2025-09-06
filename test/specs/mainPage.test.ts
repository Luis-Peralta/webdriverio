import Main from '../pages/main';
const main = new Main();

describe('Main Page', () => {
    it('should open the main page', async () => {
        await main.openUrl();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });
});