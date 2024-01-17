import { test, expect } from '@playwright/test';
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_1259_Validate size filter', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()


    await pa.enterItemToSearch('Hoodie')
    await pa.clickOnPLPSize()
    await pa.validatePLPSizeFilters()
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

});
