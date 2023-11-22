import { expect } from '@playwright/test';
const {setInputFiles}= require('playwright');
exports.playerAction = class playerAction{
    constructor(page){
        this.page = page
        this.configuration_link = page.getByRole('link', { name: 'Configuration' })
        this.itemSearchField = page.getByRole('combobox', { name: 'Enter Keyword or Item No.' })
        this.plpSizeFilter = page.getByRole('button', { name: 'Size' })
        this.plpSizeXS = page.getByRole('button', { name: 'Refine by Size: XS' })
        this.plpSizeS = page.getByRole('button', { name: 'Refine by Size: S' })
        this.plpSizeM = page.getByRole('button', { name: 'Refine by Size: M' })
        this.plpSizeL = page.getByRole('button', { name: 'Refine by Size: L' })
        this.plpSizeXL = page.getByRole('button', { name: 'Refine by Size: XL' })
        this.plpSizeXXL = page.getByRole('button', { name: 'Refine by Size: XXL' })
        this.plpSizeXXXL = page.getByRole('button', { name: 'Refine by Size: XXXL' })
        this.messiAdultFitNavyHoodie = page.locator('//a[contains(text(),"Messi Adult Fit Navy Hoodie")]')
        this.pdpSizeS = page.locator('//button[@data-attr-value="S"]')
        this.pdpSizeM = page.locator('//button[@data-attr-value="M"]')
        this.pdpSizeL = page.locator('//button[@data-attr-value="L"]')
        this.pdpSizeXL = page.locator('//button[@data-attr-value="XL"]')
        this.pdpSizeXXL = page.locator('//button[@data-attr-value="XXL"]')
        this.pdpAddToBag = page.locator('//button[@class="add-to-cart btn btn-primary"]')
        // this.element = page.locator('(//span[@class="user-message ml-1"])[1]')

    }

    // async clickOkButtonOnOfferRejectionPopup(){
    //     await this.okButtonOfferRejectionPopup.click();
    // }
    // async clickOnOkButton(){
    //     await this.element.click();
    // }
    async clickOnPDPAddToBag(){
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector('//button[@class="add-to-cart btn btn-primary"]');
        await this.pdpAddToBag.click();
    }
    async enterItemToSearch(ItemName){
        await this.itemSearchField.click();
        await this.itemSearchField.fill(ItemName);
        await this.itemSearchField.press('Enter');
    }
    async clickOnSizeFilterInPLP(){
        await this.plpSizeFilter.click();
    }
    async clickOnSizeFilterInPLP(){
        await this.messiAdultFitNavyHoodie.click();
    }
 
    async validateAllSizeFiltersArePresent(){
        await expect(this.plpSizeXS).toBeVisible();
        await expect(this.plpSizeS).toBeVisible();
        await expect(this.plpSizeM).toBeVisible();
        await expect(this.plpSizeL).toBeVisible();
        await expect(this.plpSizeXL).toBeVisible();
        await expect(this.plpSizeXXL).toBeVisible();
        await expect(this.plpSizeXXXL).toBeVisible();
    }
    async validateAllSizeFiltersOnPDPScreen(){
        await expect(this.pdpSizeS).toBeVisible();
        await expect(this.pdpSizeM).toBeVisible();
        await expect(this.pdpSizeL).toBeVisible();
        await expect(this.pdpSizeXL).toBeVisible();
        await expect(this.pdpSizeXXL).toBeVisible();
    }
    async clickOnSizeSInPDPScreen(){
        await this.pdpSizeS.click();
    }
    async clickOnSizeSInPDPScreen(){
        await this.pdpSizeS.click();
    }

   



}