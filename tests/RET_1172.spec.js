import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';
import { paypalSteps } from '../pages/paypalSteps';

test('Enter Shipping Address', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    const ps = new paypalSteps(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.enterItemToSearch('Hoodie')
    await pa.clickOnMessiAdultFitNavyHoodie()
    await pa.validatePDPSizesAreDisplayed()
    // await pa.selectSizeLFromPDP()
    
  
    await page.getByRole('button', { name: 'L', exact: true }).click();
    await page.waitForTimeout(2000);

    await page.goto('https://www.sandbox.paypal.com/checkoutnow?sessionID=uid_c6f7cf0754_mtc6mje6mjq&buttonSessionID=uid_60df22ac17_mtc6mje6mjq&stickinessID=uid_c50c0a3c98_mtc6mje6mju&smokeHash=&sign_out_user=false&token=6R69042540950361E&fundingSource=paypal&buyerCountry=US&locale.x=en_US&commit=false&client-metadata-id=uid_c6f7cf0754_mtc6mje6mjq&enableFunding.0=venmo&standaloneFundingSource=paypal&branded=true&clientID=ASrfwv1Tx5F0xR9GPCeE7l7L8MpAIKoJibHsIQA0xx-mj_3rG8VUip6Paj_YwTWvrvP47NASlhACZo3C&env=sandbox&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QVNyZnd2MVR4NUYweFI5R1BDZUU3bDdMOE1wQUlLb0ppYkhzSVFBMHh4LW1qXzNyRzhWVWlwNlBhal9Zd1RXdnJ2UDQ3TkFTbGhBQ1pvM0MmbWVyY2hhbnQtaWQ9QlZMVEtKMjhWV0pXNCZjb21wb25lbnRzPWJ1dHRvbnMsbWVzc2FnZXMmY3VycmVuY3k9VVNEJmNvbW1pdD1mYWxzZSZlbmFibGUtZnVuZGluZz12ZW5tbyZkaXNhYmxlLWZ1bmRpbmc9Y2FyZCxiYW5jb250YWN0LGJsaWssZXBzLGdpcm9wYXksaWRlYWwsbWVyY2Fkb3BhZ28sbXliYW5rLHBheWxhdGVyLHAyNCxzZXBhLHNvZm9ydCIsImF0dHJzIjp7ImRhdGEtcGFydG5lci1hdHRyaWJ1dGlvbi1pZCI6IlNhbGVzZm9yY2VDb21tZXJjZUNsb3VkX1BQQ1AiLCJkYXRhLXVpZCI6InVpZF9xZ3Z2eGZ0amJianZmcmh4dHRmcnV3bXVscG1vcmIifX0&xcomponent=1&version=5.0.419');
    
    await page.getByPlaceholder('Email or mobile number').click();
    await page.getByPlaceholder('Email or mobile number').fill('sb-qcbwi26177341@personal.example.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('h7"j"9T%');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByText('••••5992').click();
  await page.locator('//button[@id="payment-submit-btn"]').click();
  await page.goto('https://dev.shop.hardrock.com/checkout?stage=shipping');
  await page.goto('https://dev.shop.hardrock.com/checkout?stage=shipping#shipping');
  await page.locator('html').click();
  await page.locator('html').click();
  await page.getByText('Checkout', { exact: true }).click();
  await page.getByRole('heading', { name: 'Shipping', exact: true }).click();
  await page.getByRole('textbox', { name: 'Phone Number\n*' }).click();
  await page.getByRole('textbox', { name: 'Phone Number\n*' }).fill('927282098272');
  await page.getByRole('button', { name: 'Next: Payment' }).click();
  await page.locator('#stateCodebill').click();
  await page.locator('#stateCodebill').fill('Michoacan');
  await page.getByRole('textbox', { name: 'Phone Number*' }).click();
  await page.getByRole('textbox', { name: 'Phone Number*' }).fill('927282098272');
  await page.getByPlaceholder('Enter your Email').click();
  await page.locator('#maincontent').click();
  // await page.getByRole('button', { name: 'PURCHASE' }).click();
  // await page.goto('https://dev.shop.hardrock.com/checkout?stage=placeOrder#placeOrder');
  // await page.goto('https://dev.shop.hardrock.com/orderconfirmation');
  // await page.getByRole('heading', { name: 'Order Confirmed' }).click();
  // await page.getByRole('heading', { name: 'Order #: 200008093' }).click();
   
});