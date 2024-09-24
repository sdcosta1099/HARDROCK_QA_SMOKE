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
        //this.payPal1 = page.frameLocator('(//iframe[@title="PayPal"])[1]').locator('(//div[contains(@id,"zoid-paypal-buttons-uid")])[1]')
        this.payPal1 = page.locator('//div[@class="card payment-method"]//input[@class="sfpp-payment-method-radio sfpp-payment-method-radio-paypal"]')
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
        this.state1 = page.locator('(//input[@id="stateCode"])[1]')
        this.City = page.locator('//input[@id="shippingAddressCitydefault"]')
        this.PinCode = page.locator('//input[@id="shippingZipCodedefault"]')
        this.PhoneNumber = page.locator('//input[@id="shippingPhoneNumberdefault"]')
        this.NextPayment = page.locator('//button[@value="submit-shipping"]')
        this.ShippingandBilling = page.locator('(//h2[@class="pull-left card-header-custom"])[2]')
        this.ShippingAddressCheckBox = page.locator('//div[@class="card payment-form"]//div[@class="card-body"]//input[@type="checkbox"]')
        this.OrderSummary = page.locator('//div[@class="order-summary col-lg-5 checkout-card-spacer"]')

      //1148OrderSummary

        this.CheckOut = page.locator('//button[@name="Checkout"]')

      //RET_1261
        this.messiAdultFitNavyHoodie = page.locator('//a[contains(text(),"Messi Adult Fit Navy Hoodie")]')
        this.discoRoyalBlueAdultHoodie = page.locator('//a[contains(text(),"Unisex Classic Logo Hoodie Grey")]')
        this.ProductDetailPage = page.locator('//h1[contains(text(),"Messi Adult Fit Navy Hoodie")]')
        this.pdpSizeS = page.locator('//button[@data-attr-value="S"]')
        this.pdpSizeM = page.locator('//button[@data-attr-value="M"]')
        this.pdpSizeL = page.locator('//button[@data-attr-value="L"]')
        this.pdpSizeXL = page.locator('//button[@data-attr-value="XL"]')
        this.pdpSizeXXL = page.locator('//button[@data-attr-value="XXL"]')
        this.AvailabilityBelowQtyDisplayed = page.locator('//div[contains(text(),"In Stock")]')
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

        this.messiAdultFitNavyHoodie = page.locator('//a[contains(text(),"Messi Adult Fit Navy Hoodie")]')
        this.pdpSizeS = page.locator('//button[@data-attr-value="S"]')
        this.pdpSizeM = page.locator('//button[@data-attr-value="M"]')
        this.pdpSizeL = page.locator('//button[@data-attr-value="L"]')
        this.pdpSizeXL = page.locator('//button[@data-attr-value="XL"]')
        this.pdpSizeXXL = page.locator('//button[@data-attr-value="XXL"]')
        this.pdpAddToBag = page.getByRole('button', { name: 'Add to Bag' })
        this.pdpCart = page.getByRole('link', { name: 'Cart 1 Items' })

        this.cartQuantity1 = page.locator('#maincontent').getByLabel('quantity: 1')
        this.selectCartQuantity = page.locator('#maincontent').getByLabel('quantity: 1')
        this.estimatedTotal = page.getByText('$12.55')
        this.estimatedTotal2 = page.getByText('$15.15')
        this.subTotal = page.locator('p').filter({ hasText: '$2.60' })
        this.subTotal2 = page.locator('p').filter({ hasText: '$5.20' })
        this.shippingAmount = page.getByText('$9.95')
        this.productImageInCart = page.locator('//img[@title="Messi Adult Fit Navy Hoodie"]')
        this.noSearchResultLabel = page.getByText('No Search Results For')
        this.searchSuggestion = page.getByLabel('Messi x Hard Rock Track Jogger Pants')
        this.suggestedProductPDP = page.getByText('THE MESSI COLLECTION Messi x Hard Rock Track Jogger Pants')

        //RET_485
         this.sortBy = page.getByText('Sort By')
         this.newArrivals = page.getByRole('link', { name: 'New Arrivals' })
         this.sortHighLow = page.getByRole('link', { name: 'Price High to Low' })
         this.sortLowHigh = page.getByRole('link', { name: 'Price Low To High' })
         this.sortHighToLow80 = page.locator('(//*[contains(text(),"$80.00")])[1]')
         this.sortHighToLow70 = page.locator('(//*[contains(text(),"$70.00")])[1]')
         this.sortLowToHigh20 = page.locator('(//*[contains(text(),"$20.00")])[1]')
         this.sortLowToHigh24 = page.locator('(//*[contains(text(),"$24.99")])[1]')

         //RET_497
         this.nextImage = page.locator('.slick-next')
         this.previousImage = page.locator('#maincontent svg').first()
         this.firstImage =  page.getByRole('img', { name: 'Messi Adult Fit Navy Hoodie image number 1' }).nth(1)
         this.secondImage = page.getByRole('img', { name: 'Messi Adult Fit Navy Hoodie image number 2' }).nth(1)
         this.thirdImage = page.getByRole('img', { name: 'Messi Adult Fit Navy Hoodie image number 3' }).nth(1)
         this.forthImage = page.getByRole('img', { name: 'Messi Adult Fit Navy Hoodie image number 4' }).nth(1)
         this.fifthImage = page.getByRole('img', { name: 'Messi Adult Fit Navy Hoodie image number 5' }).nth(1)
         this.sixthImage = page.getByRole('img', { name: 'Messi Adult Fit Navy Hoodie image number 6' }).nth(1)
   


        
        //RET_618
        this.CategoryMENS = page.locator('(//a[@id="men"])[1]')
        this.CategoryWOMENS = page.locator('(//a[@id="women"])[1]')
      

        //RET_663
        this.CategoryPINS = page.locator('(//a[@id="pins"])[1]')
        this.SubCategoryOnlineExclusivePins = page.locator('(//a[@id="pins_online_exclusive_pins"])[1]')
      //   this.ProductMessiLimitedEditionPin = page.locator('(//a[@class="link thesansb6_semibold"])[1]')
        this.ProductMessiLimitedEditionPin = page.locator('(//div[@class="image-container"])[1]')
        this.AddToBag = page.locator('//button[@class="add-to-cart btn btn-primary"]')
        this.MyBag = page.locator('(//a[@class="minicart-link"])[1]')
        this.CheckOut = page.getByRole('button', { name: 'Checkout' })
         //this.CheckOut = page.locator('//a[@href="https://dev.shop.hardrock.com/checkout"]')
         //this.CheckOut = page.locator('//div[@class="mb-sm-3"]')
        this.CheckOutPage = page.locator('//span[@class="thesansb7_bold" and contains(text(), "Checkout")]')
        this.CheckOut = page.locator('//div[@class="mb-sm-3"]')
        this.CheckOutPage = page.locator('//span[@class="thesansb7_bold"]')
        this.emailAddress = page.locator('//input[@id="email-guest"]')
        this.ContinueCheckOut = page.locator('//button[@class="submit-customer btn-save btn btn-block mt-4"]')
        //this.customerInformation = page.locator('(//div[@class="card-header clearfix"])[1]')
        this.FirstName = page.locator('//input[@id="shippingFirstNamedefault"]')
        this.LastName = page.locator('//input[@id="shippingLastNamedefault"]')
        this.Address1 = page.locator('//input[@id="shippingAddressOnedefault"]')
        this.Address2 = page.locator('//input[@id="shippingAddressTwodefault"]')
        this.Country = page.locator('(//select[@id="country"])[1]')
        //this.State = page.locator('(//select[@id="shippingStatedefault"])[1]')
        this.State = page.locator('(//select[@aria-describedby="defaultState"])[1]')
        this.StateEdit = page.locator('(//select[@id="shippingStatedefault"])[2]')
        //this.State = page.locator('(//select[@id="shippingStatedefault"])[2]')
        this.City = page.locator('//input[@id="shippingAddressCitydefault"]')
        this.PinCode = page.locator('//input[@id="shippingZipCodedefault"]')
        this.PhoneNumber = page.locator('//input[@id="shippingPhoneNumberdefault"]')
        //this.CheckBox = page.locator('//label[@class="custom-control-label"]')
        //this.CheckBox = page.locator('(//input[@type="checkbox"])[3]')
        this.Purchase = page.locator('//button[@class="btn btn-primary btn-block place-order submit-payment m-0"]')

        //RET_660
        this.NextPayment = page.locator('//button[@class="btn btn-save btn-block submit-shipping text-uppercase"]')
        this.ShippingAddressCheckBox = page.locator('//label[@for="isSameAddress"]')

        //RET_612
        this.ShippingForm = page.locator('(//h2[@class="card-header-custom"])[4]')
        //this.ErrorMessage = page.locator('//div[contains(text(),"Please fill out this field.")]')
        this.ErrorMessage = page.locator('//div[@id="defaultFirstName"]')
        this.ErrorInvalidPhone = page.locator('//div[@id="defaultTelephoneNumber"]')
        this.ErrorInvalidZipCode = page.locator('//div[@id="defaultZipCode"]')

        
   //RET_589
        this.categoryHoodies = page.locator('(//a[@id="hoodies"]//span[contains(text(),"HOODIES")])[1]')
        this.SubCategoryMensHoodies = page.locator('(//*[@id="hoodies_mens"])[1]')
        this.productCount = page.locator('//span[@class="product-count"]')
        this.productImage = page.locator('(//div[@class="image-container"])[1]')
        this.productNameLink  = page.locator('(//a[@class="link thesansb6_semibold"])[1]')
        this.pLPpage = page.locator('//div[@class="container search-results"]')
        this.pdpPage = page.locator('//div[@class="container product-detail product-wrapper"]')
         

         //RET_613
        this.SearchBox = page.locator('(//input[@placeholder="Search" and @role="combobox"])[1]')
        this.ItemKeyWordSubmit = page.locator('(//button[@name="search-button"])[1]')
        this.DoYouMean = page.locator('//div[contains(text(),"Do you mean?")]')
        this.SelectProduct = page.locator('(//div[@class="col-xs-12 col-sm-12"])[1]')
        this.SearchResult = page.locator('//div[@class="col-lg-8 nosearchresultsTag"]')
        this.ResultFor = page.locator('(//input[@class="form-control search-field"])[1]')
        this.ProductTitle = page.locator('(//div[@class="col-xs-12 col-sm-12"])[2]')
        this.GuitarShapedGrillSpatula = page.locator('//span[contains(text(),"Hard Rock Guitar Shaped Grill Spatula")]')
        this.vPath = page.locator('(//ol[@class="breadcrumb"])[1]')
        this.Category_PINS = page.locator('(//li[@class="breadcrumb-item"])[2]')
        this.vPLP = page.locator('//ol[@class="breadcrumb"]')
 

      //RET_614
      this.EditButton = page.locator('(//div[@class="card-header clearfix"]//button)[1]')
      //this.EditButton = page.locator('(//button[@aria-label="Edit Shipping"]')
      //this.EditButton = page.locator('((//button[@class="edit-button pull-right"])[1]')
      //this.EditButton = page.locator('((//button[@class="edit-button pull-right"])[1]')
        

      //RET_623
      this.vFirstName = page.locator('//label[@for="shippingFirstNamedefault"]')
      this.vLastName = page.locator('//label[@for="shippingLastNamedefault"]')
      this.vAddress1 = page.locator('//label[@for="shippingAddressOnedefault"]')
      this.vAddress2 = page.locator('//label[@for="shippingAddressTwodefault"]')
      this.vCountry = page.locator('//label[@for="shippingCountrydefault"]')
      this.vState = page.locator('(//label[@for="shippingStatedefault"])[3]')
      this.vCity = page.locator('//label[@for="shippingAddressCitydefault"]')
      this.vZipCode = page.locator('//label[@for="shippingZipCodedefault"]')
      this.vPhoneNumber = page.locator('//label[@for="shippingPhoneNumberdefault"]')
      this.ShippingMethodRadioButton = page.locator('(//div//span[@class="shipping-cost"])[1]')
      this.ShippingCharges = page.locator('//p[contains(text(),"$9.95")]')
      this.ShippingCharges1 = page.locator('(//span[contains(text(),"$9.95")])[5]')
      this.TotalEstimated = page.locator('//span[contains(text(),"$12.55")]')
      this.ShippingAddressBox = page.locator('//div[@class="card shipping-summary"]')
      this.PaymentMethod = page.locator('//div[@class="card payment-method"]')
      this.CreditCardRadioButton = page.locator('//div[@class="sfpp-payment-method-header sfpp-payment-method-header-card"]')
      //this.CardNumber = page.locator('(//input[@name="cardnumber"])[1]')
      //this.CardNumber = page.locator('//input[@value="4242 4242 4242 4242"]')
      //this.CreditCardNumber = page.locator('//input[@class="InputElement is-complete Input"]')
      //this.CreditCardNumber = page.locator('//input[@aria-label="Credit or debit card number"]')
      //this.CreditCardNumber = page.locator('(//input[@autocomplete="cc-number"])[1]')
      this.CreditCardNumber=page.locator('//input[@data-elements-stable-field-name="cardNumber"]')

      this.vExpirationDate = page.locator('//label[@class="sfpp-payment-method-card-expiry-label"]')
      this.ExpirationDate = page.locator('//input[@name="exp-date"]')
      this.vSecurityCode = page.locator('//label[@class="sfpp-payment-method-card-cvc-label"]')
      this.SecurityCode = page.locator('//input[@name="cvc"]')
      this.vPayPalRadioButton = page.locator('//div[@class="sfpp-payment-method-header sfpp-payment-method-header-paypal"]')
      this.PayPalRadioButton = page.locator('//input[@class="sfpp-payment-method-radio sfpp-payment-method-radio-paypal"]')

      //RET_661
      this.vSignIn = page.locator('//a[@aria-label="Login With Unity Account"]')
      this.vSighUp = page.locator('//a[@aria-label="Sign Up to a Unity Account"]')
      this.vUnityMember = page.locator('//p[@class="mb-1 unity-block-heading"]')
      this.SignIn = page.locator('//a[@aria-label="Login With Unity Account"]')
      this.vUnityWindow = page.locator('//div[@id="js-shr-title__login-title"]')
      this.searchItemf = page.getByRole('combobox', { name: 'Enter Keyword or Item No.' })

      //RET_631
      this.vShippingAddress = page.locator('//div[@class="card shipping-summary"]')
      this.vPaymentPage = page.locator('(//h2[contains(text(),"Payment")])[2]')
      this.vPPFirstName = page.locator('//label[@for="billingFirstName"]')
      this.vPPLastName = page.locator('//label[@for="billingLastName"]')
      this.vPPAddress1 = page.locator('//label[@for="billingAddressOne"]')
      this.vPPAddress2 = page.locator('//label[@for="billingAddressTwo"]')
      this.vPPCountry = page.locator('//label[@for="billingCountry"]')
      this.vPPState = page.locator('(//label[@for="billingState"])[3]')
      this.vPPCity = page.locator('//label[@for="billingAddressCity"]')
      this.vPPZipCode = page.locator('//label[@for="billingZipCode"]')
      this.vPPPhoneNumber = page.locator('//label[@for="phoneNumber"]')
      this.vPPEmailAddress = page.locator('//label[@for="email-guest"]')

      //RET_652 
      this.vYourBag = page.locator('//h1[@class="page-title-cart d-flex align-items-center justify-content-between"]')
      this.vItemCount = page.locator('//h2[@class="number-of-items"]')
      this.vItemName = page.locator('//div[@class="line-item-name text-capitalize"]')
      this.vItemImage = page.locator('//img[@alt="Messi Adult Fit Navy Hoodie"]')
      this.vCityMyBag = page.locator('//span[contains(text(),"NO CITY NAME")]')
      this.vQty = page.locator('(//select[@class="form-control quantity custom-select"])[1]')
      this.vItemPrice = page.locator('(//span[@class="value"])[6]')
      this.vItemTotal = page.locator('//div[@class="line-item-total-price cart-total-price"]')
      this.vHelplineNumber = page.locator('//a[@class="help-phone-number t-underline"]')
      this.vPromoCode = page.locator('//label[contains(text(),"Enter Promo Code")]')
      this.MyBagIcon = page.locator('(//div[@class="minicart"])[1]')
      this.ViewBag = page.locator('(//a[contains(text(),"View Bag")])[1]')
      this.ContinueShopping = page.locator('//a[@class="continue-shopping-link text-uppercase"]')
      this.vHomePage = page.locator('(//a[@title="Online Hard Rock Store Home"])[1]')
      this.CategoryTEES = page.locator('(//span[contains(text(),"TEES")])[1]')
      this.SubCategoryKidsTshirts = page.locator('(//a[@id="tees_kids"])[1]')
      this.ProductYouthClassicLogoTee = page.locator('(//div[@class="product-tile"])[1]')
      this.SelectCity = page.locator('//select[@id="city-1"]')
      
      

      //RET_1340
      this.vShippingAddressCheckBox = page.locator('//input[@id="isSameAddress"]')

      //RET_659
      this.vMiniCartIconQty = page.locator('(//div[@class="minicart-total"])[1]')
      this.EditButtonYourBag = page.locator('(//a[@title="Edit"])[1]')
      this.QuantityDropdown = page.locator('(//select[@id="quantity-1"])[1]')
      this.QuantityDropdown1 = page.locator('(//select[@id="quantity-1"])[2]')
      this.Quantity = page.locator('(//select[@id="quantity-1"])[1]')
      this.ReduceQuantity = page.locator('//select[@id="quantity-ddca999f031e8a787aa89fae35"]')

       //RET_1275
       this.closecookies = page.getByRole('button', { name: 'Close' });
       this.livechat = page.frameLocator('iframe[name="icChatButton"]').getByRole('button', { name: 'Live Chat' });
       this.chatoptiondropdown = page.frameLocator('iframe[name="icChat"]').getByLabel('Choose an option from the list').locator('svg');
       this.LC_option_benefits = page.frameLocator('iframe[name="icChat"]').getByLabel('Benefits');
       this.messageTextBoxLivechat = page.frameLocator('iframe[name="icChat"]').getByLabel('Please tell us how we can help');
       this.submitLC_Message = page.frameLocator('iframe[name="icChat"]').getByLabel('submit');
       this.endChat1 = page.frameLocator('iframe[name="icChat"]').getByRole('button', { name: 'End chat' });
       this.endChat2 = page.frameLocator('iframe[name="icChat"]').getByLabel('End Chat', { exact: true });
       this.closeChat =  page.frameLocator('iframe[name="icChat"]').getByLabel('CLOSE CHAT');  
       this.NEW = page.getByRole('button', { name: 'NEW' });
       this.validateLiveChat = page.frameLocator('iframe[name="icChat"]').locator('//h2[@title="Live Chat"]');

       //RET_584
       this.showingItems = page.locator('//div[contains(text(),"showing")]');

       //RET_1286
       this.categoryWOMEN = page.locator('(//a[@id="women"])[1]');
       this.subcategoryJOGGERSETS = page.locator('(//li//a[contains(text(), "Jogger Sets") and @class="dropdown-link"])[1]');
       this.validatePDP_PATH = page.locator('//li[@class="breadcrumb-item"]//a[@href="/women/jogger-sets"]')
       this.HOMEPDPPATH = page.locator('//li[@class="breadcrumb-item"]//a[@href="/" and contains(text(), "Home")]')
       this.WOMENcategoryPDPPATH = page.locator('//li[@class="breadcrumb-item"]//a[@href="/women" ]')
       this.JOGGERSETsubcategoryPDPPATH = page.locator('//li[@class="breadcrumb-item"]//a[@href="/women/jogger-sets"]')
       //RET_1260
      this.vFilteredItems = page.locator('//div[contains(text(),"showing")]')
       
      //RET_484
      this.searchKEYWORD = page.locator('(//button[@aria-label="Submit search keywords"])[1]')
      this.validateNo_of_items = page.locator('//span[@class="product-count"]')
      this.validateNo_of_items_rightSide = page.locator('//span[@class="product-count"]')
      this.femaleCheckBox = page.locator('(//div[@id="refinement-gender"]//button//i[@class="check-icon"])[1]')
      this.ClearAll_Reset = page.locator('(//button[@class="reset btn btn-link text-uppercase"])[1]')
     
      //RET_575
      this.QuickView = page.locator('(//div//img[@class="eye-icon"])[1]')
      this.Product_PLP = page.locator('(//div[@class="pdp-link"])[1]')
      this.navigateImages = page.locator('//span[@class="slick-next slick-arrow-rounded slick-arrow"]')
      this.selectSizeLarge = page.getByRole('button', { name: 'L', exact: true })
      this.statusAvailibility =  page.locator('//div[contains(text(), "In Stock")]');
      this.ViewFullProductDetails = page.getByRole('link', { name: 'VIEW FULL PRODUCT DETAILS' })
      
      //RET_655
      this.EditOnYourBag = page.locator('(//a[@title="Edit"])[1]')
      this.vModalPopUp = page.locator('//h1[@class="product-name"]')
      this.closeModalPopUp = page.locator('//span[@class="cross-icon"]')
      this.vShippingMethodRadioBox = page.locator('(//span[contains(text(),"USA Continental, Territories, and Military Address Shipping")])[1]')
      this.BackToBag = page.locator('//a[@class="text-uppercase back-to-dash"]')
      this.PromoCode = page.locator('//input[@id="couponCode"]')
      this.ApplyButton = page.locator('//button[@class="btn btn-block promo-code-btn d-flex align-items-center"]')
      this.vInvalidPromoCodeMesage = page.locator('//div[@class="coupon-error"]')

      //RET_609
      this.enterUnityLoginId = page.frameLocator('#login-iframe').locator('#usernameUserInput');
      this.enterUnityPassword = page.frameLocator('#login-iframe').locator('#password');
      this.unityLogin = page.frameLocator('#login-iframe').getByRole('button', { name: 'Log in' });
      this.hardRockLink = page.locator('#navbarToggle').getByLabel('Tap to go to HardRock.com')
      this.rockShop = page.getByRole('link', { name: 'Rock Shop' })
      this.loginUnity = page.getByRole('link', { name: 'Log in | Join' })

   }

   //RET_609
   async goToUnityByHardrock(){
      await this.page.goto('https://www.unitybyhardrock.com/');
  }
  async clickLoginOnUnityPage() {
      await this.loginUnity.click();
  }
  async enterLoginIdAndPassword() {
      await this.enterUnityLoginId.click();
      await this.enterUnityLoginId.fill('500236845');
      await this.enterUnityPassword.click();
      await this.enterUnityPassword.fill('Password01@');
  }
  async enterLoginIdAndPassword1() {
   await this.enterUnityLoginId.click();
   await this.enterUnityLoginId.fill('500264287');
   await this.enterUnityPassword.click();
   await this.enterUnityPassword.fill('Password01@');
}
async enterLoginIdAndPassword2() {
   await this.enterUnityLoginId.click();
   await this.enterUnityLoginId.fill('500264297');
   await this.enterUnityPassword.click();
   await this.enterUnityPassword.fill('Password01@');
}
  async clickSubmitLogin()    {
      await this.unityLogin.click();
     
      
  }
      async clickonHardRockLinkOnUnityPage(){
        await this.page.goto('https://www.unitybyhardrock.com/dashboard');
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.locator('#navbarToggle').getByLabel('Tap to go to HardRock.com').click();
        const page1 = await page1Promise;
        const page2Promise = page1.waitForEvent('popup');
        await page1.getByRole('link', { name: 'Rock Shop' }).click();
        const page2 = await page2Promise;
      }

   //RET_655
   
   async clickOnEditLinkOnYourBag(){
      await this.EditOnYourBag.click();
   }
   async validateModalPopUpDesplayedWithProductDetails(){
      await expect(this.vModalPopUp).toBeVisible();
   }
   async closeModalPopUpDesplayedWithProductDetails(){
      await this.closeModalPopUp.click();
   }
   async validateShippingMethodRadioBoxWithCharges(){
      await expect(this.vShippingMethodRadioBox).toBeVisible();
   }
   async clickOnBackToBag(){
      await this.BackToBag.click();
   }
   async enterPromoCode(PromoCode){
      await this.PromoCode.fill(PromoCode);
   }
   async clickOnApplyButton(){
      await this.ApplyButton.click();
   }
   async validateMessageCouponCanNotBeAddedToYourCartifPromoCodeIsInvalid(){
      await expect(this.vInvalidPromoCodeMesage).toBeVisible();
   }

      //RET_1172
      async clickOnPaypalMiniCartButton(){
         await this.Product_PLP.hover();
      }

      //RET_574
      async hoverOverSearchedProduct(){
         await this.Product_PLP.hover();
      }
      async clickonQuickViewIcon(){
         await this.QuickView.click();
      }
      async navigateImagesofProductInQuickViewMode(){
         await this.navigateImages.click();
         await this.navigateImages.click();
      }
      async selectProductSizeInQuickVIewMode(){
         await this.selectSizeLarge.click();
      }
      async ValidateTextforavailability(){
         await this.page.waitForTimeout(6000);
         await expect(this.statusAvailibility).toBeVisible();
      }
      async ClickOnViewFullProductDetailsLink(){
         await this.ViewFullProductDetails.click();
      }
      //RET_485
      async clickonSortBy(){
         await this.sortBy.click();
         }
         async clickonNewArrivals(){
            await this.newArrivals.click();
            }
            async clickonSortByHighToLow(){
               await this.sortHighLow.click();
               }
               async clickonSortByLowToHigh(){
                  await this.sortLowHigh.click();
                  }
                  async validateItemsAreSortedHighToLow(){
                     await this.sortHighToLow80.click();
                     await this.sortHighToLow70.click();
                  }
                  async validateItemsAreSortedLowToHigh(){
                     await this.sortLowToHigh20.click();
                     await this.sortLowToHigh24.click();
                  }

      //RET_484
      async clickonsearchKEYWORD(){
         await this.searchKEYWORD.click();
         }
      async validateNumberofItemsDisplayedOntheLeft(){
         await expect(this.validateNo_of_items).toBeVisible();
      }
      async validateNumberofItemsDisplayedOntheRight(){
         await expect(this.validateNo_of_items_rightSide).toBeVisible();
      }
      async clickandselectfemaleGenderCheckbox(){
         await this.femaleCheckBox.click();
      }
      async clearAlltheselectionandReset(){
         //await this.page.pause();
         await this.page.waitForTimeout(6000);
         await this.ClearAll_Reset.click();
      }

      //RET_497
      async clickonNextImageArrow(){
         await this.nextImage.click();
         }
         async clickonPreviousImageArrow(){
            await this.previousImage.click();
            }
            async validate1stImageIsDisplayed(){
               await expect(this.firstImage).toBeVisible();
               }
               async validate6thImageIsDisplayed(){
                  await expect(this.sixthImage).toBeVisible();
                  }
                  async validate2ndImageIsDisplayed(){
                     await expect(this.secondImage).toBeVisible();
                     }
                     async validate3rdImageIsDisplayed(){
                        await expect(this.thirdImage).toBeVisible();
                        }
                        async validate4thImageIsDisplayed(){
                           await expect(this.forthImage).toBeVisible();
                           }
                           async validate5thImageIsDisplayed(){
                              await expect(this.fifthImage).toBeVisible();
                              }

   //RET_584
   async validateTotalNoOfItemIsDisplayed(){
      await expect(this.showingItems).toBeVisible();
      }
   //RET_1286
   async hoveroncategoryWOMEN(){
         await this.categoryWOMEN.hover();
        //await this.page.pause()
         }
   async clickonsubcategoryJOGGERSETS(){
         await this.subcategoryJOGGERSETS.click();
         }
   async validatePDP_Path_Home_Category_SubCategory(){
         await expect(this.validatePDP_PATH).toBeVisible();
         }
   async validate_HOME_is_clickable(){
         await expect(this.HOMEPDPPATH).toBeEnabled();
   }
   async validate_WOMEN_Category_PDP_PATH_is_clickable(){
      await expect(this.WOMENcategoryPDPPATH).toBeEnabled();
   }
   async validate_JOGGERSET_subcategory_is_clickable(){
      await expect(this.JOGGERSETsubcategoryPDPPATH).toBeEnabled();
   }
        

   //RET_1275
   async close_Cookies(){
      await this.closecookies.click();
   }
   async NEW_tab_click() {
      
      await this.NEW.click();
   }
   async open_live_chat()  {
      await this.livechat.click();
   }
   async select_livechat_option_from_dropdown(){
      
      await this.chatoptiondropdown.click();
      await this.LC_option_benefits.click();
   }
   async type_message_in_live_chat_textbox(chatmessage) {
      
      await this.messageTextBoxLivechat.click();
      await this.messageTextBoxLivechat.type(chatmessage);
   }
   async submit_chat_message() {
      await this.submitLC_Message.click();
   }
   async validate_LiveChat_is_Active()  {
    // await this.page.pause();
    await this.page.waitForTimeout(6000);
      //await expect(this.livechat).toBeVisible();
      await expect(this.validateLiveChat).toBeVisible();
   }
   async end_livechat_and_close(){
      await this.endChat1.click();
      await this.endChat2.click();
      await this.closeChat.click();

   }

   //RET_658
   async validateCartQuantityIs1(){
   await expect(this.cartQuantity1).toBeVisible(); 
}
async selectCartQuantity2(){
   await this.selectCartQuantity.selectOption('2');
}
async selectCartQuantity1(){
   await this.selectCartQuantity.selectOption('1');
}
async validateProductImageIsDisplayed(){
   await expect(this.productImageInCart).toBeVisible(); 
}
async validateEstimatedTotalIsDisplayed(){
   await expect(this.estimatedTotal).toBeVisible(); 
}
async validateSubTotalIsDisplayed(){
   await expect(this.subTotal).toBeVisible(); 
}
async validateUpdatedEstimatedTotalIsDisplayed(){
   await expect(this.estimatedTotal2).toBeVisible(); 
}
async validateUpdatedSubTotalIsDisplayed(){
   await expect(this.subTotal2).toBeVisible(); 
}
async validateShippingIsDisplayed(){
   await expect(this.shippingAmount).toBeVisible(); 
}

