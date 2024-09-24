import { test, expect, chromium } from '@playwright/test';
test.setTimeout(180000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_608, Redeem Unity points operation on order submission', async () => {
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
        await page2.getByRole('combobox', { name: 'Enter Keyword or Item No.' }).fill('Hoodie')
        await page2.getByRole('combobox', { name: 'Enter Keyword or Item No.' }).press('Enter');
        await page2.locator('//a[contains(text(),"Messi Adult Fit Navy Hoodie")]').click();
        await page2.waitForTimeout(3000);
        await page2.locator('//button[@data-attr-value="L"]').click();
        await page2.waitForTimeout(2000);
        
    });
  