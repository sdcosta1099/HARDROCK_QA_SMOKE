import { test, expect, chromium } from '@playwright/test';
test.setTimeout(180000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Guest User PayPal Buy Now from Multi-Step checkout', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    const pa = new playerAction(page)
    const common = new commonSteps(page)

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
    await pa.selectState({label : 'Wisconsin'})
    await pa.enterCity('Neenah')
    await pa.enterPinCode('54956') 
    await pa.enterPhoneNumber('9798979897')
    await pa.clickOnNextPayment()
    await pa.clickOnSameAsShippingAddressCheckBox()
    await pa.validateShippingAddressBox()
    await pa.enterEmailAddress('test@yopmail.com') 
    await pa.validatePaymentMethodIsDisplayed()
    await pa.validateCreditCardRadioButtonIsDisplayed()
    await page.getByText('Pay with PayPal').click();
    await page.waitForTimeout(3000);

  const pagePromise = context.waitForEvent('page')
  await page.frameLocator('(//iframe[@title="PayPal"])[1]').getByRole('link',{name:'PayPal'}).click()
  const page1 = await pagePromise;
  await page1.waitForTimeout(3000);
  await page1.getByPlaceholder('Email or mobile number').click();
  await page1.getByPlaceholder('Email or mobile number').fill('sb-qcbwi26177341@personal.example.com');
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByPlaceholder('Password').fill('h7"j"9T%');
  await page1.getByRole('button', { name: 'Log In' }).click();
  await page1.getByText('••••5992').isVisible();
//   await page1.getByTestId('submit-button-initial').click();
//   await page.getByRole('heading', { name: 'Order Confirmed' }).isVisible();
//   await page1.waitForTimeout(3000);
    
    
});
