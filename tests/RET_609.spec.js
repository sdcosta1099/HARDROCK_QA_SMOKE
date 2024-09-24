import { test, expect } from '@playwright/test';
test.setTimeout(18000000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_609, Account creation link - header', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    
        await pa.goToUnityByHardrock()
        await pa.clickLoginOnUnityPage()
        await page.frameLocator('#login-iframe').getByRole('link', { name: 'Create your account' }).isVisible();
        await page.frameLocator('#login-iframe').getByRole('link', { name: 'Create your account' }).click();
        await page.getByRole('heading', { name: 'Create your new Unity by Hard Rock account' }).isVisible();
        await page.getByRole('heading', { name: 'Create your new Unity by Hard Rock account' }).click();
  
    });
  