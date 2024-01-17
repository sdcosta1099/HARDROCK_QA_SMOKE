import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_497_Validate multiple images navigation', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

  await pa.enterItemToSearch('Hoodie')
  await pa.clickOnMessiAdultFitNavyHoodie()
  await pa.validatePDPSizesAreDisplayed()
  await pa.validate1stImageIsDisplayed()
  await pa.clickonNextImageArrow()
  await pa.validate2ndImageIsDisplayed()
  await pa.clickonNextImageArrow()
  await pa.validate3rdImageIsDisplayed()
  await pa.clickonNextImageArrow()
  await pa.validate4thImageIsDisplayed()
  await pa.clickonNextImageArrow()
  await pa.validate5thImageIsDisplayed()
  await pa.clickonNextImageArrow()
  await pa.validate6thImageIsDisplayed()
  await pa.clickonNextImageArrow()
  await pa.validate1stImageIsDisplayed()
  await pa.clickonPreviousImageArrow()
  await pa.validate6thImageIsDisplayed()
 
});
