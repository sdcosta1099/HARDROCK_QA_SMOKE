import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Unity User PayPal Buy Now from Mini Bag | Desktop Only |', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.clickOnSignInButton()
    // await pa.enterEmailAddress('500236845') 
    // await pa.enterPassWord('Password01@') 
    // await pa.clickOnLogin()
    
    
    
    

    
});
