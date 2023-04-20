import { username, password } from './fixtures.js';
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {
  it('should open login page', async () => {
    await browser.reloadSession();

    await browser.url('/prihlaseni');
    console.log();

    const windowSize = await browser.getWindowSize();
    console.log(windowSize);
    console.log('Lili');

    await browser.pause(5000);
  });
});
