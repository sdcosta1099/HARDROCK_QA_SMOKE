import { test, expect, chromium } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Guest User PayPall Buy Now | Bag | Alaska/Hawaii orders |', async () => {

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
   

  const pagePromise = context.waitForEvent('page')
  await pa.clickOnPayPal() 
  const page1 = await pagePromise;
  await page1.waitForTimeout(3000);
  await page1.getByPlaceholder('Email or mobile number').click();
  await page1.getByPlaceholder('Email or mobile number').fill('sb-qcbwi26177341@personal.example.com');
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByPlaceholder('Password').fill('h7"j"9T%');
  await page1.getByRole('button', { name: 'Log In' }).click();
  await page1.getByText('••••5992').isVisible();
  await page1.getByTestId('submit-button-initial').click();
  await page.getByText('Checkout', { exact: true }).isVisible();
  await pa.selectCountry({label :'United States'})
  await pa.selectState({label : 'Alaska'})
  await page.waitForTimeout(3000);
  await pa.enterCity('Bettles')
  await pa.enterPinCode('99726') 
  await pa.enterPhoneNumber('9798979897')
  await pa.clickOnNextPayment()
  await pa.clickOnSameAsShippingAddressCheckBox()
  await pa.validateShippingAddressBox()
  await page.getByText('sb-qcbwi26177341@personal.example.com').first().isVisible();
  // await page.getByRole('button', { name: 'PURCHASE' }).click();
  // await page.waitForTimeout(5000);
  // await page.getByRole('heading', { name: 'Order Confirmed' }).isVisible();
  // await page.getByText('We have sent an email to sb-qcbwi26177341@personal.example.com confirming your o').isVisible();
          
});

