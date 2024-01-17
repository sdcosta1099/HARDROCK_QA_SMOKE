import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Apply Promo code', async ({ page }) => {
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
    await pa.clickOnContinueShopping()
    await pa.validateHomePageDisplayed()
    await pa.hoverOnCategoryTEES()
    await pa.clickOnSubCategoryKidsTshirts()
    await pa.clickOnProductYouthClassicLogoTee()
    await pa.selectCity({label :'Barcelona'})
    await pa.clickOnSizeSInPDPScreen()
    await pa.clickOnAddToBag()
    await pa.clickOnMyBag()
    await pa.clickOnCheckOut()
    await pa.clickOnContinueToCheckOut()
    await pa.validateShippingForm()
    await pa.validateFirstName()
    await pa.vailidateLastName()
    await pa.vailidateAddress1()
    await pa.vailidateAddress2()
    await pa.vailidateCountry()
    await pa.vailidateState()
    await pa.validateCity()
    await pa.validateZipCode()
    await pa.validatePhoneNumber()
    await pa.enterFirstName('Johnson')
    await pa.enterLastName('Smith')
    await pa.enterAddress1('657')
    await pa.enterAddress2('Avocado Ave.')
    await pa.selectCountry({label :'United States'})
    await pa.selectState({label : 'Wisconsin'})
    await pa.enterCity('Neenah')
    await pa.enterPinCode('54956') 
    await pa.enterPhoneNumber('9798979897')
    //await pa.validateShippingMethodRadioBoxIsPopulatedWithCharges()
    await pa.validateShippingChargesIsAdded()
    await pa.validateShippingChargesIsAddedToTotalPrice()
 
    


   
});