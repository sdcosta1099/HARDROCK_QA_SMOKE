import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Click to Checkout(Registered and Logged In User)', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.hoverOnCategoryPINS()
    await pa.clickOnSubCategoryOnlineExclusivePins()
    await pa.clickOnProductMessiLimitedEditionPin()
    await pa.clickOnAddToBag()
    await pa.clickOnMyBag()
    await pa.clickOnCheckOut()
    await pa.validateCheckOutPageDisplayed()
    //await pa.enterEmailAddress('test@yopmail.com')
    await pa.clickOnContinueToCheckOut()
    await pa.validateShippingForm() 
    await pa.enterFirstName('Johnson')
    await pa.enterLastName('Smith')
    await pa.enterAddress1('657')
    await pa.enterAddress2('Avocado Ave.')
    await pa.selectCountry({label :'United States'})
    await pa.selectState({label : 'Wisconsin'})
    await pa.enterCity('Neenah')
    await pa.enterPinCode('54956') 
    await pa.enterPhoneNumber('9798979897')
    await pa.clickOnNextPayment()
    await pa.clickOnSameAsShippingAddressCheckBox()
    await pa.clickOnPurchaseTab()
   
});