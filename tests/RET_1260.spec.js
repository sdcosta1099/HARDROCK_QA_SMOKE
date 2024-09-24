import { test, expect } from '@playwright/test';
test.setTimeout(6000000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_1260_Validate size filter sequence', async ({ page }) => {

    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()
    

    await pa.clickOnSearchBox()
    await pa.enterItemToSearch('Hoodies')
    await pa.validatePLPResultDisplayed()
    await pa.validateGenderDisplayedOnPLP()
    await pa.validateColorDisplayedOnPLP()
    await pa.validatePriceDisplayedOnPLP()
    await pa.validateCityDisplayedOnPLP()
    await pa.validateSizeDisplayedOnPLP()
    await pa.validateSizesArePresentOnPLP()
    await pa.clickOnSizeSOnPLP()
    await pa.validateFilteredItemsAreDisplayed()
    
});
