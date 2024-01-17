import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

<<<<<<< HEAD
test('RET_1286_Validate PDP Category Breadcrumb', async ({ page }) => {
=======
test('PDP Category Breadcrumb', async ({ page }) => {
>>>>>>> 22744f9a47181f9ea5286447d0f8d61716ef0e7a
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

<<<<<<< HEAD
  await pa.hoveroncategoryWOMEN()
  await pa.clickonsubcategoryJOGGERSETS()
  await pa.validatePDP_Path_Home_Category_SubCategory()
  await pa.validate_HOME_is_clickable()
  await pa.validate_WOMEN_Category_PDP_PATH_is_clickable()
  await pa.validate_JOGGERSET_subcategory_is_clickable()

});


=======
    await pa.clickOnCategoryPINS()
    await pa.clickOnSubCategory3DPINS()
    await pa.validatehomeCategorySubcatogeryPathDisplayed()
    await pa.clickOnProductPINS()
    await pa.validateProductDetailPage()
    

    
});
>>>>>>> 22744f9a47181f9ea5286447d0f8d61716ef0e7a
