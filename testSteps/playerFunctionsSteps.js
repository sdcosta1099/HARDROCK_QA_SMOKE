
const{expect} = require("@playwright/test")
const exp = require("constants")
const testData = JSON.parse(JSON.stringify(require("../testData.json")))
//import{configurationSteps}from '../testSteps/configurationSteps'
// const browser = await chromium.launch({ headless: false});
// const context = await browser.newContext();
  exports.playerFunctionsSteps =  class playerFunctionsSteps{
     //configSteps = new configurationSteps()

    // THIS PAGE CONTAINS ALL ELEMENT AND FUNCTION FROM THE PLAYER FUNCTIONS PAGE


    constructor(page){

        this.page=page
        /////Object for Player Function///////////////////////////////
        //this.playerFunctions_Tab = page.frameLocator('iframe[name="FramePopUp7"]').getByRole('link', { name: 'Player Functions' }) 
        this.playerFunctions_Tab =page.getByRole('link', { name: 'Player Functions' })
        this.playerTransactionLog_Tab= page.getByText('Player Transaction Log')
        this.closePopUpPlayerTransactionLog= page.getByText('Close')
        this.logTransactionDescription = page.getByText('Close') //Player Comment - Settled in HALO
        /////chcik in objects 
        this.eventCheckIn= page.getByText('Event Check-in')
        this.eventOfferName_Txt= page.locator('#ctl00_ContentPlaceHolder1_txtEventOffer')
        this.eventOferSeaerch_Btn= page.locator('#ctl00_ContentPlaceHolder1_btnSearchClick')
        this.offerIndex1 = page.locator('.ig_Item igg_Item borderNoneClass')
        this.viewPaceReport= page.locator('#ctl00_ContentPlaceHolder1_btnViewPaceReport')
        this.closePaceReport= page.locator('#ctl00_ContentPlaceHolder1_btnClose')

        /////Objects for Comments                          
        this.viewComment_Tab =page.getByText('View Comment');
        //this.editComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'Test Comment Edit_1705000060137', exact: true })
        this.addComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Add' });
        this.viewSettledVoidedComment_tab=  page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'View Settled/Voided' })
        //this.viewSettledVoidedComment_tab= page.locator('.btnCommentSettleVoid')
        this.closeCommentPopUp_Message=  page.getByText('Close')
        this.closeCommentPopUp_Header= page.locator('#popupheaderEnhancedComments')
        this.cancelComment_Tab=page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Cancel' })
        this.viewAllComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'View All' })
        this.replyComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Reply' })
        this.editComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Edit' })
        this.settleVoidComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Settle/Void' })
       this.txtSettleVoidComment= page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#txtSettleVoidComment')
        this.CommentFirstRow_Tab =page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'LAWS', exact: true })
                                //page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'LAWS', exact: true })

        // this.clickSubmit_SettleVoidComment_Btn= page.locator('.btnSettleVoidSubmit')
        // this.clickCancel_SettleVoidComment_Btn= page.locator('.btnSettleVoidCancel')
        // this.clickConfirm_SettleVoidComment_Btn= page.locator('.btnSettleVoidConfirm')
        
 
        this.clickSubmit_SettleVoidComment_Btn= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Submit' })
        this.clickCancel_SettleVoidComment_Btn= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Cancel' })
        this.clickConfirm_SettleVoidComment_Btn=page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Confirm' })

        this.addComment_Txt= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'txtComment' })
        this.saveComment_tab = page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Save' });

        this.authorizationPassword= page.locator('#TxtAuthorisationPwd')
        //page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#TxtAuthorisationPwd')
        this.authorizationReason= page.locator('#ddlSettleVoidCommentReason')
        //this.authorizationSubmit= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Submit' })
       // this.authorizationComments= page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#txtAuthorisationComment')
       this.authorizationComments= page.locator('#TxtAuthComment')
       this.authorizationSubmit=page.locator('#btnPopupSubmit')
       this.authorizationCancel=page.locator('#btnPopupCancel')

        this.authorizationOK= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Ok' })
        this.authorizationClosePopUp=  page.getByText('Close')
    
        
        const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({
//     headless: false
//   });
//   const context = await browser.newContext();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'LAWS', exact: true }).first().click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Add' }).click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'View Settled/Voided' }).click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'View All' }).click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'CMP', exact: true }).first().click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Reply' }).click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Cancel' }).click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'CMP', exact: true }).first().click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Edit' }).click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Cancel' }).click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'LAWS' }).nth(3).click();
//   await page.fpage.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Settle/Void' })rameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Delete' }).click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Cancel' }).click();
//   await .click();
//   await page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Cancel' }).click();

//   // ---------------------
//   await context.close();
//   await browser.close();
        //this.playerTransactionLog_Arrow= page.getText()
         this.playerTransactionLog_FisrtEntry = page.frameLocator('iframe[name="FramePopUp3"]').getByRole('cell', { name: 'Online account unlocked', exact: true });
         this.playerTransactionLog_FisrtEntryDataValidation = page.frameLocator('iframe[name="FramePopUp3"]') 
        /////////////////////////////Line Of Business Object Repository/////////////////////////////////////////////////
        this.LineOfBusiness_Tab = page.getByText('Manual Line Of Business')

        ////////////////////// visit Appeasement Object Repo//////////////////////
        this.visitAppeasement_Tab= page.getByText('Visit Appeasement');
        this.uniqueLocationVisited = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: 'Unique Locations Visited :' })
        this.locationVisited = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: 'Locations Visited (Lifetime) :' })
        this.hotelVisited = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: 'Hotel Visits :' })
        this.locationName = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: 'Location Name', exact: true }) 
        this.totalVisits = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: 'Total Visits', exact: true })
        this.firstVisitDate = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: 'First Visit Date', exact: true })
        this.lastVisitDate = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: 'Last Visit Date', exact: true })
        this.visitVerified =  page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: 'Verified', exact: true })



        //this.closeVisitAppeasement_Tab = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'Close' })
        this.closeVisitAppeasement_Tab =   page.getByText('Close')



