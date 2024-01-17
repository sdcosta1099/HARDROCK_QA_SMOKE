import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_1286_Validate PDP Category Breadcrumb', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

  await pa.hoveroncategoryWOMEN()
  await pa.clickonsubcategoryJOGGERSETS()
  await pa.validatePDP_Path_Home_Category_SubCategory()
  await pa.validate_HOME_is_clickable()
  await pa.validate_WOMEN_Category_PDP_PATH_is_clickable()
  await pa.validate_JOGGERSET_subcategory_is_clickable()

});


