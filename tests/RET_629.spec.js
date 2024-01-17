import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('RET_629, Validate Order Receipt', async ({ page }) => {
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
    await pa.validateShippingMethodRadioBoxIsPopulatedWithCharges()
    await pa.validateShippingChargesIsAdded()
    await pa.validateShippingChargesIsAddedToTotalPrice()
    await pa.clickOnNextPayment()
    await pa.clickOnSameAsShippingAddressCheckBox()
    await pa.validateShippingAddressBox()
    await pa.validatePaymentMethodIsDisplayed()
    await pa.validateCreditCardRadioButtonIsDisplayed()
    await pa.enterCreditCardNumber('4242 4242 4242 4242')
    await pa.validateExpirationDate()
    await pa.enterExpirationDate('10/28')
    await pa.validateSecurityCode()
    await pa.enterSecurityCode('009')
    await pa.validatePayPalRadioButtonIsDisplayed()
    await pa.clickOnPayPalRadioButton()
    await this.pause();
    
});


    
 
    



    //await pa.clickOnCheckOut()
    //await pa.validateCheckOutPageDisplayed()
    //await pa.enterEmailAddress('test@yopmail.com')
    //await pa.clickOnContinueToCheckOut()
    
    
    
    
   