//////////////////////////////Functions and Methods for Player FUnction ////////////////////////
         
    }

    async clickPlayerFunctions_Tab(){
        try{

            await this.playerFunctions_Tab.click({timeout:5000}) 
            console.log('User on player Function Tab')
        }catch(e){
            console.log(e)
            console.log('player Function Tab not visible')
            throw e
        }
        
    }

    //////////////////////////////Functions and Methods for Player FUnction tab and Comment tab ////////////////////////

    async clickViewComment_Tab(){
        try{
            await this.viewComment_Tab.click()
            console.log('User on comment tab  ')
        }catch(e){
            console.log('View comment tab Not visible ')
            throw e
        }

    }
    async clickSettleVoidComment_tab(){
        try{
            await this.settleVoidComment_tab.click()
            await this.txtSettleVoidComment.fill(testData.scriptingData.comment)
            await this.clickSubmit_SettleVoidComment_Btn.click() 
            await this.clickConfirm_SettleVoidComment_Btn.click()
            console.log('Settle VOid comment tab opens as expected')
        }catch(e){
            console.log('Settle VOid comment tab Not visible ')
            throw e
        }

    }

     
    async validateAuthorizationComments(){
        try{
            await this.authorizationPassword.fill(testData.Credentials.QApassword)
            await this.authorizationReason.selectOption('System Testing')
            await this.authorizationComments.fill(testData.scriptingData.comment)
            await this.authorizationSubmit.click()
            await this.authorizationOK.click()
            await this.authorizationClosePopUp.click()
            console.log('Comments Authorize as expected')
        }catch(e){
            console.log('Comment Authorization tab Not visible ')
            throw e
        }

    }



    async validateCommentTab_Elements(){
        try{
            await  expect(this.settleVoidComment_tab).toBeVisible()
            await  expect(this.editComment_Tab).toBeVisible()
            await  expect(this.replyComment_Tab).toBeVisible()
            await  expect(this.viewSettledVoidedComment_tab).toBeVisible()
            await  expect(this.addComment_tab).toBeVisible()
            await  expect(this.editComment_Tab).toBeVisible()
            console.log('All Comment Tab Elements are present as expected  ')
        }catch(e){
            console.log('Comment Tab Elements are NOT Displyed on Comment Pop Up')
            throw e
        }

    }

    async clickViewAllComment_Tab(){
        try{
            await this.viewComment_Tab.click()
            console.log('User on View All comment tab  ')
        }catch(e){
            console.log('View Al comment tab Not visible ')
            throw e
        }

    }

    async clickCommentFirstRow_Tab(){
        try{
         await this.CommentFirstRow_Tab.first().click({timeout:5000})
            console.log('Comment First Row tab Opens')
        }catch(e){
            console.log('Comment First Row Tab Not visible ')
            throw e
        }

    }
    

    async clickEditComment_Tab(){
        try{
            await this.editComment_tab.click()

            console.log('User Edited comment ')
        }catch(e){
            console.log('Edit comment tab not visible ')
            throw e
        }


    }

    async clickAddComment_Tab(){

        try{
            await this.addComment_tab.click()

            console.log('User Added comment')
        }catch(e){
            console.log('Add comment tab not visible ')
            throw e
        }

    }


    async clickAddComment_Txt(){
        try{ 
        const commentData= testData.scriptingData.comment
        await this.addComment_tab.click()
        await this.addComment_Txt.fill(commentData)
        console.log('Comment Added as expected')
        }catch(e){
            console.log('Comment Field Not visible')
            throw e
        }
    }

    
     

    async clickviewSettledVoided_tab(){
        try{
            await this.viewSettledVoidedComment_tab.click({timeout:5000})

            console.log('User Viewed, Settle Voided Comments  ')
        }catch(e){
            console.log('View comment tab not visible ')
            throw e
        }

    }

    async clickCancellComment_tab(){
        try{
            await this.cancelComment_Tab.click()

            console.log(' Comments Cancel ')
        }catch(e){
            console.log('Cancel COmment Not Visible')
            throw e
        }

    }
    
    async clickReplyComment_Tab(){
        try{
            await this.replyComment_Tab.click()

            console.log('Reply Comment')
        }catch(e){
            console.log('Reply Comment not visible ')
            throw e
        }

    }
    
    async validateCommentPopUp_Header_Present(){
        try{
            console.log('Start Validation for Comment Pop Up Header  ')
            if (this.closeCommentPopUp_Header.toBeVisible()){
                       closeCommentPopUp_Header.click()
                       console.log('Comment Pop Up Header Close')
            }else{
                console.log('Message comment not visible')
            }
        }catch(e){
            console.log('Comment Pop Up Header Not Availbale')
            throw e
        }
    }



    // async closeCommentPopUp_Header(){
    //     try{
    //         console.log('Start Validation for Comment Pop Up Header  ')
    //         if (this.closeCommentPopUp_Header.toBeVisible()){
    //                    closeCommentPopUp_Header.click()
    //                    console.log('Comment Pop Up Header Close')
    //         }else{
    //             console.log('Message comment not visible')
    //         }
    //     }catch(e){
    //         console.log('Comment Pop Up Header Not Availbale')
    //         throw e
    //     }
    // }




    async clickCloseCommentPopUp_Message(){
        try{
            await this.closeCommentPopUp_Message.click()

            console.log('Comment Pop Up Message Close')
        }catch(e){
            console.log('Comment Pop Up Message Not Availbale')
            throw e
        }
    }
     

    async clickSaveComment_tab(){
        try{ 
         
        await this.saveComment_tab.click
         
        console.log('Comment Saved as expected')
        }catch(e){
            console.log('Save tab  Not visible')
            throw e
        }
    }

    /////////////////////////Functional Methods for Line Of Business Page //////////////////////////////////////////////////////////


            async clickLineOfBusiness_Tab(){
                
            try{
                await this.LineOfBusiness_Tab.click()
                  console.log('Line Of business tab Opens')
            }catch(e){
                console.log('Line Of business tab Not Available')
                throw e
            }
        }
    
