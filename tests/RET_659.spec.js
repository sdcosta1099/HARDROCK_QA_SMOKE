import { test, expect } from '@playwright/test';
test.setTimeout(150000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Mini Cart Product count', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.enterItemToSearch('Hoodie')
    await pa.clickOnMessiAdultFitNavyHoodie()
    await pa.validatePDPSizesAreDisplayed()
    await pa.selectSizeLFromPDP()
    await pa.clickOnAddToBag()
    await pa.clickOnMyBag()
    await pa.validateYourBagDisplayed()
    await pa.validateItemCount()
    // await page.waitForTimeout(200000);
    await pa.validateItemName()
    await pa.validateItemImage()
    // await pa.validateCityMyBag()
    await pa.validateQty()
    await pa.validateItemPrice()
    await pa.validateItemTotal()
    await pa.validateHelplineNumber()
    await pa.validateEnterPromoCode()
    await pa.hoverOnMyBagIcon() 
    await pa.validateMiniCartIconQty_1()
    await pa.clickOnContinueShopping()
    await pa.validateHomePageDisplayed()
    await pa.enterItemToSearch('Hoodie')
    await pa.clickOnMessiAdultFitNavyHoodie()
    await pa.validatePDPSizesAreDisplayed()
    await pa.selectSizeLFromPDP()
    await pa.selectQuantity({label :'3'})
    await page.waitForTimeout(2000);
    await pa.clickOnAddToBag()
    await pa.validateMiniCartIconQtyIncreased_3()
    await pa.clickOnMyBag()
    await page.waitForTimeout(2000);
    await pa.clickOnEditButtonOnYourBag()
    await page.waitForTimeout(2000);
    await pa.clickOnQuantityDropdown()
 
    


















    
});

