import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_584_Verify Search Results with No Products Found', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()
    await pa.enterItemToSearch('nes')
    await pa.validateNoSearchResult()
    await pa.enterItemName('nes')
    await pa.clickOnSearchSuggestion()
    await pa.validateSuggestedProductPDP()
    await pa.enterItemToSearch('Hoodies')
    await pa.validateTotalNoOfItemIsDisplayed();

});
