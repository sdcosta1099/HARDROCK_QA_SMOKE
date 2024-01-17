import { test, expect } from '@playwright/test';
test.setTimeout(60000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_658_Increase Decrease item quantity | Mini Cart', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

  await pa.enterItemToSearch('Hoodie')
  await pa.clickOnMessiAdultFitNavyHoodie()
  await pa.validatePDPSizesAreDisplayed()
  await pa.selectSizeLFromPDP()
  await pa.clickOnPDPAddToBag()
  await pa.clickOnCartLogo()
  await pa.validateItemIsAddedToCart()
  await pa.validateCartQuantityIs1()
  await pa.validateProductImageIsDisplayed()
  await pa.validateEstimatedTotalIsDisplayed()
  await pa.validateSubTotalIsDisplayed()
  await pa.validateShippingIsDisplayed()
  await pa.selectCartQuantity2()
  await page.waitForTimeout(3000);
  await pa.validateUpdatedEstimatedTotalIsDisplayed()
  await pa.validateUpdatedSubTotalIsDisplayed()
  await pa.validateShippingIsDisplayed()
  await pa.selectCartQuantity1()
  await page.waitForTimeout(3000);
  await pa.validateEstimatedTotalIsDisplayed()
  await pa.validateSubTotalIsDisplayed()
  await pa.validateShippingIsDisplayed()
});
