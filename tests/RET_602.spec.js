import { test, expect, chromium } from '@playwright/test';
test.setTimeout(180000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_602, Display Unity points (header)', async () => {
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
        await page2.getByRole('button', { name: 'HOODIES' }).click();
        await page2.getByRole('button', { name: 'My Account' }).isVisible();
        await page2.getByRole('button', { name: 'WOMEN' }).click();
        await page2.getByRole('button', { name: 'My Account' }).isVisible();  
  
    });
  