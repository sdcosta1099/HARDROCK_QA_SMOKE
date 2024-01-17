import { test, expect } from '@playwright/test';

test.setTimeout(60000);

import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_1261_Validate size filter sequence on the PDP', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()


    await pa.enterItemToSearch('Hoodie')
    await pa.clickOnMessiAdultFitNavyHoodie()
    await pa.validatePDPSizesAreDisplayed()
    await pa.selectSizeLFromPDP()
    await pa.clickOnPDPAddToBag()
    await pa.clickOnCartLogo()
    await pa.validateItemIsAddedToCart()


    
    await pa.clickOnSearchBox()
    await pa.enterItemToSearch('Hoodies')
    await pa.validatePLPResultDisplayed()
    await pa.clickOnProductMessiAdultFitNavyHoodie()
    await pa.validateProductDetailPage()
    await pa.validateAllSizeFiltersOnPDPScreen
    await pa.clickOnSizePDPM()
    await pa.validateAvailabilityBelowQtyDisplayed()
    await pa.clickOnPDPAddToBag()
   

});
