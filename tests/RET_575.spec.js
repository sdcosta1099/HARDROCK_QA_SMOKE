import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_575_Validate quickview', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.clickOnItemToSearchBox()
    await pa.enterItemKeyWordToSearch("MESSI ADULT FIT NAVY HOODIE")
    await pa.clickonsearchKEYWORD() 
    
    await pa.hoverOverSearchedProduct()
    
    await pa.clickonQuickViewIcon()
  
    await pa.navigateImagesofProductInQuickViewMode()
    await pa.selectProductSizeInQuickVIewMode()
    await pa.ValidateTextforavailability()
    await pa.ClickOnViewFullProductDetailsLink()

});


