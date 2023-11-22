import { expect } from '@playwright/test';
const {setInputFiles}= require('playwright');
exports.playerAction = class playerAction{
    constructor(page){
        this.page = page
        this.configuration_link = page.getByRole('link', { name: 'Configuration' })
        
    }

    async clickOkButtonOnOfferRejectionPopup(){
        await this.okButtonOfferRejectionPopup.click();
    }
   



}