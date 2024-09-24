import { test, expect, chromium } from '@playwright/test';
test.setTimeout(18000000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_603, Display Unity points, tier, and tier credits (my account)', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    const pa = new playerAction(page)
    const common = new commonSteps(page)
    
        await pa.goToUnityByHardrock()
        await pa.clickLoginOnUnityPage()
        await pa.enterLoginIdAndPassword()
        await pa.clickSubmitLogin();

        const page1Promise = context.waitForEvent('page')
        await page.locator('#navbarToggle').getByLabel('Tap to go to HardRock.com').click();
        const page1 = await page1Promise;
        await page1.waitForTimeout(3000);
        const page2Promise = context.waitForEvent('page')
        await page1.getByRole('link', { name: 'Rock Shop' }).click();
        const page2 = await page2Promise;
        await page2.waitForTimeout(3000);
        await page2.getByLabel('Unlock Special Offers!').getByLabel('Close').click();
        await page2.getByRole('button', { name: 'Login to your account' }).click();
        await page2.getByRole('button', { name: 'My Account' }).isVisible();
        await page2.locator('(//a[@id="myaccount"])[1]').click();
        await page2.locator('(//a[contains(text(),"My Account")])[1]').click();
        await page2.locator('(//div[@class="col-6"])[2]//div[contains(text(),"100")]').isVisible();
        await page2.locator('(//div[@class="col-6"])[2]//h5[contains(text(),"Unity Points")]').isVisible();
        await page2.locator('(//div[@class="col-6 pt-4a"])[2]//h5[contains(text(),"Unity tier")]').isVisible();
        await page2.locator('(//div[@class="col-6 pt-4a"])[2]//div[contains(text(),"Star")]').isVisible();
        await page2.locator('(//div[@class="col-6"])[3]//div[contains(text(),"0")]').isVisible();
        await page2.locator('(//div[@class="col-6"])[3]//h5[contains(text(),"Tier Credits")]').isVisible();
        await page2.locator('//a[contains(text(),"VIEW AT UNITY")]').isVisible();
        await page2.locator('//a[contains(text(),"VIEW AT UNITY")]').click();
        await page2.waitForTimeout(3000);
  
    });
  