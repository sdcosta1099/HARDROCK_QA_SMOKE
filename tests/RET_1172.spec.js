import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Guest User PayPal Buy Now | Bag | APO FPO Address |', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    
    await pa.enterItemToSearch('Hard Rock Plush Bear')
    await pa.ClickOnProductSearched()
    await pa.clickOnPDPAddToBag()
    await pa.clickOnMyBag()
    await pa.clickOnPayPal() 



  
});

