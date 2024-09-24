import { expect } from '@playwright/test';
exports.commonSteps = class commonSteps{
    constructor(page){
        this.page = page
        this.username_textbox = page.locator("//input[@id='txtUserame']") 
        this.password_textbox = page.locator("//input[@id='txtPassword']")
        this.submit_button = page.locator("//input[@id='btnSubmit1']")
        this.domainDropdown = page.locator("//select[@id='ddlDomain']")
        this.logout_button = page.getByRole('link', { name: 'Logout' })
        this.closeHolidayDeal = page.locator('(//button[@class="close"])[1]');
       
    }
    
    
    async goToHALOShop(){
        //await this.page.goto('https://storefront:Rock$h0p@staging-na01-hardrock.demandware.net/');

        await this.page.goto('https://storefront:Rock$h0p@dev.shop.hardrock.com/');
        //await expect(this.page).toHaveTitle('Hard Rock - Online Rock Shop | Online Hard Rock Store ');
        //await expect(this.page).toHaveURL('https://staging-na01-hardrock.demandware.net/');

        await expect(this.page).toHaveURL('https://dev.shop.hardrock.com/');
      
    }
    async loginAndSubmit(username, password){
        await this.username_textbox.type(username);
        await this.password_textbox.type(password);
        await this.domainDropdown.selectOption('seminolehardrock.fl.local');
        await this.submit_button.click();
       // await expect(this.page).toHaveTitle('HALO Web Management Application');
       // await expect(this.page).toHaveURL('https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/EmployeeDashboard.aspx');
        await this.page.waitForTimeout(2000);
    }
    async logout(){
        await this.logout_button.click();
    }
    async closeHolidayDealsPopup(){
    await this.closeHolidayDeal.click();
    }

    async navigateBack()    {
        await this.page.goBack();
    }
}





