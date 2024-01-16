import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('PDP Category Breadcrumb', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.clickOnCategoryPINS()
    await pa.clickOnSubCategory3DPINS()
    await pa.validatehomeCategorySubcatogeryPathDisplayed()
    await pa.clickOnProductPINS()
    await pa.validateProductDetailPage()
    

    
});
