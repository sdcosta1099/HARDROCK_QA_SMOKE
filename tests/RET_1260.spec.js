import { test, expect } from '@playwright/test';
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Validate size filter', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()
    await pa.enterItemToSearch('Hoodies')
    await pa.clickOnSizeFilterInPLP()
    await pa.validateAllSizeFiltersArePresent()
   
});

