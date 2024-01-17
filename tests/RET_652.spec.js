import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Continue Shopping', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.hoverOnCategoryPINS()
    await pa.clickOnSubCategoryOnlineExclusivePins()
    await pa.clickOnProductMessiLimitedEditionPin()          
    await pa.clickOnAddToBag()
    await pa.clickOnMyBag()
    await pa.validateYourBagDisplayed()
    await pa.validateItemCount()
    await pa.validateItemName()
    await pa.validateItemImage()
    await pa.validateCityMyBag()
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
    await pa.clickOnProductYouthClassicLogoTee()
    await pa.selectCity({label :'Barcelona'})
    await pa.clickOnSizeSInPDPScreen()
    await pa.clickOnAddToBag()
    await pa.clickOnMyBag()
    await pa.validateShippingChargesIsAdded()
    await pa.validateShippingChargesIsAddedToTotalPrice()
 
    



    
    
   
});