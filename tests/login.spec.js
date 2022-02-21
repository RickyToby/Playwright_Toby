
/*
const { test, expect } = require('@playwright/test');
// Go to the starting url before each test.
// await page.goto('https://www.testtoby.com/');

test.describe('pre-load', () => {
    test.beforeEach(async ({ page }) => {

    //specific account login function
    await page.goto('https://www.testtoby.com/');
    // Click button:has-text("Log in")
    await page.click('button:has-text("Log in")');
    // Click button:has-text("Email Login")
    await page.click('button:has-text("Email Login")');
    // Click input[type="loginId"]
    await page.click('input[type="loginId"]');
    // Fill input[type="loginId"]
    await page.fill('input[type="loginId"]', 'ricky@hellotoby.com');
    // Press Tab
    await page.press('input[type="loginId"]', 'Tab');
    // Fill input[type="password"]
    await page.fill('input[type="password"]', 'abc1234');
    // Click #login-button
    await page.click('#login-button');
    });
});
*/