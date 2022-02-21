// Demo Testing 1 > Home Services
const { test, expect } = require('@playwright/test');

//Pre-Setup
test.describe('pre-load', () => {
  test.beforeEach(async ({ page }) => {

/*
    test('test', async ({ page }) => {
    // page is signed in.
  });

    test('my test', async ({ page }) => {
    // Assertions use the expect API.
     await expect(page).toHaveURL('https://www.testtoby.com/');
   });
   */
  });


  test('demo test', async ({ page }) => {
    await page.goto('https://testtoby.com/');
    // Click text=Home Services
    await page.locator('button:has-text("Service Category")').click();
    // assert.equal(page.url(), 'https://www.hellotoby.com/en/v/home-services?source=nav_bar');
    // Click img[alt="Part\ Time\ Helper"]
    await page.click('img[alt="Part\\ Time\\ Helper"]');
    // assert.equal(page.url(), 'https://www.hellotoby.com/en/ds/part-time-helper');
    // Click button:has-text("Book Now")
    await page.locator('xpath=//*[@id="Feature Packages"]/div[1]/div/div[2]/button/span[1]/span').click();
    // Click [aria-label="radio-button"]
    await page.check('[aria-label="radio-button"]', '1');
    // Click #question-form-submit
    await page.click('#question-form-submit');
    // Click [aria-label="select"]
    await page.click('[aria-label="select"]');
    // Click li[role="option"] div:has-text("tobytestcase2+852 60912231 tobytestcase2@test.com")
    await page.click('li[role="option"] div:has-text("tobytestcase2+852 60912231 tobytestcase2@test.com")');
    // Click button:has-text("Next")
    await page.locator('button:has-text("Next")').click();
    // Fill [aria-label="radio-button"]
    await page.check('[aria-label="radio-button"]', '1');
     // Click button:has-text("Next")
    await page.locator('button:has-text("Next")').click();
    // Check [aria-label="checkbox"]
    await page.check('[aria-label="checkbox"]');
    // Click button:has-text("Next")
    await page.locator('button:has-text("Next")').click();

    // Click text=DatePlease pick a date >> svg (lack of aria-label / id)
    await page.locator('xpath=//*[@id="undefineddate"]/div[1]').click();
    // Click [aria-label="Saturday\,\ February\ 26\,\ 2022"]
    await page.click('[aria-label="Saturday\\,\\ February\\ 26\\,\\ 2022"]');
    // Click [aria-label="select"]
    await page.click('[aria-label="select"]');
    // Click text=08:00 - 11:00
    await page.click('text=08:00 - 11:00');

    // Click text=Package DiscountOnce a week >> [aria-label="radio-button"]
    await page.click('text=Package DiscountOnce a week >> [aria-label="radio-button"]');
    // ---------------------
    
    await browser.close();
  });
});