
const{expect} = require("@playwright/test")
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
        this.playerFunctions_Tab = page.frameLocator('iframe[name="FramePopUp7"]').getByRole('link', { name: 'Player Functions' }) 
      
        this.playerTransactionLog_Tab= page.getByText('Player Transaction Log')
        this.closePopUpPlayerTransactionLog= page.getByText('Close')
        /////chcik in objects 
        this.eventCheckIn= page.getByText('Event Check-in')
        this.eventOfferName_Txt= page.locator('#ctl00_ContentPlaceHolder1_txtEventOffer')
        this.eventOferSeaerch_Btn= page.locator('#ctl00_ContentPlaceHolder1_btnSearchClick')
        this.offerIndex1 = page.locator('.ig_Item igg_Item borderNoneClass')
        this.viewPaceReport= page.locator('#ctl00_ContentPlaceHolder1_btnViewPaceReport')
        this.closePaceReport= page.locator('#ctl00_ContentPlaceHolder1_btnClose')

        /////Objects for Comments                          
        this.viewComment_Tab =page.getByText('View Comment');
        this.editComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'Test Comment Edit_1705000060137', exact: true })
        this.addComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Add' });
        this.viewSettledVoidedComment_tab=  page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'View Settled/Voided' })
        this.closeCommentPopUp_Message=  page.getByText('Close')
        this.cancelComment_Tab=page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Cancel' })
        this.viewAllComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'View All' })
        this.replyComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Reply' })
        this.editComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Edit' })
        this.settleVoidComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Settle/Void' })
        this.CommentFirstRow_Tab =page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'LAWS', exact: true })
        //page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'LAWS', exact: true })
        this.addComment_Txt= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'txtComment' })
        this.saveComment_tab = page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Save' });
        
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




//////////////////////////////Functions and Methods for Player FUnction ////////////////////////
         
    }

    async clickPlayerFunctions_Tab(){
        try{
    
            await this.playerFunctions_Tab.click() 
            console.log('User on player Function Tab')
        }catch(e){
            console.log(e)
            console.log('player Function Tab not visible')
        }
        
    }

    //////////////////////////////Functions and Methods for Player FUnction tab and Comment tab ////////////////////////

    async clickViewComment_Tab(){
        try{
            await this.viewComment_Tab.click()
            console.log('User on comment tab  ')
        }catch(e){
            console.log('View comment tab Not visible ')
        }

    }

    async clickViewAllComment_Tab(){
        try{
            await this.viewAllComment_Tab.click()
            console.log('User on View All comment tab  ')
        }catch(e){
            console.log('View Al comment tab Not visible ')
        }

    }

    async clickCommentFirstRow_Tab(){
        try{
            await this.CommentFirstRow_Tab.first.click()
            console.log('Comment FIrst ROw tab Opens')
        }catch(e){
            console.log('Comment First Row Tab Not visible ')
        }

    }
    

    async clickEditComment_Tab(){
        try{
            await this.editComment_tab.click()

            console.log('User Edited comment ')
        }catch(e){
            console.log('Edit comment tab not visible ')
        }


    }

    async clickAddComment_Tab(){

        try{
            await this.addComment_tab.click()

            console.log('User Added comment')
        }catch(e){
            console.log('Add comment tab not visible ')
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
        }
    }

    
     

    async clickviewSettledVoided_tab(){
        try{
            await this.viewSettledVoidedComment_tab.click()

            console.log('User Viewed, Settle Voided Comments  ')
        }catch(e){
            console.log('View comment tab not visible ')
        }

    }

    async clickCancellComment_tab(){
        try{
            await this.cancelComment_Tab.click()

            console.log(' Comments Cancel ')
        }catch(e){
            console.log('Cancel COmment Not Visible')
        }

    }
    
    async clickReplyComment_Tab(){
        try{
            await this.replyComment_Tab.click()

            console.log('Reply COmment')
        }catch(e){
            console.log('Reply Comment not visible ')
        }

    }
    
   

    async clickCloseCommentPopUp_Message(){
        try{
            await this.closeCommentPopUp_Message.click()

            console.log('Comment Pop Up Message Close')
        }catch(e){
            console.log('Comment Pop Up Message Not Availbale')
        }
    }
     

    async clickSaveComment_tab(){
        try{ 
         
        await this.saveComment_tab.click
         
        console.log('Comment Saved as expected')
        }catch(e){
            console.log('Save tab  Not visible')
        }
    }

    /////////////////////////Functional Methods for Line Of Business Page //////////////////////////////////////////////////////////


            async clickLineOfBusiness_Tab(){
                
            try{
                await this.LineOfBusiness_Tab.click()
                  console.log('Line Of business tab Opens')
            }catch(e){
                console.log('Line Of business tab Not Available')
            }
        }
    
///////////////////////////////////////////Functional Methods for Player Tansactions Log page ////////////////////////////////////
       

        async clickplayerTransactionLog_Tab(){
            
        try{
            await this.playerTransactionLog_Tab.click()

            console.log('Player Transaction Tab Opens')
        }catch(e){
            console.log('Player Transaction Tab not available')
        }
    }

    


    async ClickClosePopUpPlayerTransactionLog(){
            
        try{
            await this.closePopUpPlayerTransactionLog.click()
            console.log('Player Transaction Pop UP CLose  ')
        }catch(e){
            console.log('Player Transaction Pop Up not Available')
        }
    }


    async  clickPlayerTransactionLog_FisrtEntry(){
            
        try{
            await this.playerTransactionLog_FisrtEntry.click()
            await expect.page.toHaveText('Account created ')
            console.log()
             
        }catch(e){
            console.log('Account Not Created')
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
        }
    }


    /////////////////////////// Visit Appeasement Functions and Method /////////////////////////////////
    async clickVisitAppeasement_Tab(){

        try{
            await this.visitAppeasement_Tab.click()
            console.log('visitAppeasement Page Opens')
        }catch(e){
            console.log('visitAppeasement Page NOT Available')
        }

    }


////////////////Event Check-In Tab 
    async clickEventCheckIn_Tab(){
        try{
            await this.eventCheckIn.click()
            console.log(' On Event Check In tab ')
        }catch{

            console.log(' Event Check In tab Not Displayed')
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

 

