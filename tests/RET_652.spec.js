import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Continue Shopping', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.enterItemToSearch('Hoodie')
    await pa.clickOnMessiAdultFitNavyHoodie()
    await pa.validatePDPSizesAreDisplayed()
    await pa.selectSizeLFromPDP()
    await pa.clickOnPDPAddToBag()
    await pa.clickOnMyBag()
    await pa.validateYourBagDisplayed()
    await pa.validateItemCount()
    await pa.validateItemName()
    await pa.validateItemImage()
    await pa.validateItemPrice()
    await pa.validateQty()
    await pa.validateItemTotal()
    await pa.validateHelplineNumber()
    await pa.validateEnterPromoCode()
    await pa.hoverOnMyBagIcon()
    await pa.clickOnViewBag()
    await pa.clickOnContinueShopping()
    await pa.validateHomePageDisplayed()
    await pa.hoverOnCategoryTEES()
    await pa.clickOnSubCategoryKidsTshirts()
    await page.waitForTimeout(2000);
    await pa.enterItemToSearch('Hoodie')
    await pa.clickOnMessiAdultFitNavyHoodie()
    await pa.validatePDPSizesAreDisplayed()
    await pa.selectSizeLFromPDP()
    await pa.clickOnPDPAddToBag()
    await page.waitForTimeout(2000);
    await pa.clickOnMyBag()
    // await pa.validateShippingChargesIsAdded()

 
    



    
    
   
});