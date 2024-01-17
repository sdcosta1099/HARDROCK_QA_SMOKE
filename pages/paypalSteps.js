import { test, expect } from '@playwright/test';
const { setInputFiles } = require('playwright/test');
exports.paypalSteps = class paypalSteps {
    constructor(page) {
        this.page = page
        this.configuration_link = page.getByRole('link', { name: 'Configuration' })
        this.plpSizeXS = page.getByRole('button', { name: 'Refine by Size: XS' })
        this.pdpSizeS = page.locator('//button[@data-attr-value="S"]')
        this.paypalButton = page.locator('(//iframe[@title="PayPal"])[1]')
    }


//       await this.enterUnityPassword.fill('Password01@');
//       await this.closeModalPopUp.click();
//       await expect(this.vShippingMethodRadioBox).toBeVisible();
  

      //RET_1172
      async clickOnPaypalMiniCartButton(){
         await this.paypalButton.click();
      }
   }
      