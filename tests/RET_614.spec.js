import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Enter Billing Address', async ({ page }) => {
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
    await pa.clickOnNextPayment()
    await pa.clickOnEditButtonToUpdateShippingAddress()
    await pa.clearFirstName()
    await pa.enterAddress1('705')
    await pa.enterAddress2('Skymark Avenue')
    await pa.selectCountry({label :'Canada'})
    await pa.selectStateToEdit({label :'Ontario'})
    await pa.enterCity('MarkHam')
    await pa.enterPinCode('M4') 
    await pa.enterPhoneNumber('97989798')
    await pa.clickOnNextPayment()
    await pa.validatErrorMessageWhenMandatoryFieldsAreNotFilled()
    await pa.validateErrorMessageWhenPhoneNumberIsNotBetween10to20Characters()
    await pa.validateErrorMessageWhenInvalidZipCode()
    
    
    
   
});