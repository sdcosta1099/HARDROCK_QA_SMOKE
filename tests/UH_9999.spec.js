import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/Login.aspx');
  await page.locator('#txtUserame').click();
  await page.locator('#txtUserame').fill('TU_LAB_HALO_NIN_ADM');
  await page.locator('#txtPassword').click();
  await page.locator('#txtPassword').fill('Password01@$');
  await page.locator('#ddlDomain').selectOption('40190');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('cell', { name: 'PLAYER SEARCH' }).click();
});