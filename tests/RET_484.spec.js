import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_484_Validate Filter by product attribute', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

  await pa.clickOnItemToSearchBox()
  await pa.enterItemKeyWordToSearch("White")
  await pa.clickonsearchKEYWORD()
  await pa.validateNumberofItemsDisplayedOntheLeft()
  await pa.clickandselectfemaleGenderCheckbox()
  await pa.validateNumberofItemsDisplayedOntheRight()
 // await pa.clearAlltheselectionandReset()


});


