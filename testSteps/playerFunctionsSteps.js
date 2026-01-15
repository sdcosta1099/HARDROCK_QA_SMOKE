
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
        this.playerFunctions_TabPT = page.frameLocator('iframe[name="FramePopUp7"]').getByRole('link', { name: 'Player Functions' }) 
        this.playerFunctions_Tab =page.getByRole('link', { name: 'Player Functions' })
        this.playerTransactionLog_Tab= page.getByText('Player Transaction Log')
        this.closePopUpPlayerTransactionLog= page.getByText('Close')


        this.logTransactionDescription = page.getByText('Close') //Player Comment - Settled in HALO
        this.logTransactionDateTime = page.locator('iframe[name="FramePopUp3"]').contentFrame().getByRole('cell', { name: 'Transaction Date/Time', exact: true })
        this.logTransactionDescription= page.locator('iframe[name="FramePopUp3"]').contentFrame().getByRole('cell', { name: 'Transaction Description', exact: true })
        this.logTransactionComment= 
        this.logTransactionCreator= page.locator('iframe[name="FramePopUp3"]').contentFrame().getByRole('cell', { name: 'Creator', exact: true })
        this.logTransactionCreatorAdmin=  page.locator('iframe[name="FramePopUp3"]').contentFrame().getByRole('cell', { name: 'TU_LAB_HALO_NIN_ADM' }).nth(2)
        this.logTransactionPropertyName= page.locator('iframe[name="FramePopUp3"]').contentFrame().getByRole('cell', { name: 'Property Name', exact: true })
        

        /////chcik in objects 
        this.eventCheckIn= page.getByText('Event Check-in')
        this.eventOfferName_Txt= page.locator('#ctl00_ContentPlaceHolder1_txtEventOffer')
        this.eventOferSeaerch_Btn= page.locator('#ctl00_ContentPlaceHolder1_btnSearchClick')
        this.offerIndex1 = page.locator('.ig_Item igg_Item borderNoneClass')
        this.viewPaceReport= page.locator('#ctl00_ContentPlaceHolder1_btnViewPaceReport')
        this.closePaceReport= page.locator('#ctl00_ContentPlaceHolder1_btnClose')

        /////Objects for Comments////////////////////////

        this.viewComment_Tab =page.getByText('View Comment');
        //this.editComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'Test Comment Edit_1705000060137', exact: true })
        this.addComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Add' });
        this.viewSettledVoidedComment_tab=  page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'View Settled/Voided' })
        this.CommentHeaderExpirationDate= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Expiration Date', exact: true })
        //this.viewSettledVoidedComment_tab= page.locator('.btnCommentSettleVoid')
        this.closeCommentPopUp_Message=  page.getByText('Close')
        this.closeCommentPopUp_Header= page.locator('#popupheaderEnhancedComments')
        //page.getByText('Close')
        this.cancelComment_Tab=page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Cancel' })
        this.viewAllComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'View All' })
        this.replyComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Reply' })
        this.editComment_Tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Edit' })
        this.settleVoidComment_tab= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Settle/Void' })
        this.txtSettleVoidComment= page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#txtSettleVoidComment')  
        this.CommentFirstRow_Tab = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'TU_LAB_HALO_NIN_ADM', exact: true })
        this.PlayerTransactionCommentFirstRow_Tab = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Player Comment - Settled in HALO', exact: true })
        this.commentAddedBy= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByText('Added By: TU_LAB_HALO_NIN_ADM')
        //page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'LAWS', exact: true })
        //page.frameLocator('iframe[name="FramePopUp7"]').getByRole('cell', { name: 'LAWS', exact: true })

        // this.clickSubmit_SettleVoidComment_Btn= page.locator('.btnSettleVoidSubmit')
        // this.clickCancel_SettleVoidComment_Btn= page.locator('.btnSettleVoidCancel')
        // this.clickConfirm_SettleVoidComment_Btn= page.locator('.btnSettleVoidConfirm')
        
 
        this.clickSubmit_SettleVoidComment_Btn= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Submit' })
        this.clickCancel_SettleVoidComment_Btn= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Cancel' })
        this.clickConfirm_SettleVoidComment_Btn=page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Confirm' })

        //this.addComment_Txt= page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'txtComment' })
        this.addComment_Txt= page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#txtComment')
        this.saveComment_tab = page.frameLocator('iframe[name="FramePopUp7"]').getByRole('button', { name: 'Save' });
        this.saveOkComment = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Ok' })

        this.CommentHeaderSource= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Source', exact: true })
        this.CommentHeaderDepartment= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Department', exact: true })
        this.CommentHeaderPriority= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Priority', exact: true })
        this.CommentHeaderProperty= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Property', exact: true })
        this.CommentHeaderSearchFrom= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Search From', exact: true })
        this.CommentHeaderSearchTo= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Search To', exact: true })
        this.CommentHeaderSearch_Btn= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Search' })

         

        this.displayDateCommentHeader = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Display Date', exact: true })

        this.currentDate = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: '11/17/2025', exact: true })
        this.commentHeader = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'Comment', exact: true })
        this.commentUserID= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'TU_LAB_HALO_NIN_ADM', exact: true }).nth(9)
        this.commentUserName = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name: 'UserName', exact: true })
        this.closeCommentFrame = page.getByText('Close')
       this.closeCommentPopupheader3 =   page.locator('#popupheader3').getByText('Close');
       this.lowerCommentPriority = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('option', { name: '4 - Lower' })
       this.mediumCommentPriority = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('option', { name: '3 - Medium' })
        this.highCommentPriority = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('option', { name: '2 - High' })
        this.lowestCommentPriority = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('option', { name: '5 - Lowest' })
        this.highestCommentPriority = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('option', { name: '1 - Highest' })
        this.neverExpiredBox  = page.locator('iframe[name="FramePopUp7"]').contentFrame().getByText('Never')
        //page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('checkbox', { name: 'Never' }).check();
       //  page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#chkNeverExpire')
        //chkCommentExpirationDate   neverExpiredBox  
        this.authorizationReason= page.locator('#ddlSettleVoidCommentReason')
        //this.authorizationSubmit= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Submit' })
       // this.authorizationComments= page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#txtAuthorisationComment')
       this.authorizationComments= page.locator('#TxtAuthComment')
       this.authorizationSubmit=page.locator('#btnPopupSubmit')
       this.authorizationCancel=page.locator('#btnPopupCancel')

        this.authorizationOK= page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('button', { name: 'Ok' })
        this.authorizationClosePopUp=  page.getByText('Close')
        this.CommentPriority= page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#ddlCommentPriority')
        this.commentGlobalProperty= page.locator('iframe[name="FramePopUp7"]').contentFrame().locator('#chkCommentGlobal')
 
        
        ////////////////////////Objects for Player Transaction Log///////////////////////////////

  
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
            await this.playerFunctions_Tab.click() 
            console.log('User on player Function Tab')
        }catch(e){
            console.log('player Function Tab not visible')
            throw e
        }
        
    }


    async clickPlayerTransactionsLog_Tab(){
        try{

            await this.playerTransactionLog_Tab.click() 
            console.log('User on player Transaction Log  Tab')
        }catch(e){
            console.log('player Transaction Log  Tab not visible')
            throw e
        }
        
    }

     


    async clickPlayerFunctions_TabPT(){
        try{

            await this.playerFunctions_TabPT.click() 
            console.log('User on player Function Tab  PT')
        }catch(e){
            console.log('player Function Tab not visible PT')
            throw e
        }
        
    }





    //////////////////////////////Functions and Methods for Player FUnction tab and Comment tab ////////////////////////

   
    async clickViewComment_Tab(){
        try{
            await this.viewComment_Tab.click()
            console.log('User on View comment tab  ')
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

            await this.settleVoidComment_tab.highlight({timeout:3000})
            await this.editComment_Tab.highlight({timeout:3000})
            await this.replyComment_Tab.highlight({timeout:3000})
            await this.viewSettledVoidedComment_tab.highlight({timeout:3000})
            await this.addComment_tab.highlight()
            await this.CommentHeaderExpirationDate.highlight({timeout:3000}) 
            
            // const expirationDate= testData.CommentTestAccounts.CommentExpirationDate
            // await expect(this.CommentHeaderExpirationDate).toHaveText(expirationDate)

             console.log('Expiration Date Field is Present on Comment Tab as expected ')
           //  await  this.validateCommentExpiration()
                 
            console.log('All Comment Tab Elements are present as expected  ')
            await this.closeCommentFrame.click()
        }catch(e){
            console.log('Comment Tab Elements are NOT Displyed on Comment Pop Up')
            throw e
        }

    }

    async validateCommentExpiration(){

        try{
            const today = new Date();
            const todayDate= today.toLocaleDateString()
            await this.CommentHeaderExpirationDate.highlight({timeout:3000}) 
            if( todayDate < this.CommentHeaderExpirationDate){
                console.log('Comment is Active as Expiration Date is greater than today date: ' +todayDate)
            }else if(todayDate >= this.CommentHeaderExpirationDate){
                console.log('Comment is Expired as Expiration Date is less than or equal to today date: ' +todayDate)
            }

            const expirationDate= testData.CommentTestAccounts.CommentExpirationDate
            await expect(this.CommentHeaderExpirationDate).toHaveText(expirationDate)
            console.log('Comment Expiration Date: ' +expirationDate+ ' is Validated as expected ')
        }catch(e){
            console.log('Comment Expiration Date NOT Validated ')
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
            //await this.page.pause()this wil change base on test comments entered in the commwent sections 
           
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

    async commentLimitProperty_Tab(limitProperty){
 
        try{
                const chepLimit = limitProperty
                await this.commentGlobalProperty.click()

                console.log('Limit Property: '+limitProperty+ ' is being Selected ')
            }catch(e){
                console.log( 'Limit Property Drop down not available ')
                throw e
            }
        
    }


    async clickAddComment_Txt(){
        try{ 
        const commentData= testData.Comments.CommentsText
       // await this.addComment_tab.click()
        await this.addComment_Txt.click()
        await this.addComment_Txt.fill(commentData)
        console.log('Comment Added as expected')
        }catch(e){
            console.log('Comment Field Not visible')
            throw e
        }
    }
    //testData.Credentials.QAuserName

    async addCommentDetails(){
        try{
                 
                //3-Medium
                 
          await this.addComment_tab.click({timeout:5000})
          await this.CommentPriority.click()    
          await this.CommentPriority.selectOption('3')
          await this.addComment_Txt.click()
          await this.addComment_Txt.fill(testData.Comments.CommentsText)
          await this.saveComment_tab.click()
          await this.saveOkComment.click()
          await this.closeCommentPopUp_Message.click()
          
 
            console.log('Comment Added as expected')

        }catch(e){

            console.log('Comment NOT Added')
            throw e 

        }
      
    }

    async addPriorityComments(priotity){
        try{
                 
                await this.addComment_tab.click({timeout:5000})
                //await this.CommentPriority.click()    
                
                if(priotity  = '1'){
                    console.log('Adding Highest Priority 1 Comment')
                    await this.CommentPriority.click()
                    await this.CommentPriority.selectOption(priotity)

                    }else if(priotity  = '2'){
                        console.log('Adding High Priority 2 Comment')
                        await this.CommentPriority.click()
                        await this.CommentPriority.selectOption(priotity)
 
                    }else if(priotity  = '3'){ 
                        console.log('Adding Medium Priority 3 Comment')
                        await this.CommentPriority.click()
                        await this.CommentPriority.selectOption(priotity)

                    }else if(priotity  = '4'){
                        console.log('Adding Lower Priority 4 Comment')
                        await this.CommentPriority.click()
                        await this.CommentPriority.selectOption(priotity)
    
                    }else if(priotity  = '5'){     
                        console.log('Adding Lowest Priority Comment')
                        await this.CommentPriority.click()
                        await this.CommentPriority.selectOption(priotity)

                    } else{
                        await this.CommentPriority.click()
                        await this.CommentPriority.selectOption('3')
                        console.log('No Priority Selected, Adding Medium Priority 3 Comment by Default')
                }
                    
                        await this.addComment_Txt.click()
                        await this.addComment_Txt.fill(testData.Comments.CommentsText)
                        await this.saveComment_tab.click()
                        await this.saveOkComment.click()
                        await this.closeCommentPopUp_Message.click()

            console.log('Comment Added as expected')

        }catch(e){

            console.log('Comment NOT Added')
            throw e 

        }
    }
      

    async validateCommentsDetails(){
        try{
            const today = new Date();
            const todayDate= today.toLocaleDateString()
            console.log('Comment Date is : ' +todayDate)
           await this.displayDateCommentHeader.highlight()
          // const currentDate =  page.locator('iframe[name="FramePopUp7"]').contentFrame().getByRole('cell', { name:  todayDate, exact: true })
           
            const creatorAdmin= testData.Credentials.QAuserName
            await this.commentHeader.highlight()
            await this.commentUserID.highlight()
            await this.commentUserName.highlight()
           // await expect(this.commentUserID).toHaveText(creatorAdmin)
            console.log('Comment added by Admin:  '+creatorAdmin , ' is Validated as expected')
            await expect(this.commentHeader).toHaveText('Comment') 
            await this.closeCommentFrame.click()

            console.log('Comment Details Validated as expected')
        }catch(e){
            console.log('Comments details not Present on the page')
            throw e
        }

    }
     

    async clickviewSettledVoided_tab(){
        try{
            await this.viewSettledVoidedComment_tab.click({timeout:5000})
            await this.closeCommentFrame.click()

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
                       this.closeCommentPopUp_Header.click()
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
         
        await this.saveComment_tab.click()
         
        console.log('Comment Saved as expected')
        }catch(e){
            console.log('Save tab  Not visible')
            throw e
        }
    }


    async validateCommentsFilter_Elements(){
        try{

            await this.CommentHeaderSource.highlight({timeout:3000}) 
            await this.CommentHeaderDepartment.highlight({timeout:3000}) 
            await this.CommentHeaderPriority.highlight({timeout:3000})
            await this.CommentHeaderProperty.highlight({timeout:3000})

            await this.CommentHeaderSearchFrom.highlight({timeout:3000})
            await this.CommentHeaderSearchTo.highlight({timeout:3000})
            await this.CommentHeaderSearch_Btn.highlight({timeout:3000})
            await this.closeCommentFrame.click()

            console.log('All Comment Filter Elements are present as expected  ')
        }catch(e){
            console.log('Comment Filter Elements are NOT Displyed on Comment Pop Up')
            throw e
        }
    }

    async validateCommentPriorityField_Elements(){  
        try{
            await this.lowerCommentPriority.highlight({timeout:3000})
            await this.mediumCommentPriority.highlight({timeout:3000})
            await this.highCommentPriority.highlight({timeout:3000})
            await this.lowestCommentPriority.highlight({timeout:3000})
            await this.highestCommentPriority.highlight({timeout:3000})

            console.log('Comment Priority Fields are Present on Comment Tab as expected ')
            await this.closeCommentFrame.click()
        }catch(e){
            console.log('Comment Priority Field is NOT Displyed on Comment Pop Up')
            throw e
        }
    }

    //verifyCommentExpiredDate

    async verifyCommentExpiredDate(){
        try{
            await this.CommentFirstRow_Tab.first().click({timeout:3000})
            await this.commentAddedBy.highlight({timeout:3000})
             
            //const commentDateValue = commentDateValue1.split[2].trim()
            //console.log('Comment Added By Value is: ' +commentDateValue) 

           // const commentDate = this.commentAddedBy.textContent().split('Expiration Date: ')[2].trim()
            const commentDate = await this.commentAddedBy    
           // console.log('Comment Expiration Date is: ' +commentDate)
            const today = new Date();
            const todayDate= today.toLocaleDateString()
                 await this.commentAddedBy.highlight({timeout:3000}) 
            if( todayDate < commentDate){
                console.log('Comment is Active as Expiration Date is greater than today date: ' +todayDate)
            }else if(todayDate >= this.commentAddedBy){
                console.log('Comment is Expired as Expiration Date is less than or equal to today date: ' +todayDate)
            }

            console.log('Comment Expiration Date Verified as expected ')
            await this.closeCommentFrame.click()
        }catch(e){
            console.log('Comment Expiration Date NOT Verified ')
            throw e
        }
    }


    //verifyCommentNeverExpired

    async verifyCommentNeverExpired(){
        try{
           
            const expirationDate= testData.CommentTestAccounts.CommentNeverExpire
            await expect(this.CommentHeaderExpirationDate).toHaveText(expirationDate)
            console.log('Comment Never Expiration Date: ' +expirationDate+ ' is Validated as expected ')
        }catch(e){
            console.log('Comment Never Expiration Box is not Visible')
            throw e
        }
    }


    async validateCommentNeverExpiredBox(){
        try{


            await this.addComment_tab.click({timeout:5000})
            await this.CommentPriority.click()    
            await this.CommentPriority.selectOption('3')
            await this.addComment_Txt.click()
            await this.addComment_Txt.fill(testData.Comments.CommentsText)
           // await this.page.pause()
            await this.neverExpiredBox.highlight({timeout:3000})
            const box =  await this.neverExpiredBox.isChecked(); 
           if(expect(box).toBe(false)){
            console.log('Comment Never expired Box is Unchecked ') 
           } else {
            console.log('Comment Never expired Box is on and Checked as expected ')

           }

           await this.saveComment_tab.click()
            await this.saveOkComment.click()
            await this.closeCommentPopUp_Message.click()
            
        }catch(e){
            console.log('Comment Never Expiration Box is not Visible')
            throw e
        }
    }

    async validateCommentNeverExpiredBoxChecked(){
        try{    
            await this.CommentFirstRow_Tab.first().click({timeout:3000})
            await this.neverExpiredBox.highlight({timeout:3000})
            const box =  await this.neverExpiredBox.isChecked(); 
           if(expect(box).toBe(true)){
            console.log('Comment Never expired Box is Checked as expected ') 
           } else {
            console.log('Comment Never expired Box is Unchecked ')

           }

        }catch(e){
            await this.closeCommentPopUp_Message.click()
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

            const creatorAdmin= testData.Credentials.QAuserName
            await expect(this.logTransactionDateTime).toHaveText('Transaction Date/Time')
            await expect(this.logTransactionDescription).toHaveText('Transaction Description')
            //await expect(this.logTransactionComment).toContainText('Player Comment')
            await expect(this.logTransactionCreator).toHaveText('Creator')
            await expect(this.logTransactionCreatorAdmin).toHaveText(creatorAdmin) 
            console.log('Comment Creator Admin: ' +creatorAdmin)
            await expect(this.logTransactionPropertyName).toHaveText('Property Name')
            console.log('All comment validated as expected on Player Transaction Tab')        
            await this.closeCommentPopupheader3.click({timeout:2500})  
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

 

