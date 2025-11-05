// THIS PAGE CONTAINS ALL ELEMENT AND FUNCTION FROM THE PLAYER SEARCH PAGE

//import { expect } from "@playwright/test"
const {expect } = require("@playwright/test")
const testData= JSON.parse(JSON.stringify(require("../testData.json")))
exports.playerSearchSteps= class  playerSearchSteps{

    constructor(page){
        this.page=page

        /////////////////////////////// Player Search Object Repository ///////////////////////////////////////////// /

        this.playerID_textBox=page.locator('#ctl00_txtPlayerId')
        //this.patronSearch_btn=
        //this.eventAndOfferSearch_btn=
        // this.lastName_textBob=
        // this.firstName_textBox=
        // this.birthDay_textBox= 
        // this.caledar_icon=
        this.search_btn= page.getByRole('button', { name: 'Search', exact: true })
        // this.email_textBox=
        // this.city_textBox=
        // this.state_textBox=
        // this.county_textBox=
        // this.selectProperty_dropDown=

        ///////////////////////// player search Object Repository/////////////////////////////////////////////////////
        // this.playerInfo_Tab=
        // this.trips_Tab=
        // this.tierHistory_Tab=
        // this.tierCreditsEarnings_Tab= 
        
        this.DiscrationaryComp_Tab = page.getByText('Discretionary Comps')
        
        
        
        ////////////////////////////////////Object Repo for Discrationany Comp Object Repository/////////////////////////////////////
        this.voidableDComp_X = page.frameLocator('#ifrContent').getByRole('button', { name: 'Submit' });
        this.viewCompDetail_Btn = page.frameLocator('#ifrContent').getByRole('button', { name: 'View Comp Details' })
        this.redeemComp_Btn = page.frameLocator('#ifrContent').getByRole('button', { name: 'Reddem' })
        this.voidComp_Btn =page.frameLocator('#ifrContent').getByRole('button', { name: 'Void' }) 
        this.cancelComp_Btn = page.frameLocator('#ifrContent').getByRole('button', { name: 'Cancel' })
        this.validationComment_Text = page.frameLocator('#ifrContent').locator('#wdwVoid_tmpl_TxtAuthComment')
        this.validationOK_Btn = page.frameLocator('#ifrContent').getByRole('button', { name: 'OK' }) 
        this.validationDiscVoidedOK_Btn =page.frameLocator('#ifrContent').getByRole('button', { name: 'OK' }) 
        this.CompStatus_Btn = page.frameLocator('#ifrContent').getByText('Status:')
        this.password_text = page.frameLocator('#ifrContent').locator('#wdwVoid_tmpl_TxtAuthorisationPwd')

        //////////////////////////////////// CommPreferences Object Repository/////////////////////////////////////////
        this.commPreferences_btn=page.getByText('Comm Preferences')
        this.contactInformation_tab=
        this.globalPreferences_tab=
        this.locationPreferences_tab=
        this.accountSettings_tab=page.frameLocator('#ifrContent').getByRole('button', { name: 'Account Settings' })
      

        ////////////////////////////////////Account Setting Object Repository////////////////////////////////
        this.onlineAccountSettings=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Online Account Settings', exact: true }).locator('div')
        this.onlineAccountCreated_link=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Online Account Created', exact: true }).locator('div')
        this.accountActivated_link=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Account Activated', exact: true }).locator('div')
       // this.accountNotlocked_Status= page.locator('#grdOnlineAccountSettings_it0_3_lblDisplayText')
       this.accountNotlocked_Status=page.frameLocator('#ifrContent').getByText('Account Not Locked')
       
      // page.frameLocator('#ifrContent').getByRole('link', { name: 'Account Not Locked' })
        this.accountLocked_Status= page.locator('#grdOnlineAccountSettings_it0_3_lblDisplayText')
        
        //this.resetPassword_link=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Reset Password', exact: true }).locator('div')
        this.resetPassword_link=page.frameLocator('#ifrContent').getByRole('link', { name: 'Reset Password' })
 

        this.accountNotLock_link=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Account Not Locked', exact: true }).locator('div')
        this.deleteAccount_link=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Delete Account', exact: true }).locator('div')
       // this.disableAccount_link=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Disable Account', exact: true }).locator('div')
        this.disableAccount_link=page.frameLocator('#ifrContent').getByRole('link', { name: 'Disable Account' })


        //this.enableAccount_link=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Enable Account', exact: true }).locator('div')
        this.enableAccount_link = page.frameLocator('#ifrContent').getByRole('link', { name: 'Enable Account' })


        this.unlockAccount_link=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Unlock Account', exact: true }).locator('div')
        this.resetPassword_PopUSend=page.frameLocator('#ifrContent').getByRole('button', { name: 'Send' })
        this.closeUnlockAccount_Message=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Close', exact: true }).locator('div')
        this.disableAccount_PopUP= page.frameLocator('#ifrContent').getByRole('button', { name: 'Disable' })
        this.anableAccount_PopUP= page.frameLocator('#ifrContent').getByRole('button', { name: 'Enable' })
        this.closeDisableAccount_Popup= page.frameLocator('#ifrContent').getByRole('button', { name: 'Close' })
        this.closeAnableAccount_PopUp = page.frameLocator('#ifrContent').getByRole('button', { name: 'Close' })

        
        this.resetPassword_PopUMessage=page.frameLocator('#ifrContent').getByRole('button', { name: 'Close' })


        this.activateOnlineAccount_link = page.frameLocator('#ifrContent').getByRole('cell', { name: 'Activate Online Account', exact: true }).locator('div')
        this.resendActivation_link = page.frameLocator('#ifrContent').getByRole('cell', { name: 'Resend Activation Link', exact: true }).locator('div')
        this.resendCreatePassword_Email = page.frameLocator('#ifrContent').getByRole('cell', { name: 'Resend Create Password Email', exact: true }).locator('div')
      //////////////////////////////////////ISSUE COMP Validation Amount Object Repository ////////////////////////////////////////////////////
        
        this.enterUserID_Txt= 
        this.enterPassword_Txt=
        this.enterAuthComment_Txt= 
        this.selectCompType_select = 
        this.enterCompCount_Txt = 
        this.iSSUECOMPValue_Btn = 
        this.issueComp_Btn = page.frameLocator('#ifrContent').getByRole('button', { name: 'Issue Comp' });

        ////////////////////////////////////////////////////Patron Dashboard Object Repository/////////////////////////////////////////
        this.star_icon=  page.frameLocator('#ifrContent').getByText('Star', { exact: true }) 
        this.icon_icon= page.frameLocator('#ifrContent').getByText('Icon', { exact: true }) 
        this.legend_icon= page.frameLocator('#ifrContent').getByText('Legend', { exact: true }) 
        this.xCard_icon= page.frameLocator('#ifrContent').getByText('Legend', { exact: true }) 

        this.bouncedStatusTriagle_icon= page.frameLocator('#ifrContent').getByText('Triangle', { exact: true }) 
        this.removeHardBouncedStatus_Button= page.frameLocator('#ifrContent').getByText('Remove Triangle', { exact: true }) 
    
        ////////////////////////////////Global Preferences Object Repository////////////////////////////////////////////////////////////////
        this.globalPreferences_Tab = page.frameLocator('#ifrContent').getByRole('button', { name: 'Global Preferences' })
        
        this.toggleGlobalEmailDirectMailUnsubscribe_Btn= page.frameLocator('#ifrContent').getByRole('cell', { name: 'Global Email & Direct Mail Unsubscribe ', exact: true }).locator('label span')
        this.toggleUnsubscribeFromAllEmail_Btn=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Unsubscribe from All Email', exact: true }).locator('label span')
        this.yesUnsubscribeFromAllEmail_PopUp=   page.frameLocator('#ifrContent').getByRole('button', { name: 'YES' })
        this.noUnsubscribeFromAllEmail_PopUp=   page.frameLocator('#ifrContent').getByRole('button', { name: 'NO' })
        this.closeUnsubscribeFromAllEmail_PopUp=   page.frameLocator('#ifrContent').getByRole('button', { name: 'Submit' });
        
        this.toggleDeceased_Btn=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Deceased', exact: true }).locator('label span')

         
        this.resendAllVerificationEmail_Link=page.frameLocator('#ifrContent').getByRole('link', { name: 'Resend All Pending' })
        this.confirmResendVerificationEmail_Btn=page.frameLocator('#ifrContent').getByRole('button', { name: 'Confirm' })
        this.closeResendVerificationEmail_Btn=page.frameLocator('#ifrContent').getByRole('button', { name: 'Close' })
        this.ResendAllVerificationEmail_Verbiage=page.frameLocator('#ifrContent').locator('#imgContactInfoVerification')
        
        //
        this.closeResendVerificationEmail_popUp=page.frameLocator('#ifrContent').getByRole('button', { name: 'Submit' })
       // this.messageTypesPushNotifications_popUp=page.frameLocator('#ifrContent').locator('div').filter({ hasText: 'Enable Push Notifications:' }).nth(2)
        //page.frameLocator('#ifrContent').locator('#infoImg')
        //this.toggleUnityByHardRockMail_Btn=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Amplify your experience with insider news about everything Unity has to offer.', exact: true }).locator('label span')
        
        this.messageTypesPushNotifications_popUp= page.frameLocator('#ifrContent').locator('#infoImg')
        this.pushNotificationPreferences_Verbiage= page.frameLocator('#ifrContent').locator('div').filter({ hasText: 'Enable Push Notifications:' }).nth(2)
         
       
        this.toggleUnityByHardRockMail_Btn=page.frameLocator('#ifrContent').getByRole('row', { name: 'Amplify your experience with insider news about everything Unity has to offer.', exact: true }).locator('span').first()
       
        this.toggleCasinoMail_Btn=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Get in the game with updates from Hard Rock Casinos.', exact: true }).locator('span').first()
        this.toggleCafeMail_Btn=page.frameLocator('#ifrContent').getByRole('row', { name: 'Get the scoop on new menu items, seasonal bites and special events at Hard Rock Cafes.', exact: true }).locator('span').first()
        this.toggleHotelsAndResortMail_Btn=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Plan your next getaway and learn about grand openings and special offers from Hard Rock Hotels.', exact: true }).locator('label span')
        this.toggleRockShopMail_Btn=page.frameLocator('#ifrContent').getByRole('cell', { name: 'Be the first to know about new products, unique collections and limited-time offers at our online store.', exact: true }).locator('label span')


       // frameLocator('#ifrContent').getByRole('cell', { name: 'Amplify your experience with insider news about everything Unity has to offer.', exact: true }).locator('label span').first()
        //this.clickCloseResendVerificationEmail_Btn
        

        // cofirm patron decision 
        this.yesConfirm_PopUp= page.frameLocator('#ifrContent').getByRole('button', { name: 'YES' })
        this.noConfirm_PopUp= page.frameLocator('#ifrContent').getByRole('button', { name: 'NO' })
        this.closeConfirm_PopUp= page.frameLocator('#ifrContent').getByRole('button', { name: 'Close' })

        //
        this.toggleEmailUnityByHardRock_Btn=
        this.toggleEmailCasino_Btn=
        this.toggleCafeEmail_Btn=
        this.toggleHotelsAndResortEmail_Btn=
        this.toggleRockShopMailEmail_Btn=
        this.closeToggleSuccess_PopUp= 
        this.yellowToggleColor_Btn= 
        this.saveGlobalPreference_Btn= page.frameLocator('#ifrContent').getByRole('button', { name: 'Save' })
        this.cancelGlobalPreference_Btn= page.frameLocator('#ifrContent').getByRole('button', { name: 'Cancel' })
        
    
        // toggle
         
    }


 //*******************************************************************************************************************////////////////

  ////////////////////////////////Global Preferences Methodsd and Functions ////////////////////////////////////////////////////////////////
 
  
  
  async  clickCloseToggleSuccess_PopUp(){
    try{

        await this.closeToggleSuccess_PopUp.click()
        console.log('close Toggle Success PopUp')
        
    }catch{
        console.log('close Toggle Success PopUp NOT Available')
    }

 }
  
  
  
  async   clickToggleGlobalEmailDirectMail_Btn(){
    try{
        await this.toggleGlobalEmailDirectMailUnsubscribe_Btn.click()
        console.log('Toggle Global EMail Direct Mail ')
        
    }catch{
        console.log('Toggle Global EMail Direct Mail NOT Available')
    }

 }
  
 

 async   clickDeSelectToggleGlobalEmailDirectMail_Btn(){
    try{
        await this.toggleGlobalEmailDirectMailUnsubscribe_Btn.click()
        console.log('Toggle Global EMail Direct Mail De-Selected As expected ')
        
    }catch{
        console.log('Toggle Global EMail Direct Mail NOT Available to be De_selected')
    }

 }


  async  clickToggleUnsubscribeFromAllEmail_Btn(){
    try{
        await this.toggleUnsubscribeFromAllEmail_Btn.click()
        console.log('Toggle Unsubscribe From All Email   ')
        
    }catch{
        console.log('Toggle Unsubscribe From All Emai NOT Available')
    }

 }



 async  clickYesUnsubscribeFromAllEmail_PopUp(){
    try{
        await this.yesUnsubscribeFromAllEmail_PopUp.click()
        console.log('User Unsubscribe from All Email')
        
    }catch{
        console.log('Unsubscribe from All Email Not Available')
    }

 }
 async  clickNoUnsubscribeFromAllEmail_PopUp(){
    try{
        await this.noUnsubscribeFromAllEmail_PopUp.click()
        console.log('User Cancel Unsubscribe from All Email')
        
    }catch{
        console.log('Cancel Unsubscribe from All Email Not Available')
    }

 }



 async  clickCloseUnsubscribeFromAllEmail_PopUp(){
    try{
        await this.closeUnsubscribeFromAllEmail_PopUp.click()
        console.log('User Close Unsubscribe from All Email')
        
    }catch{
        console.log(' Close Unsubscribe from All Email Not Available')
    }

 }


  async clickToggleDeceased_Btn(){
    try{
        await this.toggleDeceased_Btn.click()
        console.log('Toggle Deceased')
        
    }catch{
        console.log('Deceased Toggle NOT Available')
    }

 }
  
  async clickResendAllVerificationEmail_Link(){
    try{
        await this.resendAllVerificationEmail_Link.click()
        console.log('All Email Link Resent as expected')
        
    }catch{
        console.log('Resent all email Link NOT AVAILABLE')
    }

 }

  
 async  clickConfirmResendVerificationEmail_Btn(){
    try{
        await this.confirmResendVerificationEmail_Btn.click()
        console.log('CONFIRM All Email Link Resent as expected')
        
    }catch{
        console.log('CONFIRM Button for All Email Link Resent NOT Present')
    }

 }

  

 async   clickCloseResendVerificationEmail_Btn(){
    try{
        await this.closeResendVerificationEmail_Btn.click()
        console.log('CLOSE All Email Link Resent Pop Up as expected')
        
    }catch{
        console.log('CLOSE All Email Link Resent Pop Up NOT Present')
        throw e;
    }

 }

   
 async   clickCloseResendVerificationEmail_popUp(){
    try{
        await this.closeResendVerificationEmail_popUp.click()
        console.log('CLOSE All Email Link Resent Pop Up as expected')
        
    }catch{
        console.log('CLOSE All Email Link Resent Pop Up NOT Present')
    }

 }
 //clickMessageTypesPushNotifications_popUp

 async   clickMessageTypesPushNotifications_popUp(){
    try{
        await this.messageTypesPushNotifications_popUp.click()
        //await  expect(this.messageTypesPushNotifications_popUp).toHaveText("To update or change your preferences, login to the Unity App from your mobile device and navigate to your communication preferences") 
        await  expect(this.messageTypesPushNotifications_popUp).toHaveText("To update or change your") 
        console.log('Message Types Push Notifications Validated as expected')
    }catch{
        console.log('Message Types Push Notifications Pop Up NOT Present')
    }

 }

 async validateResendAllVerificationEmailVerbiage_Link(){
    try{
        //await this.ResendAllVerificationEmail_Verbiage.click()
         const message = 'Ask Patron if they would like to verify their email address on file. If the Patron agrees, click the Resend All Pending Verification Emails'
         const locator =this.ResendAllVerificationEmail_Verbiage()
         await expect(locator).toHaveText(message)
         console.log('resend all Pending Email Verification Verbiage validated as expected')
        
    }catch{
        console.log('resend all Pending Email Verification Verbiage NOT AVAILABLE')
    }

 }
 //validatePushNotificationPreferences_Verbiage

 async validatePushNotificationPreferences_Verbiage(){

    try{
        await  this.pushNotificationPreferences_Verbiage.click()

        await expect(this.pushNotificationPreferences_Verbiage).toHaveText('Enable Push Notifications:')
        await expect(this.pushNotificationPreferences_Verbiage).toHaveText('Rewards & Balances:')
        await expect(this.pushNotificationPreferences_Verbiage).toHaveText('Offers & Reservations:')
        await expect(this.pushNotificationPreferences_Verbiage).toHaveText('Special Communications:')

        console.log('Push Notification Preferences Verbiage DISPLAYED AS EXPECTED')
    }catch(e){
        console.log('Push Notification Preferences Verbiage NOT DISPLAYED')
    }
 }



  async clickToggleUnityByHardRockMail_Btn(){
    try{
        await this.toggleUnityByHardRockMail_Btn.click() 
                  // toggleUnityByHardRockMail_Btn
        console.log('Toggled Mail Unity By Hard Rock ')
        
    }catch{
        console.log('Toggled Mail Unity By hard Rock NOT available')
    }

 }


    async clickYesConfirm_PopUp(){
        try{
            await this.yesConfirm_PopUp.click()
            console.log('click on YES confirm Pop Up')
        }catch{
            console.log('Pop Up not Available')
        }
    }
    async clickNoConfirm_PopUp(){
        try{
            await this.noConfirm_PopUp.click()

            console.log('Click on NO Confirm Pop up ')

        }catch{
            console.log('Pop Up not Available')
        }
    }

    async clickClocseConfirm_PopUp(){
        try{
            await this.closeConfirm_PopUp.click()

            console.log('Close Confirm Pop Up ')

        }catch{
            console.log('Close Pop Up not Available')
        }
    }


  
  async clickToggleCasinoMail_Btn(){
    try{
        await this.toggleCasinoMail_Btn.click() 
        console.log('Toggled Mail Casino as Expected')
        
    }catch{
        console.log('Toggled Mail Casino NOT available')
    }
 }

  async  clickToggleCafeMail_Btn(){
    try{
        
        await this.toggleCafeMail_Btn.click()  
        console.log('Toggle Cafe Mail as expected')
    }catch(e){
        console.log('Cafe Toggled Cafe Mail not available')
    }
 }

  async  clickToggleHotelsAndResortMail_Btn(){
    try{
        await this.toggleHotelsAndResortMail_Btn.click()  
        console.log('Toggle Hotel and Resort as expected')
    }catch(e){
        console.log('Hotel and Resort Toggled NOT tavailable')
    }

 }

  async clickToggleRockShopMail_Btn(){
    try{
        await this.toggleRockShopMail_Btn.click() 
        console.log('Toggle Rock Shop as expected')
    }catch(e){
        console.log('Rock Shop Toggled not available')
    }

 }



  async clickToggleUnityByHardRockEmail_Btn(){
    try{
        await this.toggleEmailUnityByHardRockEmail_Btn.click()
        console.log('Toggle email Button as expected')
    }catch(e){
        console.log('Email Toggled Button not available')
    }

 }
  
  async clickToggleCafeEmail_Btn(){
    try{
        await this.toggleCafeEmail_Btn.click()
        console.log('Toggle Cafes Mail asexpected')
    }catch(e){
        console.log('Cafes Mail Toggled BUtton Not Available')
    }

 }

 
  async clickToggleHotelsAndResortEmail_Btn(){
    try{
        await this.toggleRockShopEmail_Btn.click()
        console.log('Hotel and Resort Email Toggled')
    }catch(e){
        console.log('Hotel and Resort Email Toggled Button not Available')
    }

 }


  async clickToggleRockShopMail(){
    try{
        await this.toggleRockShopMail_Btn.click()
          
                  
        console.log('RockSHop mail Toggle as expected')
    }catch(e){
        console.log('RockSHop mail Toggle Button Not Available')
    }

 }
 
  async clickCancelGlobalPreferences(){
    try{
        await this.cancelGlobalPreference_Btn.click()
        console.log('Global Preference Setting Cancel as expected')
    }catch(e){
        console.log('Cancel Button Not Available')
    }

 }

 async clickSaveGlobalPreferences(){
    try{
        await this.saveGlobalPreference_Btn.click()
        console.log('Global Preference Setting Saved as expected')
    }catch(e){
        console.log('Save Button Not Available')
    }

 }

 async validateToggleColor(colorCode){
    try{
        await this.toggleUnityByHardRockMail_Btn.click()
        await this.page.toggleUnityByHardRockMail_Btn.toHaveText(colorCode)
        console.log(  +colorCode  +': Color Validated as expected')
        // console.log('Toggle Color inside: ' +colorCode)
    }catch(e){
        console.log('Toggle Color Not Present')
        // console.log('Toggle Color OUTSIDE: ' +colorCode)
    }

 }


 
 ///////////////Functional Methods Patron DashBoard ///////////////////////////////////////////////////////
 
 async validateStart_icon(){
    try{
        await this.star_icon.click()
        await expect.page.toHaveText('Star')
        console.log('Star Icon is available')
    }catch(e){
        console.log('Star Icon Not available')
    }

 }

     async validationIcon_icon(){
    try{
            await this.icon_icon.click()
            await expect.page.toHaveText('Icon')
        console.log('Icon Icon is  available')
        }catch(e){
            console.log('Icon Icon Not available')
        }
    }
     async validationLegend_Icon(){
    try{
            await this.legend_icon.click()
            await expect.page.toHaveText('Legend')
        console.log('Legend Icon is  available')
        }catch(e){
            console.log('Legend Icon Not available')
        }

    }


    async validationXcard_Icon(){
        try{
                await this.xCard_icon.click()
                await expect.page.toHaveText('Xcard')
            console.log('Xcard Icon is  available')
            }catch(e){
                console.log('Xcard Icon Not available')
            }
    
        }
        async clickBouncedStatusTriagle_icon(){
            try{
                await this.bouncedStatusTriagle_icon.click()
                console.log('User click Bounced Status Triagle icon as expected')
            }catch(e){
                console.log('Bounced Status Triagle icon Is NOT Availabale')
            }
        
         }
        
        
         async clickRemoveHardBouncedStatus_Button(){
            try{
                await this.removeHardBouncedStatus_Button.click()
                console.log('Hard  Bounced Status Removed as expected')
            }catch(e){
                console.log('Hard  Bounced Status Button Is NOT Availabale')
            }
        
         }
        

 
 ////////////Functional methods of player search page//////////////////////////////////////////////////////////////////////////////
    
async searchPlayerID(playerID ){
    try{
         
       await this.playerID_textBox.click()
       await this.playerID_textBox.fill(playerID)
       await this.search_btn.click()
       //await expect(this.page).toHaveText(playerID)
       console.log('PlayerID found = ' +playerID)
    }catch(e){
        console.log('PlayerID NOT found')
        throw e
    }

 }

 async clickSearchBtn(){
    try{
    await this.search_btn.click()
    console.log('User click on Search Btn')

    }catch(e){
            console.log('Search Btn not found')
    }
    }


 /////////////////////////Functional Methods of Commpreference page   /////////////////////////////////////////////////////

    async clickCommPreferences_btn(){
        try{

        await this.commPreferences_btn.click()
        console.log('User on Comm Preference page')

         }catch(e){
            console.log('Comm Preference page Tab not found')
            throw e
        }
    }

    async clickCommPreferences_btn_NegativeScenario(){
        //try{

      //  await this.commPreferences_btn.click()
        await expect(this.commPreferences_btn).not.toBeVisible()
        //await expect(commPreferences_btn).toHaveCount(0);
       // console.log('User on Comm Preference page')

        // }catch(e){
            console.log('Comm Preference Tab not found as expected on NON ADMIN Page ')
           // throw e
       // }
    }


    async clickAccountSettings_tab(){
        try{
                await expect.soft(this.accountSettings_tab).toBeVisible()
                await this.accountSettings_tab.click()
                await this.page.waitForTimeout(3000)
                console.log('User on Account Setting')
        }catch(e){
            console.log('Account setting Tab not found')
            throw e
        }
       
    }
   ////////////////////////////Global Preferences Methods and Functions////////////////////////////////////////////////////////////////
   async clickGloblaPreferences_Tab(){
    try{
        
        await this.globalPreferences_Tab.click()
         
        console.log('User on Global Preferenes Tab ')
    }catch(e){
        console.log('Global Preferences Tab not availbale ')
    }
   
}

   ////////////////////////////////////Functional Methods Account Setting Page////////////////////////////////
   async clickOnlineAccountCreated_link(){
    try{
    await this.onlineAccountCreated_link.click()
    console.log('online Account Created as expected ')
   }catch(e){
    console.log('Online Account not created')
    }
 }



async clickActivateOnlineAccount_link(){
    try{

        await this.activateOnlineAccount_link.click()

        console.log('online account activated as expected')
    }catch(e){
        console.log('Activate Online account Link not visible')
        throw e
    }

}


async clickResendActivation_link(){
    try{
        await this.resendActivation_link.click()
        console.log('activation link resent')

    }catch(e){
        console.log('resend activation Link not Visible')
        throw e;
    }
}
 
   async validateAnableAccount_link(){
    try{
        expect(await this.page(enableAccount_link).toHaveTitle('Enable Account'))
        console.log('Account is Enable as expected')

    }catch(e){
        console.log('Account Anable Link is NOT Present')
        throw e
    }
    
   }

   async clickAnableAccount_Link(){

    try{
         await this.enableAccount_link.click()
         await this.anableAccount_PopUP.click()
         await this.closeAnableAccount_PopUp.click()
        //  await page.frameLocator('#ifrContent').getByRole('button', { name: 'Enable' }).click();
        //  await page.frameLocator('#ifrContent').getByRole('button', { name: 'Close' }).click();
        console.log('Enable account as expected')

    }catch(e){
        console.log('Enable Account Link is NOT Present disable')
        throw e
    }

   }


   async clickAccountDisable_link (){
    try{
        
          await this.disableAccount_link.click()
          await this.disableAccount_PopUP.click()
          await this.closeDisableAccount_Popup.click()
         
        //   await page.frameLocator('#ifrContent').getByRole('button', { name: 'Disable' }).click();
        //   await page.frameLocator('#ifrContent').getByRole('button', { name: 'Close' }).click();
          console.log('Account is Disable as expected')
        //  await this.page.pause()

    }catch(e){
        console.log('Disbale Account link is not available')
        throw e
    }
    
   }

   async validateAccountDisable_link(){

     try{

        await expect(this.disableAccount_link).toHaveText('Disable Account')
        console.log('Account Disable link is present as expected')

        }catch(e){
            console.log('Account Disable link is not Present')
            throw e;
        }
   }
   


   async validateResetPassword_link(){
    try{
        expect(this.page.toHaveTitle('Reset Password'))
        
        console.log('Reset passowrd link available')
    }catch(e){
        console.log('Reset passord link not NOT Available')
        throw e;
    }

   }


   async clickResetPassword_link(){
    try{
        await this.page.waitForTimeout(5000)
        await expect.soft(this.resetPassword_link).toBeVisible()
        await this.resetPassword_link.click()
        await this.resetPassword_PopUSend.click()
        await this.resetPassword_PopUMessage.click()
        console.log('Reset password link Clickable')
    }catch(e){
        console.log('Reset password link NOT clickable')
        throw e
    }

   }

   async clickResetPassword_popUpSend(){
    try{
        await this.resetPassword_PopUSend.click()
        console.log('Reset password Pop Up Clickable')
    }catch(e){
        console.log('Reset password Pop Up NOT clickable')
        throw e;
    }

   }


  async clickResetPassword_message(txt_message){
        try{
        await this.resetPassword_PopUMessage.click()
        console.log('CLose Resend password messgae link')
         }catch(e){
       console.log('Account is not Disable')
       throw e;
         } 
    }
    

   

   async goToAccountSettingTab(playerID){
    await this.playerID_textBox.click()
    await this.playerID_textBox.fill(playerID)
    await this.search_btn.click()
    await this.commPreferences_btn.click()
    await this.accountSettings_tab.click()
    console.log('User on Account Setting page')

   }



   async validateAccountSettingLinks(){
    try{
    await this.clickOnlineAccountCreated_link.click()
    await this.clickResetPassword_link.click()
    await this.clickResetPassword_message()
    await this.clickResetPassword_popUpSend()
        console.log('Account Setting links clickable')
        }catch(e){
            console.log('Account Setting links NOT clickable')
            throw e;
        }
    }

   async validateAccountSettingTextCOntent(){
    try{
        await expect(this.onlineAccountSettings).toHaveText('Online Account Settings')
        await expect(this.onlineAccountCreated_link).toHaveText('Online Account Created')
        await expect(this.accountActivated_link).toHaveText('Account Activated')
        await expect(this.resetPassword_link).toHaveText('Reset Password')
        await expect(this.accountNotLock_link).toHaveText('Account Not Locked')
        await expect(this.disableAccount_link).toHaveText('Disable Account')
        console.log('All text element from account setting page are validated')  
        }catch(e){
            console.log('some or all Text element content are not available')
            throw e;
        }
   }

   async validateResendActivation_link(){
    try{
        await expect(this.onlineAccountSettings).toHaveText('Online Account Settings')
        await expect(this.onlineAccountCreated_link).toHaveText('Online Account Created')
        await expect(this.activateOnlineAccount_link).toHaveText('activate online Account link')
        await expect(this.resendActivation_link).toHaveText('Resend activation link')
        console.log('Activation Link Resent As Expected')  
        }catch(e){
            console.log('Activation Link is not Available')
            throw e;
        }
   }

   async validateAccountDisableTextCOntent(){
    try{
         
        await expect(this.disableAccount_link).toHaveText('Disable Account')
        console.log('Account is Disbale')  
    }catch(e){
        console.log('Account is NOT Disbale')
        throw e;
    }
   
   }


   async clickUnlockAccount_link(){
    try{
         
         await this.unlockAccount_link.click()
        console.log('Unlock Account link is cliackable ')  
    }catch(e){
        console.log('Unlock Account link is NOT clickable ')
        throw e;
    }
   
   }

   async validateAccountNOTLocked_Status(){
    try{
      // await expect(this.accountNotlocked_Status).getByText('Account Not Locked').toBeVisible()
       await expect(this.accountNotlocked_Status).toContainText('Account Not Locked')
        console.log('Account is NOT Locked as expected')
    }catch(e){
        console.log('Account is NOT Locked Link is not available ')
        throw e;
    }
   }

   accountLock_Status

   async validateAccountLocked_Status(){
    try{

       await expect(this.accountLocked_Status).toHaveText('Account Locked')

        console.log('Account is Locked as expected')
    }catch(e){
        console.log('Account is Lock Link is not available ')
        throw e;
    }
   }

    
   async   clickCloseUnlockAccount_MessagePopUp(){
    try{
         
         await this.closeUnlockAccount_Message.click()
        console.log('Unlock Account Message is closed')  
    }catch(e){
        console.log('Unlock account Message is not Avaialble ')
        throw e;
      }

    }
   
   

   async validateUnlockAccount_link(){
    try{
         
        await expect(this.unlockAccount_link).toHaveText('Unlock Account')
        console.log('Account is locked as expected')  
        }catch(e){
            console.log('UNlocked Account link is not Available')
            throw e;
        }
        
   }

    
   async clickResendCreatePassword_Email(){
    try{
         
        await expect(this.resendCreatePassword_Email).toHaveText('Resend Create Password Email')
        await this.resendCreatePassword_Email.click()

        console.log('Resend Create Password Email as expected')  
        }catch(e){
            console.log('Resend Create Password Email is not Available')
            throw e;
        }
        
   }


/////////////////////////////Functional Methods Discrationary Page/////////////////////////////////////////////////////////////////
async clickDiscrationaryComp_Tab(){

    try{
        await this.DiscrationaryComp_Tab.click()

        console.log('User clicks on Disrationary Comp Tab ')
    }catch(e){
        console.log('Discrationary Comp Tab not present')
    }
}

async clickVoidableDComp_Btn(){
    try{
        await this.voidableDComp_X.click()
        await expect.toHaveText('Click Void button below to void the following discretionary comp transaction, or Cancel to close this window and return to your previous screen. ')
        console.log('Comp is Voided as expected')
    }catch(e){
        console.log('Voidable Option Not Available')
    }
}

async clickRedeemComp_Btn(){
    try{
        await this.redeemComp_Btn.click()

        console.log('Comp is redeemed as expected')
    }catch(e){
        console.log('Redeem Comp button Not Available')
    }
}


async clickViewCompDetail_Btn(){
    try{
        await this.viewCompDetail_Btn.click()
        console.log('Comp is Viewed as expected')
        await expect.toHaveText('DVOID')
        console.log('Comp satus is DVOID')
        
    }catch(e){
        console.log('View Comp Details button not available')
    }
}

async clickCancel_Btn(){
    try{
        await this.cancelComp_Btn.click()

        console.log('Comp is Viewed as expected')
    }catch(e){
        console.log('View Comp Details button not available')
    }
}


async clickVoid_Btn(){
    try{
        await this.voidComp_Btn.click()
        console.log('Comp is Void as expected')
    }catch(e){
        console.log(' Void button not available')
    }
}


async addValidationComment_text(){
    try{
        await this.validationComment_Text.fill(' QA Automation Void COmp Discration')
        console.log('Void Comment Text as expected')
    }catch(e){
        console.log(' Void COmment Text is not available')
    }
}

async clickValidationOK_Btn(){
    try{
        await this.validationOK_Btn.click()
        console.log('Click')
    }catch(e){
        console.log(' Void button not available')
    }
}
 


async clickValidationDiscVoidedOK_Btn(){
    try{
        await this.validationDiscVoidedOK_Btn.click()
        console.log('Discretionary comp voided. ')
        await expect.toHaveText('Discretionary comp voided.')

    }catch(e){
        console.log('Discretionary comp NOT voided.')
    }
}

async clickCompStatus_Btn(){
    try{
        await this.CompStatus_Btn.click()
        await expect.toHaveText('DVOID')
        console.log('Discretionary comp Status is DVOID. ')

    }catch(e){
        console.log('Discretionary comp Status is NOT DVOID.')
    }
}



async enterPassword_text(){
    try{
        //await this.password_text.click().clear()
        await this.password_text.fill('Password01@$')
        console.log('Password Enters as expected')

    }catch(e){
        console.log('Password field not available')
    }
}

////// function to redo and redifine/////////////////////////////
async assignCompValidation(){

    try{
              
            
            await this.issueComp_Btn.click()
            await page.waitForTimeout(2000)
            await this.enterUserID_Txt.fill('TU_LAB_HALO_NIN_ADM')
            await page.waitForTimeout(2000)
            await this.enterPassword_Txt.fill('Password01@$');
            await page.waitForTimeout(2000)
            await this.enterAuthComment_Txt.fill('QA Automation Test')
            await page.waitForTimeout(2000)
            await this.selectCompType_select.selectOption('2')
            await this.enterCompCount_Txt.fill(10)
            await this.issueComp_Btn.click()
           


            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtUserId').fill('TU_LAB_HALO_NIN_ADM'); 
            
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtPwd').click();

            
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtPwd').fill('Password01@$');
            await page.waitForTimeout(1000)

           
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#TxtAuthComment').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#TxtAuthComment').fill('QA Automation Test');
            await page.waitForTimeout(1000)


            await this.selectCompType_select.selectOption('2')
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#DDLCompType').selectOption('2');
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtUserId').click();
            
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#TxtCompCount').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#TxtCompCount').fill('10');
            await page.waitForTimeout(5000)
            const compValue =  page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'ISSUE COMP' })
                    if ( compValue.isEnabled == true){
                    console.log('element is anable ')
                    await this.iSSUECOMPValue_Btn.click()
                    }else 
                    console.log('Element is not anable');
           
            //await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtPwd').isVisible.click     
            //await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtPwd').fill('Password01@$');
            //await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'ISSUE COMP' }).click();
            await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'PROCEED' }).click();

            await this.proceed_Btn.click()
            await this.negComment_Txt.fill('QA Automation test ')
            await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtnegComment').click();
            await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtnegComment').fill('QA Automation test ');
            await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'ISSUE COMP' }).click();
            // await page.goto('https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/PlayerDashBoard.aspx?UPlayerId=660302931%20%20%20&PlayerId=1247167');
            // await page1.close();
        
            // await page.pause()

            //await searchPlayerID.clickDiscrationaryComp_Tab()
            // await page.pause()
            // await searchPlayerID.clickVoidableDComp_Btn()
            // await searchPlayerID.clickVoid_Btn()

            // await searchPlayerID.enterPassword_text()
            // await searchPlayerID.addValidationComment_text()
            // await searchPlayerID.enterPassword_text()
            // await searchPlayerID.clickValidationDiscVoidedOK_Btn()
            // await searchPlayerID.clickViewCompDetail_Btn()
            // await searchPlayerID.clickCompStatus_Btn()
            
            //await gblFuntSteps.logOut()
        

        // (async () => {
        //   const browser = await chromium.launch({
        //     headless: false
        //   });
        //   const context = await browser.newContext();
            // await page.frameLocator('#ifrContent').getByRole('button', { name: 'Issue Comp' }).click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#DDLCompType').selectOption('2');
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtUserId').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtUserId').fill('TU_LAB_HALO_NIN_ADM');
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtPwd').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtPwd').fill('Password01@$');
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#TxtAuthComment').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#TxtAuthComment').fill('QA Automation Test');
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#TxtCompCount').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#TxtCompCount').fill('5');
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'ISSUE COMP' }).click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtPwd').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtPwd').fill('Password01@$');
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'ISSUE COMP' }).click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'PROCEED' }).click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtnegComment').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').locator('#txtnegComment').fill('QA Automation test ');
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'ISSUE COMP' }).click();
            // await page.goto('https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/PlayerDashBoard.aspx?UPlayerId=660302931%20%20%20&PlayerId=1247167');
            // await page1.close();
        
        
        //   await page.goto('https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/PlayerDashBoard.aspx?UPlayerId=660302931+++&PlayerId=1247167');
        //   await page.getByText('Discretionary Comps').click();
        //   await page.frameLocator('#ifrContent').getByRole('button', { name: 'Submit' }).click();
        //   await page.frameLocator('#ifrContent').getByRole('button', { name: 'Void' }).click();
        //   await page.frameLocator('#ifrContent').locator('#wdwVoid_tmpl_TxtAuthorisationPwd').click();
        //   await page.frameLocator('#ifrContent').locator('#wdwVoid_tmpl_TxtAuthorisationPwd').fill('Password01@$');
        //   await page.frameLocator('#ifrContent').locator('#wdwVoid_tmpl_TxtAuthComment').click();
        //   await page.frameLocator('#ifrContent').locator('#wdwVoid_tmpl_TxtAuthComment').fill('QA test Automation');
        //   await page.frameLocator('#ifrContent').getByRole('button', { name: 'OK' }).click();
        //   await page.frameLocator('#ifrContent').getByRole('button', { name: 'OK' }).click();
        //   await page.frameLocator('#ifrContent').getByRole('button', { name: 'View Comp Details' }).click();
        //   await page.frameLocator('#ifrContent').getByRole('img', { name: 'Close' }).click();
        
        
        // await page.getByRole('link', { name: 'Go To Employee Dashboard' }).click();
        
        // getByRole('link', { name: 'Logout' })
        //   // ---------------------
        //   await context.close();
        //   await browser.close();
        // })();
                console.log('comp validation Assigned')

                } catch(e){
                console.log('Com validation not assigned')
                }
  
            }




}


