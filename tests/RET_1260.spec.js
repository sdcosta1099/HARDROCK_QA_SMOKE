import { test, expect } from '@playwright/test';
<<<<<<< HEAD
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_1260_Validate size filter sequence', async ({ page }) => {
=======
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Validate size filter sequence', async ({ page }) => {
>>>>>>> 22744f9a47181f9ea5286447d0f8d61716ef0e7a
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()
<<<<<<< HEAD
=======
    

    await pa.clickOnSearchBox()
    await pa.enterItemToSearch('Hoodies')
    await pa.validatePLPResultDisplayed()
    await pa.validateGenderDisplayedOnPLP()
    await pa.validateColorDisplayedOnPLP()
    await pa.validatePriceDisplayedOnPLP()
    await pa.validateCityDisplayedOnPLP()
    await pa.validateSizeDisplayedOnPLP()
    await pa.clickOnSizeFilterOnPLP()
    await pa.validateSizesArePresentOnPLP()
    await pa.clickOnSizeSOnPLP()
    await pa.validateFilteredItemsAreDisplayed()
    
});
>>>>>>> 22744f9a47181f9ea5286447d0f8d61716ef0e7a

  await pa.enterItemToSearch('Hoodie')
  await pa.clickOnPLPSize()
  await pa.validatePLPSizeFilters()
  await pa.selectPLPSizeXS()

});
