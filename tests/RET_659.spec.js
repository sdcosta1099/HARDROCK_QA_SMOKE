import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Mini Cart Product count', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.hoverOnCategoryPINS()
    await pa.clickOnSubCategoryOnlineExclusivePins()
    await pa.clickOnProductMessiLimitedEditionPin()
    await pa.clickOnAddToBag()
    await pa.clickOnMyBag()
    //[await pa.clickOnCheckOut()
    //await pa.validateCheckOutPageDisplayed()
    //await pa.enterEmailAddress('test@yopmail.com')
    //await pa.clickOnContinueToCheckOut()
    //await pa.validateShippingForm()]
    await pa.validateYourBagDisplayed()
    await pa.validateItemCount()
    await pa.validateItemName()
    await pa.validateItemImage()
    await pa.validateCityMyBag()
    await pa.validateQty()
    await pa.validateItemPrice()
    await pa.validateItemTotal()
    await pa.validateHelplineNumber()
    await pa.validateEnterPromoCode()
    await pa.hoverOnMyBagIcon() 
    await pa.validateMiniCartIconQty_1()
    await pa.clickOnContinueShopping()
    await pa.validateHomePageDisplayed()
    await pa.hoverOnCategoryTEES()
    await pa.clickOnSubCategoryKidsTshirts()
    await pa.clickOnProductYouthClassicLogoTee()
    await pa.selectCity({label :'Barcelona'})
    await pa.clickOnSizeSInPDPScreen()
    await pa.selectQuantity({label :'3'})
    await pa.clickOnAddToBag()
    await pa.validateMiniCartIconQtyIncreased_3()
    await pa.clickOnMyBag()
    await pa.clickOnEditButtonOnYourBag()
    await pa.clickOnQuantityDropdown()
    await pa.selectQuantity({label :'2'})
    


















    
});

