import { test, expect } from '@playwright/test';
test.setTimeout(1200000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Edit items in the cart', async ({ page }) => {
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
    await pa.clickOnCheckOut()
    await pa.clickOnBackToBag()
    await pa.validateYourBagDisplayed()
    await pa.clickOnContinueShopping()
    await pa.validateHomePageDisplayed()
    await pa.clickOnMyBag()
    await pa.clickOnEditLinkOnYourBag()
    await pa.validateModalPopUpDesplayedWithProductDetails()
    await pa.closeModalPopUpDesplayedWithProductDetails()
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
    await pa.selectState({label :'Wisconsin'})
    await pa.enterCity('Neenah')
    await pa.enterPinCode('54956') 
    await pa.enterPhoneNumber('9798979897')
    await pa.validateShippingMethodRadioBoxWithCharges()
    await pa.validateShippingChargesIsAdded()
    await pa.validateShippingChargesIsAddedToTotalPrice()
    await pa.clickOnBackToBag()
    await pa.enterPromoCode('ASDFG')
    await pa.clickOnApplyButton()
    await pa.validateMessageCouponCanNotBeAddedToYourCartifPromoCodeIsInvalid()
    




    
    
});