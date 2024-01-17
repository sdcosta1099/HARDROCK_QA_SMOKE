import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_609, Display Unity Points Header', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    //await common.goToHALOShop();
    //await common.closeHolidayDealsPopup()


        await pa.goToUnityByHardrock()
        await pa.clickLoginOnUnityPage()
        await pa.enterLoginIdAndPassword()
        await pa.clickSubmitLogin();
        await pa.clickonHardRockLinkOnUnityPage()
        await pa.clickOnRockShop()

        // await page.getByRole('link', { name: 'Log in | Join' }).click();
        // await page.frameLocator('#login-iframe').locator('#usernameUserInput').click();
        // await page.frameLocator('#login-iframe').locator('#usernameUserInput').fill('500236845');
        // await page.frameLocator('#login-iframe').locator('#usernameUserInput').press('Tab');
        // await page.frameLocator('#login-iframe').locator('#password').fill('Password01@');
        // await page.frameLocator('#login-iframe').getByRole('button', { name: 'Login' }).click();
        // await page.goto('https://www.unitybyhardrock.com/dashboard');
        // const page1Promise = page.waitForEvent('popup');
        // await page.locator('#navbarToggle').getByLabel('Tap to go to HardRock.com').click();
        // const page1 = await page1Promise;
        // const page2Promise = page1.waitForEvent('popup');
        // await page1.getByRole('link', { name: 'Rock Shop' }).click();
        // const page2 = await page2Promise;
        // await page2.getByLabel('Unlock Special Offers!').getByLabel('Close').click();
        // await page2.getByRole('button', { name: 'Login to your account' }).click();
        // await page2.getByRole('button', { name: 'My Account' }).click();
        // await page2.getByRole('button', { name: 'PINS' }).click();
        // await page2.getByRole('button', { name: 'PINS' }).click();
        // await page2.getByRole('img', { name: 'Pins image' }).click();
        // await page2.getByRole('link', { name: 'Limited Edition Christmas Tree Shaped Guitar Pin' }).first().click();
        // await page2.locator('#city-1').selectOption('https://shop.hardrock.com/on/demandware.store/Sites-hardrock-Site/en_US/Product-Variation?dwvar_0886676849545_city=Amsterdam&pid=0886676849545&quantity=1');
        // await page2.getByRole('button', { name: 'Add to Bag' }).click();
        // await page2.getByRole('button', { name: 'My Account' }).click();
        // await page2.getByRole('link', { name: 'Cart 1 Items' }).click();
        // await page2.locator('div:nth-child(4) > .col-8').click();
        // await page2.goto('https://shop.hardrock.com/checkout');
        // await page2.goto('https://shop.hardrock.com/checkout?stage=shipping#shipping');
  
    });
  