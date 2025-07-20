const { Given, When, Then } = require('@wdio/cucumber-framework');
require('dotenv').config();

Given('I am on the login page', async () => {
    await browser.url('https://the-internet.herokuapp.com/login');
});

When(/^I enter a valid "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    const usernameInput = await $('#username'); // replace with actual selector
    const passwordInput = await $('#password'); // replace with actual selector

    await usernameInput.setValue(username);
    await passwordInput.setValue(password);
});


// Then('I should see a flash message saying {string}', async (expectedMessage) => {
//   const actualMessage = await LoginPage.getFlashMessage();
//   expect(actualMessage).to.contain(expectedMessage);
// });

Then('I click on the login button', async () => {
  const loginButton = await $('#login button[type="submit"], button.radius[type="submit"], button[type="submit"]');
  await loginButton.click();
});