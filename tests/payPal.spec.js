import { test, expect } from '@playwright/test';

test('test', async () => {
const context =await  browser.newContext();
const page = await context.newPage();
  await page.goto('https://storefront:Rock$h0p@staging-na01-hardrock.demandware.net/');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('combobox', { name: 'Enter Keyword or Item No.' }).click();
  await page.getByRole('combobox', { name: 'Enter Keyword or Item No.' }).fill('Hard Rock Plush Bear');
  await page.getByRole('button', { name: 'Submit search keywords' }).click();
  await page.getByText('Hard Rock Plush Bear with Back Pack Clip').click();
  await page.getByText('Quantity 1 2 3 4 5 6 7 8 9 10 Availability: In Stock Add to Bag Buy Now Pay with').click();
  const pagePromise=context.waitForEvent('page');
  await page.frameLocator('(//iframe[@title="PayPal"])[1]').getByLabel('Pay with PayPal').click();
  const newPage = await pagePromise;
  await newPage.getByPlaceholder('Email or mobile number').click();
  await newPage.getByPlaceholder('Email or mobile number').fill('test@yopmail.com');
  await newPage.getByRole('button', { name: 'Next' }).click();
  await newPage.getByPlaceholder('Password').fill('testing@1234');
  await newPage.getByRole('button', { name: 'Log In' }).click();
});