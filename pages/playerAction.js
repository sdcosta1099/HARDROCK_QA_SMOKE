import { test, expect } from '@playwright/test';
const { setInputFiles } = require('playwright/test');
exports.playerAction = class playerAction {
    constructor(page) {
        this.page = page
        this.configuration_link = page.getByRole('link', { name: 'Configuration' })
        this.itemSearchField = page.getByRole('combobox', { name: 'Enter Keyword or Item No.' })
            
        
        this.selectsizeM_InAddToCart = page.locator('//button[@data-attr-value="M"]')
    
        //RET_1286
        
        this.CategoryPINS = page.locator("(//a[@id='pins'])[1]")
        this.SubCategory3DPINS = page.getByRole('menu').getByText('3D Pins')
        this.homeCategorySubcatogeryPathDisplayed = page.locator("//div[@class='plp-breadcrumbs']//a[@href='/s/hardrock/pins/3d-pins']")
        this.Product = page.locator("(//a[@class='link thesansb6_semibold'])[1]")
        this.Product_NativeAmericanPin= page.getByRole('link', { name: 'Native American Pinktoberr Pin 23' })

        //RET_1172

        this.clickSelectProductPDP =  page.locator('(//div[@class="pdp-link"])[1]')
        this.MyBag = page.locator('(//a[@class="minicart-link"])[1]')
        this.payPal = page.frameLocator('(//iframe[@title="PayPal"])[1]').getByLabel('Pay with PayPal')
        
        //RET_1281
        this.itemRecomendation = page.locator('//li[@id="product-0"]')
        this.signInButton = page.locator('(//span[@class="user-message ml-1"])[1]')
        this.unityWebsiteDisplayed = page.locator('//div[@class="shr-header__logo"]')
        this.emailAddress = page.locator('//input[@id="email-guest"]')
        this.passWord = page.locator("//input[@id='password']")
        this.login = page.locator("//button[@id='js-shr-login__submit']")
        //this.selectQuantity5ForOrderAbove1000 = page.locator('//select[@class="quantity-select custom-select form-control"]')
        this.quantity = page.locator('//select[@id="quantity-1"]')
        this.yourBag = page.locator('//h1[@class="page-title-cart d-flex align-items-center justify-content-between"]')
        this.checkOutPage = page.locator('//span[@class="thesansb7_bold"]')
        this.ContinueToCheckOut = page.locator('//button[@class="submit-customer btn-save btn btn-block mt-4"]')
        this.CustomerInformation = page.locator('(//h2[@class="pull-left card-header-custom"])[1]')
        this.FirstName = page.locator('//input[@id="shippingFirstNamedefault"]')
        this.LastName = page.locator('//input[@id="shippingLastNamedefault"]')
        this.Address1 = page.locator('//input[@id="shippingAddressOnedefault"]')
        this.Address2 = page.locator('//input[@id="shippingAddressTwodefault"]')
        this.Country = page.locator('(//select[@id="country"])[1]')
        this.state = page.locator('(//select[@id="shippingStatedefault"])[1]')
        this.City = page.locator('//input[@id="shippingAddressCitydefault"]')
        this.PinCode = page.locator('//input[@id="shippingZipCodedefault"]')
        this.PhoneNumber = page.locator('//input[@id="shippingPhoneNumberdefault"]')
        this.NextPayment = page.locator('//button[@value="submit-shipping"]')
        this.ShippingandBilling = page.locator('(//h2[@class="pull-left card-header-custom"])[2]')
        this.ShippingAddressCheckBox = page.locator('//div[@class="card payment-form"]//div[@class="card-body"]//input[@type="checkbox"]')
        this.OrderSummary = page.locator('//div[@class="order-summary col-lg-5 checkout-card-spacer"]')

      //1148OrderSummary

        this.CheckOut = page.getByRole('button', { name: 'Checkout' })

      //RET_1261
        this.messiAdultFitNavyHoodie = page.locator('//a[contains(text(),"Messi Adult Fit Navy Hoodie")]')
        this.ProductDetailPage = page.locator('//h1[@class="mb-4 product-name pdp-product-name font-weight-500 thesansb7_bold lh-110 text-uppercase"]')
        this.pdpSizeS = page.locator('//button[@data-attr-value="S"]')
        this.pdpSizeM = page.locator('//button[@data-attr-value="M"]')
        this.pdpSizeL = page.locator('//button[@data-attr-value="L"]')
        this.pdpSizeXL = page.locator('//button[@data-attr-value="XL"]')
        this.pdpSizeXXL = page.locator('//button[@data-attr-value="XXL"]')
        this.AvailabilityBelowQtyDisplayed = page.locator('//span[@class="availability non-input-label m-0 thesansb6_semibold font-size-14 mr-1"]')
        this.pdpAddToBag = page.locator('//button[@class="add-to-cart btn btn-primary"]')

        //RET_1259
        this.SearchBox = page.locator('(//input[@placeholder="Search" and @role="combobox"])[1]')
        this.vPLPResult = page.locator('//ol[@class = "breadcrumb"]')
        this.vGenderPLP = page.locator('//button[@data-target="#refinement-gender"]')
        this.vColorPLP = page.locator('//button[@data-target="#refinement-color"]')
        this.vPricePLP = page.locator('//button[@data-target="#refinement-price"]')
        this.vCityPLP = page.locator('//button[@data-target="#refinement-city"]')
        this.vSizePLP = page.locator('//button[@data-target="#refinement-size"]')
        this.plpSizeFilter = page.locator('//button[@data-target = "#refinement-size"]')
        this.plpSizeXS = page.getByRole('button', { name: 'Refine by Size: XS' })
        this.plpSizeS = page.getByRole('button', { name: 'Refine by Size: S' })
        this.plpSizeM = page.getByRole('button', { name: 'Refine by Size: M' })
        this.plpSizeL = page.getByRole('button', { name: 'Refine by Size: L' })
        this.plpSizeXL = page.getByRole('button', { name: 'Refine by Size: XL' })
        this.plpSizeXXL = page.getByRole('button', { name: 'Refine by Size: XXL' })
        this.plpSizeXXXL = page.getByRole('button', { name: 'Refine by Size: XXXL' })
        

        //RET_1260
        this.vFilteredItems = page.locator('//div[@class="grid-result-count-mb thesansb5_plain font-weight-500 font-size-14 mb-3 mx-n2b mx-sm-0 text-right"]')

         
    } 
    
    

    //******************************************************************************************************************//
    
    //RET_1259
    async clickOnSearchBox(){
        await this.SearchBox.click();
        await this.page.waitForTimeout(3000);
      }
    async enterItemToSearch(ItemName) {
        await this.itemSearchField.click();
        await this.itemSearchField.fill(ItemName);
        await this.itemSearchField.press('Enter');
        await this.page.waitForTimeout(4000);
    }
    async validatePLPResultDisplayed(){
        await expect(this.vPLPResult).toBeVisible();
    }
    async validateGenderDisplayedOnPLP(){
        await this.page.waitForTimeout(2000);
        await expect(this.vGenderPLP).toBeVisible();
        await this.page.waitForTimeout(2000);
    }
    async validateColorDisplayedOnPLP(){
        await expect(this.vColorPLP).toBeVisible();
    }
    async validatePriceDisplayedOnPLP(){
        await expect(this.vPricePLP).toBeVisible();
    }
    async validateCityDisplayedOnPLP(){
        await expect(this.vCityPLP).toBeVisible();
    }
    async validateSizeDisplayedOnPLP(){
        await expect(this.vSizePLP).toBeVisible();
    }
    async clickOnSizeFilterOnPLP() {
        await this.page.waitForTimeout(4000);
        await this.plpSizeFilter.click();
        await this.page.waitForTimeout(4000);
    }
    async validateSizesArePresentOnPLP() {
    
        await expect(this.plpSizeXS).toBeVisible();
        await expect(this.plpSizeS).toBeVisible();
        await expect(this.plpSizeM).toBeVisible();
        await expect(this.plpSizeL).toBeVisible();
        await expect(this.plpSizeXL).toBeVisible();
        await expect(this.plpSizeXXL).toBeVisible();
        await expect(this.plpSizeXXXL).toBeVisible();
    }
    //RET_1260
    async clickOnSizeSOnPLP(){
    await this.plpSizeS.click();
    }
    async validateFilteredItemsAreDisplayed(){
        await expect(this.vFilteredItems).toBeVisible();
    }
    //RET_1261
    async clickOnProductMessiAdultFitNavyHoodie(){
        await this.messiAdultFitNavyHoodie.click();
    }
    async validateAllSizeFiltersOnPDPScreen() {

        await expect(this.pdpSizeS).toBeVisible();
        await expect(this.pdpSizeM).toBeVisible();
        await expect(this.pdpSizeL).toBeVisible();
        await expect(this.pdpSizeXL).toBeVisible();
        await expect(this.pdpSizeXXL).toBeVisible();
    }
    async validateProductDetailPage(){
        await expect(this.ProductDetailPage).toBeVisible();
      }
      async clickOnSizePDPM(){
         await this.page.waitForTimeout(3000);
         await this.pdpSizeM.click();
     }
     async validateAvailabilityBelowQtyDisplayed(){
         await expect(this.AvailabilityBelowQtyDisplayed).toBeVisible();
     }
 



 
 
    
    async clickItemRecommended()    {
        await this.page.waitForTimeout(2000);
        await this.itemRecomendation.click();
    }
    async clickOnPDPAddToBag() {
        await this.pdpAddToBag.click();
    }
    
    async ClickOnProductSearched(){       
        await this.clickSelectProductPDP.click();
    }
    
    async clickOnSizeFilterInPLP() {
        await this.messiAdultFitNavyHoodie.click(); 
    }
        async clickOnSizeSInPDPScreen() {
        await this.pdpSizeS.click();
    }
    async clickOnSizeSInPDPScreen() {
        await this.pdpSizeS.click();
    }
    //RET_1286

    async clickOnCategoryPINS(){
        await this.CategoryPINS.hover();
        await this.page.waitForTimeout(4000);
    }
    async clickOnSubCategory3DPINS() {
        await this.SubCategory3DPINS.click();
        await this.page.waitForTimeout(3000);
    }
    async validatehomeCategorySubcatogeryPathDisplayed(){
        await expect(this.homeCategorySubcatogeryPathDisplayed).toBeVisible();
    }
    async clickOnProductPINS() {
        await this.Product_NativeAmericanPin.first().click();
    }
         //RET_1172
    
    async clickOnMyBag(){
        await this.MyBag.click();
     }
    async clickOnPayPal() {
        await this.payPal.click();
    }
    //RET_1281

    async clickOnSignInButton() {
        await this.signInButton.click();
    }
    async validateUnityWebsiteDisplayed(){
        await expect(this.unityWebsiteDisplayed).toBeVisible();
    }
    async enterEmailAddress() {
        await this.page.waitForTimeout(3000);
        await this.emailAddress.fill('test@yopmail.com')
        await this.page.waitForTimeout(3000);
    }
    async enterPassWord() {
        await this.passWord.fill('h7"j"9T%')
    }
    async clickOnLogin(){
        await this.login.click();
    }
    async selectQuantitydropdown(itemQuantity){
        await this.page.waitForTimeout(2000);
        await this.quantity.selectOption(itemQuantity);
        

    } 
    async validateYourBagDisplayed(){
        await expect(this.MyBag).toBeVisible();
        //await expect(this.yourBag).toBeVisible();
        await this.page.waitForTimeout(2000);
    }  
    async clickOnCheckOut(){
        await this.page.waitForTimeout(2000);
        await this.CheckOut.click();
    }
    async validateCheckOutPageDisplayed(){
        await expect(this.checkOutPage).toBeVisible();
    }
    async clickOnContinueToCheckOut(){
        await this.ContinueToCheckOut.click();
    }
    async validateCustomerInformationOnCheckOutPage(){
        await expect(this.CustomerInformation).toBeVisible();

        await this.FirstName.fill('Johnson');
        await this.LastName.fill('Smith');
        await this.Address1.fill('657');
        await this.Address2.fill('Avocado Ave.');
        await this.page.waitForTimeout(3000);
        await this.Country.selectOption({label :'United States'});
        await this.page.waitForTimeout(2000);
        await this.state.selectOption({label : 'Wisconsin'});
        await this.page.waitForTimeout(2000);
        await this.City.fill('Neenah');
        await this.PinCode.fill('54956'); 
        await this.PhoneNumber.fill('9798979897');
    }

    async clickOnNextPaymentButton() {
        await this.page.waitForTimeout(2000);
        await this.NextPayment.click();
    }
     async validateShippingandBillingDetails(){
        await expect(this.ShippingandBilling).toBeVisible();
        
     }
     async validateAmountToPay(){
        await this.page.waitForTimeout(2000);
        await expect(this.OrderSummary).toBeVisible(); 
     }

     async clickOnSameAsShippingAddressCheckBox(){
        await this.page.waitForTimeout(5000);
        await this.page.pause();
        await this.ShippingAddressCheckBox.click();
    }

     //RET_1152

     async enterPassWord() {
        await this.passWord.fill('Password01@')
     }

     //RET_1261

     
    async validateAvailabilityBelowQtyDisplayed(){
        await expect(this.AvailabilityBelowQtyDisplayed).toBeVisible();
    }
    async switchToPayPalFrame(){
        const [newWindow] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.waitForNavigation(),
            this.page.locator("//button[@id='btnNext']").click(),
        ]);
        console.log(newWindow.url());
    }

    

    


   
}



    




















   




