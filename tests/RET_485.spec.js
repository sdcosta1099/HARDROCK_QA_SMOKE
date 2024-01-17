import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_485_Verify sort options', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

  await pa.enterItemToSearch('Hoodie')
  
  await pa.clickonSortBy()
  await pa.clickonNewArrivals()
  await pa.clickonSortBy()
  await pa.clickonSortByHighToLow()
  await page.locator('(//*[contains(text(),"$80.00")])[1]').isVisible();
  await page.locator('(//*[contains(text(),"$70.00")])[1]').isVisible();
  await pa.clickonSortBy()
  await pa.clickonSortByLowToHigh()
  await page.locator('(//*[contains(text(),"$20.00")])[1]').isVisible();
  await page.locator('(//*[contains(text(),"$24.99")])[1]').isVisible();

});
