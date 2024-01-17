import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('1000$+ orders checkout with credit card', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    //await pa.clickOnSignInButton()
    //await pa.validateUnityWebsiteDisplayed()
    //await pa. enterEmailAddress('test@yopmail.com') 
    //await pa.enterPassWord('h7"j"9T%') 
    //await pa.clickOnLogin()
    
    await pa.enterItemToSearch('RECTANGULAR PIN DISPLAY CASE')
    //await pa.clickItemRecommended()
    await pa.ClickOnProductSearched()
    await pa.selectQuantitydropdown('2')
    await pa.clickOnPDPAddToBag()
    await pa.enterItemToSearch('GUITAR SHAPED DISPLAY CASE')
    //await pa.clickItemRecommended()
    await pa.ClickOnProductSearched()
    await pa.selectQuantitydropdown('2')
    await pa.clickOnPDPAddToBag()
    await pa.clickOnMyBag()
    await pa.validateYourBagDisplayed()
    await pa.clickOnCheckOut()
    await pa.validateCheckOutPageDisplayed()
    await pa.enterEmailAddress('test@yopmail.com')
    await pa.clickOnContinueToCheckOut()
    await pa.validateCustomerInformationOnCheckOutPage()
    await pa.clickOnNextPaymentButton()
    await pa.validateAmountToPay()
    await pa.clickOnSameAsShippingAddressCheckBox()
    // //await pa.enterCreditCardDetails()
 
});
