import { test, expect } from '@playwright/test';
<<<<<<< HEAD
test.setTimeout(60000);
=======
test.setTimeout(120000);
>>>>>>> 22744f9a47181f9ea5286447d0f8d61716ef0e7a
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_1261_Validate size filter sequence on the PDP', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()
<<<<<<< HEAD

  await pa.enterItemToSearch('Hoodie')
  await pa.clickOnMessiAdultFitNavyHoodie()
  await pa.validatePDPSizesAreDisplayed()
  await pa.selectSizeLFromPDP()
  await pa.clickOnPDPAddToBag()
  await pa.clickOnCartLogo()
  await pa.validateItemIsAddedToCart()

=======
    
    await pa.clickOnSearchBox()
    await pa.enterItemToSearch('Hoodies')
    await pa.validatePLPResultDisplayed()
    await pa.clickOnProductMessiAdultFitNavyHoodie()
    await pa.validateProductDetailPage()
    await pa.validateAllSizeFiltersOnPDPScreen
    await pa.clickOnSizePDPM()
    await pa.validateAvailabilityBelowQtyDisplayed()
    await pa.clickOnPDPAddToBag()
   
>>>>>>> 22744f9a47181f9ea5286447d0f8d61716ef0e7a
});