//RET_1148
      async clickOnPayPalRadioButton(){
         await this.payPalRadioButton.click
      }


   //RET_659
      async validateMiniCartIconQty_1(){
         await expect(this.vMiniCartIconQty).toBeVisible(); 
      }
      async validateMiniCartIconQtyIncreased_3(){
         await expect(this.vMiniCartIconQty).toBeVisible(); 
      }
      async clickOnEditButtonOnYourBag(){
         await this.page.waitForTimeout(3000);
         await this.EditButtonYourBag.click();
         await this.page.waitForTimeout(3000);
      }
      async clickOnQuantityDropdown(){
         await this.page.waitForTimeout(3000);
         await this.QuantityDropdown1.click();
         await this.page.waitForTimeout(3000);
      }
      async selectQuantity(Quantity){
         await this.page.waitForTimeout(3000);
         await this.Quantity.selectOption(Quantity);
         await this.page.waitForTimeout(3000);
      } 
      

   //RET_1340

   async validateSameAsShippingAddressCheckBoxDisplayedAndNotSelected(){
      await expect(this.vShippingAddressCheckBox).toBeVisible()   
   }  

   //RET_1259
   async clickOnSize(){
      await this.plpSizeFilter.click();
   }

   async validateSizeFilters(){
      await this.page.waitForTimeout(3000);
      await expect(this.plpSizeXS).toBeVisible();
      await expect(this.plpSizeS).toBeVisible();
      await expect(this.plpSizeM).toBeVisible();
      await expect(this.plpSizeL).toBeVisible();
      await expect(this.plpSizeXL).toBeVisible();
      await expect(this.plpSizeXXL).toBeVisible();
      await expect(this.plpSizeXXXL).toBeVisible();
      await this.page.waitForTimeout(3000);
   }

   //RET_1260
   async clickOnPLPSize(){
      await this.plpSizeFilter.click();
   }

   async validatePLPSizeFilters(){
      await expect(this.plpSizeXS).toBeVisible();
      await expect(this.plpSizeS).toBeVisible();
      await expect(this.plpSizeM).toBeVisible();
      await expect(this.plpSizeL).toBeVisible();
      await expect(this.plpSizeXL).toBeVisible();
      await expect(this.plpSizeXXL).toBeVisible();
      await expect(this.plpSizeXXXL).toBeVisible();
   }
   async selectPLPSizeXS(){
      await this.plpSizeXS.click();
      await this.page.waitForTimeout(3000);
   }

   //RET_1261
   async clickOnMessiAdultFitNavyHoodie(){
      await this.messiAdultFitNavyHoodie.click();
   }
   async clickOnDiscoRoyalBlueAdultHoodie(){
      await this.discoRoyalBlueAdultHoodie.click();
   }

   async validateItemIsAddedToCart(){
      await this.page.waitForTimeout(4000);
      await expect(this.messiAdultFitNavyHoodie).toBeVisible();
      // await this.page.waitForTimeout(600000);
   }
   async clickOnCartLogo(){
      await this.pdpCart.click();
   }
   async clickOnPDPAddToBag(){
      await this.pdpAddToBag.click();
   }
   async selectSizeLFromPDP(){
      await this.pdpSizeL.click();
   }
   async validatePDPSizesAreDisplayed() {
      await this.page.waitForTimeout(6000);
      await expect(this.pdpSizeS).toBeVisible();
      await expect(this.pdpSizeM).toBeVisible();
      await expect(this.pdpSizeL).toBeVisible();
      await expect(this.pdpSizeXL).toBeVisible();
      await expect(this.pdpSizeXXL).toBeVisible();
     }


   //RET_652

      async validateYourBagDisplayed(){
         await expect(this.MyBag).toBeVisible();
      }
      async validateItemCount(){
         await expect(this.vItemCount).toBeVisible();
      }
      async validateItemName(){
         await expect(this.vItemName).toBeVisible();
      }
      async validateItemImage(){
         await this.page.waitForTimeout(2000);
         await expect(this.vItemImage).toBeVisible();
         await this.page.waitForTimeout(2000);
      }
      async validateCityMyBag(){
         await expect(this.vCityMyBag).toBeVisible();
      }
      async validateQty(){
         await expect(this.vQty).toBeVisible();
      }
      async validateItemPrice(){
         await this.page.waitForTimeout(3000);
         await expect(this.vItemPrice).toBeVisible();
         await this.page.waitForTimeout(3000);

      }

      async validateItemTotal(){
         await expect(this.vItemTotal).toBeVisible();
      }
      async validateHelplineNumber(){
         await expect(this.vHelplineNumber).toBeVisible();
      }
      async validateEnterPromoCode(){
         await expect(this.vPromoCode).toBeVisible();
      }
      async hoverOnMyBagIcon(){
         await this.MyBagIcon.hover();
      }
      async clickOnViewBag(){
         await this.page.waitForTimeout(3000);
         await this.ViewBag.click();
         await this.page.waitForTimeout(3000);
      }
      async clickOnContinueShopping(){
         await this.ContinueShopping.click();
      }
      async validateHomePageDisplayed(){
         await expect(this.vHomePage).toBeVisible();
      }
      async hoverOnCategoryTEES(){
         await this.CategoryTEES.hover();
      }
      async clickOnSubCategoryKidsTshirts(){
         await this.SubCategoryKidsTshirts.click();
      }
      async clickOnProductYouthClassicLogoTee(){
         await this.ProductYouthClassicLogoTee.click();
      }
      async selectCity(City){
         await this.SelectCity.selectOption(City);
      }
     async clickOnSizeSInPDPScreen() {
      await this.page.waitForTimeout(8000);
        await this.pdpSizeS.click();
        await this.page.waitForTimeout(8000);
      }
 






      //RET_631
      async validateByDefaultShippingAddressSelectedAsBillingAddress(){
         await expect(this.vShippingAddress).toBeVisible();
      }
      async validatePaymentPage(){
         await expect(this.vPaymentPage).toBeVisible();
      }
      async validatePaymentPageFirstName() {
         await expect(this.vPPFirstName).toBeVisible();
      }
      async vailidatePaymentPageLastName() {
         await expect(this.vPPLastName).toBeVisible();
      }
      async vailidatePaymentPageAddress1() {
         await expect(this.vPPAddress1).toBeVisible();
      }
      async vailidatePaymentPageAddress2() {
         await expect(this.vPPAddress2).toBeVisible();
      }
      async vailidatePaymentPageCountry() {
         await expect(this.vPPCountry).toBeVisible();
      }
      async vailidatePaymentPageState(){
         await expect(this.vPPState).toBeVisible();
      }
      async validatePaymentPageCity(){
         await expect(this.vPPCity).toBeVisible();
      }
      async validatePaymentPageZipCode(){
         await expect(this.vPPZipCode).toBeVisible();
      }
      async validatePaymentPagePhoneNumber(){  
          await expect(this.vPPPhoneNumber).toBeVisible();
      }
      async validatePaymentPageEmailAddress(){
         await expect(this.vPPEmailAddress).toBeVisible();
      }
      //RET_661
      async validateAlreadyUnityMemberDisplayedOnCheckOutPage(){
         await expect(this.vUnityMember).toBeVisible();
      }
      async validateSignInDisplayedOnCheckOutPage(){
         await expect(this.vSignIn).toBeVisible();
      }
      async validateSighUpDisplayedOnCheckOutPage(){
         await expect(this.vSighUp).toBeVisible();
      }
      
      async clickOnSignIn(){
         await this.SignIn.click();
      }
      async validateWindowUnityCredentialsIsDisplayed(){
         await this.page.waitForTimeout(3000);
         await expect(this.vUnityWindow).toBeVisible();
         await this.page.waitForTimeout(3000);

      }
      //RET_623
   async validateFirstName() {
      await expect(this.vFirstName).toBeVisible();
   }
   async vailidateLastName() {
      await expect(this.vLastName).toBeVisible();
   }
   async vailidateAddress1() {
      await expect(this.vAddress1).toBeVisible();
   }
   async vailidateAddress2() {
      await expect(this.vAddress2).toBeVisible();
   }
   async vailidateCountry() {
      await expect(this.vCountry).toBeVisible();
   }
   async vailidateState(){
      await expect(this.vState).toBeVisible();
   }
   async validateCity(){
      await expect(this.vCity).toBeVisible();
   }
   async validateZipCode(){
      await expect(this.vZipCode).toBeVisible();
   }
   async validatePhoneNumber(){  
       await expect(this.vPhoneNumber).toBeVisible();
   }
   async validateShippingMethodRadioBoxIsPopulatedWithCharges(){
      await this.page.waitForTimeout(5000);
       await expect(this.ShippingMethodRadioButton).toBeVisible();
   }
   async validateShippingChargesIsAddedToTotalPrice(){
      await this.page.waitForTimeout(5000);
      await expect(this.TotalEstimated).toBeVisible();
      await this.page.waitForTimeout(5000);
         
   }
      async validateShippingChargesIsAdded(){
         //await this.page.pause();
         await this.page.waitForTimeout(4000);
         await expect(this.ShippingCharges1).toBeVisible();
         await this.page.waitForTimeout(4000);
         
      }
      async validateShippingChargesIsAdded1(){
         //await this.page.pause();
         await this.page.waitForTimeout(4000);
         await expect(this.ShippingCharges1).toBeVisible();
         await this.page.waitForTimeout(4000);
         
      }
      async validateShippingAddressBox(){
         await this.page.waitForTimeout(3000);
         await expect(this.ShippingAddressBox).toBeVisible();
         
      }
      async validatePaymentMethodIsDisplayed(){
         await this.page.waitForTimeout(3000);
         await expect(this.PaymentMethod).toBeVisible();
         await this.page.waitForTimeout(3000);
      }
      async validateCreditCardRadioButtonIsDisplayed(){
         await expect(this.CreditCardRadioButton).toBeVisible();
        
      }
      //async enterCreditCardNumber(CardNumber){
         //await this.page.waitForTimeout(6000);
         //await this.CardNumber.fill(CardNumber);
         //await this.page.waitForTimeout(6000);
      //}
      async enterCreditCardNumber(CardNumber){
         await this.page.waitForTimeout(3000);
         await this.CreditCardNumber.fill(CardNumber);
         await this.page.waitForTimeout(9000);
      }
 
      async validateExpirationDate(){
         await expect(this.vExpirationDate).toBeVisible();
      }
      async enterExpirationDate(ExpirationDate){
         await this.page.waitForTimeout(3000);
         await this.ExpirationDate.fill(ExpirationDate); 
         await this.page.waitForTimeout(3000);
      }
      async validateSecurityCode(){
         await expect(this.vSecurityCode).toBeVisible()
      }
      async enterSecurityCode(SecurityCode){
         await this.SecurityCode.fill(SecurityCode);
      }
      async validatePayPalRadioButtonIsDisplayed(){
         await expect(this.vPaypalRadioButton).toBeVisible();
      }
      async clickOnPayPalRadioButton(){
         await this.PayPalRadioButton.click();
      }


      //RET_614
      async clickOnEditButtonToUpdateShippingAddress(){
         await this.page.waitForTimeout(8000);
      await this.EditButton.click();
      await this.page.waitForTimeout(8000);
  
         }
         async clearFirstName(){
            await this.FirstName.clear();
         }
 
      

    //RET_613
    async clickOnItemToSearchBox(){
      await this.SearchBox.click();
      await this.page.waitForTimeout(3000);
    }
    async enterItemKeyWordToSearch(KeyWord){
      await this.ItemKeyWordSubmit.click();
      await this.SearchBox.fill(KeyWord)

    }
    async validateDoYouMeanSuggestion(){
      await this.page.waitForTimeout(3000);
      await expect(this.DoYouMean).toBeVisible();
      await this.page.waitForTimeout(3000);

   }
   async selectProductUnderDoYouMeanSuggestion(){
      await this.SelectProduct.click();
   }
   async validateSearchResultDisplayed(){
      await expect(this.SearchResult).toBeVisible();
   }
   async validateResultBasedOnKeywordResultFor(){
      await expect(this.ResultFor).toBeVisible();
   }
   async validateProductTitle(){
      await expect(this.ProductTitle).toBeVisible();
   }
   async clickOnGuitarShapedGrillSpatulaDisplaycaseUnderProductTitle(){
      await this.GuitarShapedGrillSpatula.click();
   }
   async validateProductDetailPageDisplayed(){
     await expect(this.pdpPage).toBeVisible(); 
   }
   async validateContainCategoryBrandDisplayedWithImage(){
      await expect(this.vPath).toBeVisible(); 
    }
    async clickOnSearchResultUnderCategory_PINS(){
      await this.page.waitForTimeout(6000);
      await this.Category_PINS.click();
      await this.page.waitForTimeout(6000);
   }

 async validateProductListingPageDisplayed(){
   await expect(this.vPLP).toBeVisible();
 }



      

         //RET_589

         async hoverOnCategory_Hoodies()    {
            await this.page.waitForTimeout(3000);
            await this.categoryHoodies.hover();
         }
         async clickOnSubCategory_MensHoodies()    {
            await this.page.waitForTimeout(3000);
            await this.SubCategoryMensHoodies.click();
         }
         async validatePLP()    {
            await expect(this.pLPpage).toBeVisible();
         }
         async validateProductCountOnTopLeft()    {
            await expect(this.productCount).toBeInVisible();
         }
         async clickProductImage()    {
            await expect(this.productImage).toBeInVisible();
         }
         async clickProductNameLink()    {
            await expect(this.productNameLink).toBeInVisible();
         }
         async vaidatePDPPage()    {
            await expect(this.pdpPage).toBeInVisible();
         }

         //RET_663
         async hoverOnCategoryPINS(){
            await this.CategoryPINS.hover();
         }
         async clickOnSubCategoryOnlineExclusivePins(){
            await this.SubCategoryOnlineExclusivePins.click();
         }
         async clickOnProductMessiLimitedEditionPin(){
            await this.ProductMessiLimitedEditionPin.click();
         }
         async clickOnAddToBag(){
            await this.AddToBag.click();
         }
         async clickOnMyBag(){
            await this.MyBag.click();
         }
        async clickOnCheckOut(){
         await this.page.waitForTimeout(3000);
         await this.CheckOut.click();
         await this.page.waitForTimeout(3000);
         }
        async validateCheckOutPageDisplayed(){
            await expect(this.CheckOutPage).toBeVisible();
         }
        async enterEmailAddress(Email) {
         await this.page.waitForTimeout(3000);
            await this.emailAddress.fill(Email);
            await this.page.waitForTimeout(3000);
         }
        async clickOnContinueToCheckOut(){
            await this.ContinueCheckOut.click();
         }
          async validateCustomerInformationOnCheckOutPageAndEnterDetails(){
            await expect(this.customerInformation).toBeVisible();
          }
         async enterFirstName(FirstName){
            await this.FirstName.fill(FirstName);  
         }
         async enterLastName(LastName){
            await this.LastName.fill(LastName);
         }
         async enterAddress1(Address1){
            await this.Address1.fill(Address1);
         }
         async enterAddress2(Address2){
            await this.Address2.fill(Address2);
         }
         async selectCountry(Country){
           await this.Country.selectOption(Country);
         }
         async selectState(State){
            await this.page.waitForTimeout(3000);
            await this.State.selectOption(State);
            await this.page.waitForTimeout(3000);
         }
         async selectStateToEdit(Stateedit){
            
            await this.page.waitForTimeout(2000);
            await this.StateEdit.selectOption(Stateedit);
         }

         async enterState(state){
            await this.state1.fill(state);
         }
         async enterCity(City){
            await this.City.fill(City);
         }
         async enterPinCode(PinCode){
            await this.PinCode.fill(PinCode);
         }
         async enterPhoneNumber(PhoneNumber){
            await this.PhoneNumber.fill(PhoneNumber);
           
         }
         //async checkOnCheckBox(){
            //await this.page.waitForTimeout(2000);
            //await this.CheckBox.click();
            //await this.page.waitForTimeout(2000);
         //}
         async clickOnPurchaseTab(){
            await this.page.waitForTimeout(1000);
            await this.Purchase.click();
         }

         //RET_660
         async clickOnNextPayment(){
            await this.NextPayment.click();
         }
         async clickOnSameAsShippingAddressCheckBox(){
            await this.page.waitForTimeout(2000);
            await this.ShippingAddressCheckBox.click();
            await this.page.waitForTimeout(2000);
         }
          
       //RET_612
       async validateShippingForm(){
         await expect(this.ShippingForm).toBeVisible
       }
       async validatErrorMessageWhenMandatoryFieldsAreNotFilled(){
         await this.page.waitForTimeout(2000);
         await expect(this.ErrorMessage).toBeVisible();
         await this.page.waitForTimeout(2000);
       }
       async validateErrorMessageWhenPhoneNumberIsNotBetween10to20Characters(){
         await expect(this.ErrorInvalidPhone).toBeVisible();
       }
       async validateErrorMessageWhenInvalidZipCode(){
         await expect(this.ErrorInvalidZipCode).toBeVisible();
       }
    

      //RET_
      async enterItemToSearch(ItemName) {
        await this.itemSearchField.click();
        await this.itemSearchField.fill(ItemName);
        await this.itemSearchField.press('Enter');
      }
      async enterItemName(ItemName) {
         await this.searchItemf.fill('nes');
       }

       async validateNoSearchResult(){
         await expect(this.noSearchResultLabel).toBeVisible();
       }
       async clickOnSearchSuggestion(){
         await this.searchSuggestion.click()
       }
       async validateSuggestedProductPDP(){
         await expect(this.suggestedProductPDP).toBeVisible();
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

    async clickOnPayPal1() {
        await this.payPal1.click();
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
      //   await expect(this.CustomerInformation).toBeVisible();

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
        await this.page.waitForTimeout(2000);
        await this.ShippingAddressCheckBox.click();
        await this.page.waitForTimeout(3000);
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
