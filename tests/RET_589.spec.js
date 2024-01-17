import { test, expect } from '@playwright/test';
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('View Products within Category', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup();

await pa.hoverOnCategory_Hoodies();
await pa.clickOnSubCategory_MensHoodies();
await pa.validatePLP();
await pa.validateProductCountOnTopLeft();
await pa.clickProductImage();
await pa.vaidatePDPPage();
await pa.clickProductNameLink();
await pa.navigateBack();
await pa.vaidatePDPPage();
await pa.logout_button();
})