///////////////////////////////////////////Functional Methods for Player Tansactions Log page ////////////////////////////////////
       

        async clickplayerTransactionLog_Tab(){
            
        try{
            await this.playerTransactionLog_Tab.click()
            console.log('Player Transaction Tab Opens')
        }catch(e){
            console.log('Player Transaction Tab not available')
            throw e
        }
    }

    async validateComment_PlayerTransactionLog(){
            
        try{
            await this.playerTransactionLog_Tab.click()
            await this.CommentFirstRow_Tab.first().click({timeout:5000})

            await this.closePopUpPlayerTransactionLog.click({timeout:3000})
            await this.page.pause()
            await expect(this.logTransactionDescription).toHaveText('Player Comment - Settled in HALO')
        
            console.log('All comment validated as expected on Player Transaction Tab')
        }catch(e){
            console.log('Player Transaction Tab not available')
            throw e
        }
    }

    


    async ClickClosePopUpPlayerTransactionLog(){
            
        try{
            await this.closePopUpPlayerTransactionLog.click()
            console.log('Player Transaction Pop UP CLose  ')
        }catch(e){
            console.log('Player Transaction Pop Up not Available')
            throw e
        }
    }


    async  clickPlayerTransactionLog_FisrtEntry(textInFirstRow){
            
        try{
            await this.playerTransactionLog_FisrtEntry.click()
            await expect.page.toHaveText(textInFirstRow)
            console.log('Text in First Row ' +textInFirstRow +' Displaye as expected')
             
        }catch(e){
            console.log('Account Not Created')
            throw e
        }
    }
    

    async  clickPlayerTransactionLog_FisrtEntryDataValidation(data){
            
        try{
            await this.playerTransactionLog_FisrtEntryDataValidation.click()
            await expect.page.toHaveText(data)
            console.log(data + ':  Player Transaction first entry Data Validated as expected')
            console.log('Espected Data: ' +data)
        }catch(e){
            console.log('Player Transaction first entry Data NOT able to be validated')
            throw e
        }
    }


    /////////////////////////// Visit Appeasement Functions and Method /////////////////////////////////
    async clickVisitAppeasement_Tab(){

        try{
            await this.visitAppeasement_Tab.click()
            console.log('visit Appeasement Page Opens as expected')
        }catch(e){
            console.log('visit Appeasement Page NOT Available')
            throw e
        }

    }

    async validateVisitAppeasementPage(){
        try{
          //  await this.page.pause()
            await this.uniqueLocationVisited.highlight()
            await expect(this.uniqueLocationVisited).toBeVisible()      
            console.log('Unique location Visited displays as expected')  
            await this.locationVisited.highlight()
            await expect(this.locationVisited).toBeVisible() 
            console.log('location Visited Lifetime displays as expected')
            await this.hotelVisited.highlight()
            await expect(this.hotelVisited).toBeVisible()
            console.log('Hotel Visited displays as expected')
            //await this.page.pause()
            await this.locationName.highlight()
            await this.totalVisits.highlight()
            await this.firstVisitDate.highlight()
            await this.lastVisitDate.highlight()
            await this.visitVerified.highlight()
            console.log('Visit Appeasement functions: Location Name, Total Visits, First Visit Date, Last Visit Date, and Verified Visits display as expected')
            
            await this.closeVisitAppeasement_Tab.click()

        }catch(e){
            console.log('Visit Appeasement functions are NOT VALIDATED')
            throw e
        }
       
                  
    }


    async addVisits(){
        try{


            //const  offerStartDate = this.getNextDate(1)
            // const offerEndDate = this.getNextDate(2)
             const   today = today.getDate()
             console.log('date: ' +today)

           // await this.startDate_Txt.fill(offerStartDate);
           // await this.endDate_Txt.fill(offerEndDate)

            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('img').click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: '22', exact: true }).click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'Submit' }).click();
            // await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'Ok' }).click();

            const date= getnext

            console.log('Vist appeasements added as expected')
        }catch(e){
            console.log('Vist appeasements NOT ABLE TO add')
            throw e
        }


    }

    async validateAddedVisits(){
        try{
            await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('img').click();
            await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('cell', { name: '22', exact: true }).click();
            await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'Submit' }).click();
            await page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByRole('button', { name: 'Ok' }).click();

            console.log('Number of Vist appeasements added validated as expected')
        }catch(e){
            console.log('User is not able to validate Visits appeasements')
            throw e
        }


    }


////////////////Event Check-In Tab 
    async clickEventCheckIn_Tab(){
        try{
            await this.eventCheckIn.click()
            console.log(' On Event Check In tab ')
        }catch{

            console.log(' Event Check In tab Not Displayed')
            throw e
        }

    }

    async enterEventOfferName(offerName){
        await this.eventOfferName_Txt.fill(offerName)
        try{
            console.log('Event Offer name entered: ' +offerName)
        }catch{
            console.log('Event Offer name NOT entered: ' +offerName)
        }
    }

}   

 

