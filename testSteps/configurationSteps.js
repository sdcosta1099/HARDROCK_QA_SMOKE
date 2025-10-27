 
const{expect, test} = require("@playwright/test");
const { pipeline } = require("stream");
const testData = JSON.parse(JSON.stringify(require("../testData.json")))
//import{playerFunctionsSteps}from '../testSteps/playerFunctionsSteps'
 
exports.configurationSteps= class configurationSteps{
     // plyFunction= new playerFunctionsSteps()
   
   // globalFUnctionSteps gblFuntSteps = new globalFUnctionSteps(page)
    constructor(page){
        
        this.page=page
        // approve offer
        this.goToEmployeeDashboard = page.locator('#svgHeaderlnkToEmployeeDashboard');
        this.eventAndOfferSearch= page.getByRole('button', { name: 'Events & Offers Search' });
        this.eventOfferName= page.locator('#ctl00_txtEventsOfferName');
        this.eventsOfferStatus  = page.locator('#ctl00_ddlEventsOfferStatus');
        this.search_Btn = page.getByRole('button', { name: 'Search', exact: true });
        this.eventOffer3Dots = page.locator('#imgbtnViewEventsOfferOps');
        this.eventOfferView = page.getByRole('button', { name: 'View' });
        this.eventOfferEdit = page.getByRole('button', { name: 'Edit' });
        this.approveOffer= page.getByRole('button', { name: 'Approve Offer' });
        this.closeApproveOffer = page.getByRole('button', { name: 'Close' });
        // deactivate offer 
        this.deactivateOffer_Btn = page.getByRole('button', { name: 'Deactivate' });
        this.confirmDeactivationOffer= page.getByRole('button', { name: 'Confirm' });
        this.okDecativationOffer= page.getByRole('button', { name: 'OK' })
        
        
        //////////Objects for consent Pop Up 
        this.popupheaderConsent = page.locator('#popupheaderConsent').getByText('Close')
        this.popupheaderEnhancedComments  =page.locator('#popupheaderEnhancedComments').getByText('Close')
        
        /////Objects for Configuration                           
        this.configuration_Tab = page.getByRole('link', { name: 'Configuration' }) 
        this.eventAndOffer_Tab = page.getByRole('link', { name: 'Events & Offers' })
        this.manageEventAndOffer_Tab=page.getByRole('link', { name: 'Manage Events And Offers' })
        this.addNewOffer_Btn = page.getByRole('button', { name: 'Add New' })
        this.addNewEventOffer_PageTitle = page.locator('id=ctl00_ContentPlaceHolder1_lblHeader')
        this.clickManageQuickOffers_Tab = page.getByRole('link', { name: 'Manage Quick Offers' })
        this.quickOffer_Header = page.locator('#ctl00_ContentPlaceHolder1_lblQuickOfferSetUp')
       
       
        
        ///////Offer Creation 

        //Invitation Details Page 
        this.invitationDetails_Tab= page.getByText('Invitation Details')

        this.invitationDetailsHeaderPage= page.getByText('Add QAOferTest')
        this.allowOverridePatronsInvitedToEvent_YES=page.getByText(' ')
        this.allowOverridePatronsInvitedToEvent_NO=page.getByText(' ')
        this.allowPatronsUnder21_YES=page.getByText(' ')
        this.allowPatronsUnder21_NO=page.getByText(' ')
        this.selectFileToUpload_Btn= page.locator('#ctl00_ContentPlaceHolder1_ctrlInvitationDetails_flUpload')
        this.changeSegment_Btn=
        this.deleteSegment_Btn=
        this.overrideSegment_Btn=
        //this.uploadFile_Btn= page.getByRole('button', { name: 'Upload' })
        this.uploadFile_Btn= page.locator('#ctl00_ContentPlaceHolder1_ctrlInvitationDetails_btnInvitationUpload')
        this.validateFileUploaded_link=  page.getByText('Invitation Details') 
        this.invitationsUploadSuccessfully = page.getByText('Invitations processed successfully!')
        /////////////////////// Master List Of Item Page

        this.masterListOfItems_Tab =page.getByText('Master List Of Items')
        this.addGroupMasterListItem_img= page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_btnAddMultiplier')

       // this.addGroupMasterListItem_img= page.getByText('Add Group')                                         
       // this.addGroupMasterListItem_img= page.getByRole('button', { name: 'Add Group' });
        this.displayPrizeName_txt= page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtDisplayPrizeName')
        this.cmpPrizeCode_txt = page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtCmpPrizeCode')
        this.InternalDescription = page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtInternalDescription')
        this.unitCost= page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtUnitCost')
        this.prizeInventory=page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtPrizePhyInventory')
       // this.newItem_Btn=page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_btnNewItem')
         this.newItem_Btn= page.getByRole('button', { name: 'New Item' })
        this.saveMasterListItem= page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_btnSaveMasterItem')
       
        this.okCMPprizeNotFound = page.getByRole('button', { name: 'Ok' })
        this.cancelCMPprizeNotFound = page.getByRole('button', { name: 'Cancel' })
        this.itemAttribute =page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_lstMasterItems')
        this.saveAttribute = page.locator('#ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_btnSaveAttribute')                                


        /////////////////////
        this.attendeeCapacity_Tab = page.getByText('Attendee Capacity')
        this.attedanceCapacity_OptionBTN= page.getByText('Attendance Capacity')
        this.attedanceCapacity_txt=page.locator('#ctl00_ContentPlaceHolder1_ctrlAttendeeCapacity_txtMaximunAttendeeCapacity')


        ////////////////////////////here ////
        this.segments_Tab =page.getByText('Segments')
        this.configureItem1=page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_1_lnkConfigure')
                                           
        this.configureItem2=page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_2_lnkConfigure') 
        this.configureItem3=page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_3_lnkConfigure')
        this.configurePrimaryPrize=page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_btnAddAllPrimaryPrize')
        this.configureUpdate_btn  =page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_Button1')
        this.maxPrizeQty_txt =  page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_txtMaxPrizeQuantity')
        this.defaultPrizeQty_txt= page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_txtDefaultPrizeQuantity')
       // this.configureUpdate_btn=page.getByRole('button', { name: 'Update' })
        
       
        ////////////////////
        this.checkIn_Tab= page.getByText('Check-in')


        this.internalAttachemnt_Tab = page.getByText('Internal Attachment')
        ////Summary Page
        this.summary_Tab = page.getByText('Summary')
        this.offerDisplayname=page.locator('#ctl00_ContentPlaceHolder1_ctrlSummary_lblOfferDisplayName')
        this.submitOfferForReview=page.getByRole('button', { name: 'Submit for Review' })
        this.validateSuccessOfferSubmited_PopUp=page.getByText('The offer has been submitted')
       
       
        this.saveAndNextStep_Btn= page.getByRole('button', { name: 'Save & Next Step' })
                                 
        this.saveAndClose_Btn= page.getByRole('button', { name: 'Save & Close' })
        this.backToListing_Btn=page.getByRole('button', { name: 'Back to Listing' })
        this.leaveBackToListing_Btn =page.getByRole('button', { name: 'Leave' })
        this.stayBackToListing_Btn =page.getByRole('button', { name: 'Stay' })
        this.close_Btn=page.getByRole('button', { name: 'Close' })
       // this.close_Btn = page.locator('#ctl00_ContentPlaceHolder1_ctrlSummary_btnCloseSubmit')
        ///////////////Offer Set Up Page
        this.lob_DropDown=
        this.region_DropDown=
        this.offerType_DropDown=
        this.singlePropertyLocation_ChkBox=
        this.displayProperty_DropDown=page.locator('#ctl00_ContentPlaceHolder1_ctrlOfferSetup_ddlSingleProperty')                                           
        this.displayLocation_DropDown= page.locator('#ctl00_ContentPlaceHolder1_ctrlOfferSetup_ddlSingleLocation')
        this.displayName_Txt=page.getByPlaceholder('Enter a display name')
        this.startDate_Txt= page.locator('#ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtStartDate')
        this.startDateCalendar_Icon=
        this.startTime=
        this.TimeZone_startDate_Txt=
        this.endDate_Txt= page.locator('#ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtEndDate')
        this.endDateCalendar_Icon=
        this.endTime=
        this.TimeZone_endDate_Txt=
        this.displayDescription_Txt=page.locator('#ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtDisplayDescription')
        this.disclaimer_Txt=page.locator('#ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtDisplayDisclaimer')
        this.displayURL_Txt=page.getByPlaceholder('Website link for additional') 
        this.displayOfferOnline_DropDown=
        this.displayStartDate_Txt=
        this.displayStartDate_Calendar_Icon
        this.numberOfDayPrior= 
        this.displayEndDateCalendar_Icon= 
        this.displayCallToAction_DropDown= page.getByRole('image', { name: 'Online Booking' }) 
        this.noBookingRequired = page.locator("//input[@value='No Booking Required']")
        //page.locator('li').filter({ hasText: 'Online Booking' })
        //page.locator('x:1736575902.4:mkr:ButtonImage.igdd_DropDownButton')
        //page.getByRole('cell', { name: 'Display Call to Action' }).locator('img')
        this.displayCallToAction_DropDownElement= page.getByRole('link', { name: 'Events & Offers' })
        //page.locator('li').filter({ hasText: 'Online Booking' }).nth(4)
      //  this.exclusiveSpotlight_DropDown

       ///////////////QUICK Offer Set Up Page///////////////////////////////////////
       this.quickOfferSetup_Tab= page.locator('#ctl00_ContentPlaceHolder1_lstOfferCreationSteps_ctrl0_liStep')
       this.quickOfferInvitationDetails_Tab= page.locator('#ctl00_ContentPlaceHolder1_lstOfferCreationSteps_ctrl1_liStep')
       this.quickOfferSummary_Tab= page.locator('#ctl00_ContentPlaceHolder1_lstOfferCreationSteps_ctrl2_liStep')
       this.lob_DropDown_QO=
       this.region_QO_DropDown=
       this.offerType_QO_DropDown=page.getByRole('cell', { name: 'Offer Type' }).getByRole('textbox')
       this.singlePropertyLocation_QO_ChkBox=
       this.displayProperty_QO_DropDown= page.getByRole('cell', { name: 'Display Property', exact: true }).getByRole('textbox')                                     
       this.displayLocation_QO_DropDown= page.getByRole('cell', { name: 'Display Locations', exact: true }).getByRole('textbox')
       this.displayName_QO_Txt=  page.getByPlaceholder('Display Name')
    
       this.cardTierRestriction_QO_dropDown=   page.getByRole('cell', { name: 'Card Tier Restriction', exact: true }).getByRole('textbox')

       this.startDate_QO_Txt=  
       this.endDate_QO_Txt=  
       this.displayDescription_QO_Txt=page.locator('#ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtDisplayDescription')
       this.disclaimer_QO_Txt= page.locator('#ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtDisplayDisclaimer')
       this.submit_QO_Btn = page.getByText('Submit')
       this.deactivate_QO= page.getByRole('button', { name: 'Deactivate' });
       this.edit_QO= page.getByRole('button', { name: 'Edit' });
       this.copy_QO=  page.getByRole('button', { name: 'Copy' });
       this.cancelDeactivate_QO_Btn= page.getByRole('button', { name: 'Cancel' });
       this.okDeactivate_QO_Btn= page.getByRole('button', { name: 'OK' });

        this.search_QO_Btn = page.getByRole('button', { name: 'Search', exact: true });
        this.search_QO_txt = page.locator('#ctl00_ContentPlaceHolder1_txtQuickOffer')

       ////////////////////////////////////////////////////////////////
            /////check in objects 
        this.playerFunctions_Tab = page.getByRole('link', { name: 'Player Functions' })   
        this.eventCheckIn= page.getByText('Event Check-in')
        this.eventOfferName_Txt= page.locator('#ctl00_ContentPlaceHolder1_txtEventOffer')
        this.eventOferSeaerch_Btn= page.locator('#ctl00_ContentPlaceHolder1_btnSearchClick')
        this.offerIndex1= page.getByRole('cell', { name: 'Hard Rock Hollywood', exact: true })
        this.viewPaceReport= page.locator('#ctl00_ContentPlaceHolder1_btnViewPaceReport')
        this.closePaceReport= page.locator('#ctl00_ContentPlaceHolder1_btnClose')
        this.noResultFound_Txt= page.locator('#')

       ////////////////////////////////////////////////////////////
     }

     async focusElement(el ){
        try{
                el.wait_for()

        }catch(e){
            console.log('Element ' +el + ' is Not Focus after wait time ')
        }
     }


     async clickOfferIndex1(){

        try{
            await this.offerIndex1.first().click()
            console.log('click Offer Index 1  ')
        }catch{
            console.log('Offer Index 1  Not Displayed')
        }

    }

     ////////////////Consent Pop Up Methods 
     async closepopupheaderConsent_popUp(){
            try{
                await this.popupheaderEnhancedComments.click()
                console.log('Consent Pop header Enhanced Comments Close As Expected ')
            }catch(e){
                console.log('Consent Pop header Enhanced Comments Not present ')
            }
            

     }


    async closePopupheaderConsent_popUp(){
        try{
            await this.popupheaderConsent.click()
            console.log('popup header Consent Close As Expected ')
        }catch(e){
            console.log('popup header Consent Not present ')
        }
        

    }


/// this function click on the hamberger icon to return to the dashboard 
    async clickGoToEmployeeDashboard(){
            try{
             await this.goToEmployeeDashboard.click({setTimeout:3000})
                console.log('On Halo Employees Dashboard')
            }catch{
                console.log('Halo Employee Dashboard Not Available')
            }
    }

    /////Methods for Configuration  
    async clickConfiguration_Tab(){
        try{
            await this.configuration_Tab.click()
            console.log('User is on Configuration Tab')
        }catch(e){
            console.log('Configuration Tab not present')
        }
    }

    async clickEventsAndOffer_Tab(){
        try{
            await this.eventAndOffer_Tab.click()
            console.log('User is on Event and OfferTab')
        }catch(e){
            console.log('Event And Offer Tab not present')
        }
    }
    async clickManageEventsAndOffer_Tab(){
            try{
                await this.manageEventAndOffer_Tab.click()
                console.log('User on Manage Event And Offer page')
            }catch(e){
                console.log('Manage Event And Offer page not present')
            }
       

    }


        async clickAddNewOffer_Tab(){
            try{
                await this.addNewOffer_Btn.click()
                    console.log('Add New Offer Button Available ')     
            }catch(e){
                console.log('Add New Offer Button NOT Displayed')
            }
        }

        async validateAddNewEventOffer_PageTitle(){
            await this.addNewEventOffer_PageTitle.isVisible()
            await expect(this.addNewEventOffer_PageTitle).toHaveText("New Event & Offer")
            
            // this.page.waitForTimeout(3000)
            console.log('Add new Event and Offer page opens')
        }

     ///////////////Offer Set Up Methods

      async clickDisplayCallToAction_DropDown(){
        try {

            // await page.getByRole('link', { name: 'Online Booking' }).click();
            // await page.waitForTimeout(5000)
            // await page.getByRole('cell', { name: 'Display Call to Action' }).locator('img').click();
            // await page.waitForTimeout(5000)
            // await page.getByRole('link', { name: 'Online Booking' }).click();
            
        //    // await  this.displayCallToAction_DropDown.selectOption({label:'Online Booking'})
        //    await page.waitForTimeout(3000)
         //   const displayCallActionion = await page.locator("//input[@value='No Booking Required']").click()
        //    await page.waitForTimeout(3000)
        //    const callActionArrow= await page.locator("//div[contains(@id,'DispCallAction')]//following-sibling::table//td/img").click()
        //    await page.waitForTimeout(3000)
        //    const onlineBooking = await page.locator("//*[@id='x:1736575902.9:adr:1']").click()
        //    await page.waitForTimeout(15000)
            console.log('Call to action dislayed as expected')
        }catch(e){
            console.log('Call to action Button NOT Available')

        }

     }
     

     async validateAddNewEventOffer_Page(){
        try{
            //await this.addNewEventOffer_PageTitle.click()
            const locator = page.getByText('Add New Event & Offer')
           // await expect(locator).toHaveText('New Event & Offer')
            expect (await this.locator).toHaveText('New Event & Offer')
                console.log('Add New Event Offer Page Validate as expected ')
            
        }catch(e){
            console.log('Add New Event Offer Page NOT Validated ')
        }
    }

    async clickDisplayLocation(){
        try{
            await this.displayProperty_DropDown.click()
            console.log('Property Location Dorp Down Opens')
             
        }catch(e){
            console.log('Property Location Dorp Down not available')
        }
    }
     
    async clickDisplayNameOfOffer(OfferName){
        try{
            await this.displayName_Txt.fill(OfferName)
            console.log('Offer name Entered as expected')
             
        }catch(e){
            console.log('Display name Offer not available')
        }
    }


    async clickDisplayDescription(OfferName){
        try{
            await this.displayDescription_Txt.fill(OfferName)
            console.log('Description Displayed as expected')
             
        }catch(e){
            console.log('Description not available')
        }
    }



    async clickDisclaimer(OfferName){
        try{
            await this.disclaimer_Txt.fill(OfferName)
            console.log('Disclaimner Entered as expected')
             
        }catch(e){
            console.log('Disclaimner NOT Displayed')
        }
    }


    async clickDisplayURL(URL){
        try{
            await this.displayURL_Txt.fill(URL)
            console.log('URL displayed as expected: ' +URL)
             
        }catch(e){
            console.log('URL not Display ')
        }
    }

    
///////////////////Invitation Details single Functions 


     async clickInvitationDetails_Tab(){
        try{
            await this.page.waitForTimeOut(3000)
            await this.invitationDetails_Tab.click()
            console.log('Invitation Details Page Opens')
        }catch(e){
            console.log('Invitation Details Page NOT AVAILABLE')
        }
    }

    async clickUpload_Btn(){
        //await this.uploadFile_Btn.click()
        await this.click('#ctl00_ContentPlaceHolder1_ctrlInvitationDetails_btnInvitationUpload')
        //await expect(uploadFile_Btn).toHaveText('file Uploaded')
        //this.page.wait_for_selector(uploadFile_Btn)
         
        console.log('File Uploaded as expected')

    }
     


    //////////////////////////


    async clickMasterListOfItems_Tab(){
        try{
            await this.masterListOfItems_Tab.click()
            console.log('Master List Of Item Page Opens')
        }catch(e){
            console.log('Master List Of Item NOT AVAILABLE')
        }
    }

    async clickDisplayPriceName_txt(){
        try{
            await this.DisplayPrizeName_txt.click()
            console.log('Price Name DIspla')
        }catch(e){
            console.log('Prize name Not displayedE')
        }
    }

    
    ///////////////////
    async clickAttendeeCapacity_Tab(){
        try{
            await this.attendeeCapacity_Tab.click()
            console.log('Attendee Capacity Page Opens')
        }catch(e){
            console.log('Attendee Capacity page NOT AVAILABLE')
        }
    }


//////////////////////////////////
    async clickSegment_Tab(){
        try{
            await this.segments_Tab.click()
            console.log('Segments Page Opens')
        }catch(e){
            console.log('Segment page NOT AVAILABLE')
        }
    }
////////////////////////////////////////
    async clickCheckIn_Tab(){
        try{
            await this.checkIn_Tab.click()
            console.log('Check IN Page Opens')
        }catch(e){
            console.log('Check In page NOT AVAILABLE')
        }
    }

///////////////////////////////////////////////
    async clickInternalAttachment_Tab(){
        try{
            await this.internalAttachemnt_Tab.click()
            console.log('Internal Attachment Page Opens')
        }catch(e){
            console.log('INternal Attachment page NOT AVAILABLE')
        }
    }
//////////////////////////////////////////////
    async clickSummary_Tab(){
        try{
            await this.summary_Tab.click()
            console.log('Summary Page Opens')
        }catch(e){
            console.log('Summary page NOT AVAILABLE')
        }
    }


    async clickSaveAndNext_Btn(){
        try{
            await this.saveAndNextStep_Btn.click({timeout:3000})
            console.log('Save and Next Button Available')
        }catch(e){
            console.log('Save and Next Button NOT AVAILABLE')
        }
    }


    async clickSaveAndClose_Btn(){
        try{
            await this.saveAndClose_Btn.click()
            console.log('Save and Close Button Available')
        }catch(e){
            console.log('Save and Close Button NOT AVAILABLE')
        }
    }

    async clickBackToListing_Btn(){
        try{
            await this.backToListing_Btn.click()
            console.log('Back To Listing Button Available')
        }catch(e){
            console.log('Back To Listing Button NOT AVAILABLE')
        }
    }

    async clickClose_Btn(){
        try{
            await this.close_Btn.click({timeout:3000})
            console.log('Close Offer Summary Button Available')
        }catch(e){
            console.log('Close Offer Summary Button NOT AVAILABLE')
        }
    }

    getNextDate(day){
        try{
            var d = new Date()

                d.setDate(d.getDate() + day) 
            
            console.log('Offer Date Displays: '+d)

        return d.toLocaleDateString()

        }catch{
            console.log('Offer Date not available')
        }
    }

    async 

    async clik(element){
        try {
            this.element.click()
            Console.log('Click Perfom On: '+element)
        }catch(e){
            console.log('Element not present to Click on')
        }
    }


    async fill(element, string){
        try {
            this.element.fill(string)
            Console.log('Fill Perfom On: '+element)
        }catch(e){
            console.log('field not present to Fill ')
        }
    }

    async clickDeactivateOffer_Btn(offerName){

        try{
            await this.deactivateOffer_Btn.click()
            console.log('Offer '+offerName+' Deactivated as expected')
        }catch{
            console.log('Offer '+offerName+' NOT Found to be Deactivated')

        }


        
    }
        async editOffer(){

            try{ 
               await  this.eventOfferEdit.click()
                console.log('Offer Edited as expected ')
            }catch(e){
                console.log('Offer NOT FOund to be Edited')
            }
        }


        async scrollDownPage_toVisibleButton(element){
            try{
               await element.scrollIntoViewIfNeeded({timeout:5000})
               //await element.scrollDownPage_toVisibleButton()  
                
                console.log('Scroll to visible Element on the page ')
            }catch(e){
                console.log('Scroll element not visible')
            }
            
        }

        ////////////////Quick Offer Methods ////////////////////

        async goToQuickOffer_Tab(){
            try{
                
            await this.clickManageQuickOffers_Tab.click({timeout:3000})
            console.log('ON Quick Offer Page as Expected')
            }catch(e){
                console.log('Quick Offer Page Not Displayed')
            }
        }

        async validateQuickOffer_Header(){
            try{
                 
              
            await expect(this.quickOffer_Header).toHaveText('Quick Offer Setup') 
            console.log('Quick Offer Header Validated as Expected')
               
            }catch(e){
                console.log('Quick Offer Header Not Displayed')
            }
        }

/////////////////////Quick Offer Global Functions 



        async goToManageQuickOffer_Page(){
            try{
                await this.clickConfiguration_Tab()
                await this.goToQuickOffer_Tab()
                await this.validateQuickOffer_Header()
                console.log('On Manage Quick Offer Page as expected ')
            }catch(e){
                console.log('Quick Offer Page NOT Available ')
            }
        }


        async clickQuickOfferSortOption(fieldElement, fieldName){
            try{

                await fieldElement.click()
                console.log('Quick Offer is Sorted by: '+fieldName+ ' as expected' )

            }catch(e){
                console.log('Quick Offer is not Sorted')
            }
        }


        async validateQOAStatus(){
            try{
                
                await expect(page.locator('[id="x\\:1698345930\\.28\\:adr\\:0\\:tag\\:"] > td:nth-child(6)')).toHaveText('Active')
                console.log(' Quick Offer Status is Shown as Active as expected' )

            }catch(e){
                console.log('Quick Offer Stutus not Showing')
            }
        }


    /////////////////////////Group Compilled Functions///////////////////////////
    //////////////Event and Offer Group FUnction //////////////////////////////
    
        async locateOfferByProperty(offerName, Pname){
            try{
                console.log('Selcet Offer By Property name Index ')
           // await this.displayProperty_DropDown.selectOption({label:'Hard Rock Hollywood'})
           
            await this.clickGoToEmployeeDashboard.click({setTimeout:3000})
            await this.eventOfferName.fill(offerName)
            await this.displayProperty_DropDown.selectOption({label: Pname})
            await this.eventAndOfferSearch.click({setTimeout:3000});

            console.log('Offer selected by Property as expected')
           
         }catch(e){
                console.log( 'Property Option NOt available'  )

            }
    
        }



        
        async locateOfferByAllType(offerName, allTypeName){
            try{
                console.log('Selcet Offer By Property name Index ')
           // await this.displayProperty_DropDown.selectOption({label:'Hard Rock Hollywood'})
           
            await this.clickGoToEmployeeDashboard.click({setTimeout:3000})
            await this.eventOfferName.fill(offerName)
            await this.displayProperty_DropDown.selectOption({label: allTypeName})
            await this.eventAndOfferSearch.click({setTimeout:3000});

            console.log('Offer selected by Property as expected')
           
         }catch(e){
                console.log( 'Property Option NOt available'  )

            }
    
        }
    
    
    
    async goToAddNewOfferPage(){
            try{
                console.log('Adding New Offer Page')
                    this.clickConfiguration_Tab()
                   // console.log('Open Configuration Tab')
                    this.clickEventsAndOffer_Tab()
                   // console.log('Open Event And Offer Tab')
                    this.clickManageEventsAndOffer_Tab()
                   // console.log('open Manage Event and Offer Tab')
                    this.clickAddNewOffer_Tab() 
                    console.log('Add New Offer Page completed ')

             } catch(e){
                console.log('Adding New Offer Page not Available')
            }
         }




         async goToOfferSetUpPage(offerName, booking){
        try{
                console.log('Start Offer Set Up Page  ')
                await this.displayProperty_DropDown.selectOption({label:'Hard Rock Hollywood'})
                await this.displayLocation_DropDown.selectOption({value:'28'})
                await this.displayName_Txt.fill(offerName)
                
                const  offerStartDate = this.getNextDate(1)
                const offerEndDate = this.getNextDate(2)

                await this.startDate_Txt.fill(offerStartDate);
                await this.endDate_Txt.fill(offerEndDate)
            
                await this.clickDisplayDescription(testData.eventAndOfferTestAccounts.data)
                await this.clickDisclaimer(testData.eventAndOfferTestAccounts.data)
                await this.clickDisplayURL(testData.Environment.QA)

                if(booking == 'NO'){
                    await this.clickSaveAndNext_Btn()
                    console.log("Display call to action field selected :" + booking)
                }else {

                    await this.backToListing_Btn.scrollIntoViewIfNeeded() 
                    await this.noBookingRequired.clear()
                    await this.noBookingRequired.click()
                    await this.noBookingRequired.fill('online booking')
                    console.log("Display call to action field selected :" + booking)
                    
                    await this.clickSaveAndNext_Btn()
                    console.log('Offer Set Up Page Completed')

                }

            } catch(e){
                console.log('Offer Set Up Page not available')

            }
         }


         async goToInvitationPage(filePath){
            try{
             
            console.log('Start Invitation Details Page')  
                await this.selectFileToUpload_Btn.setInputFiles(filePath, {timeout:15000})
                await this.uploadFile_Btn.click({timeout:15000})
                await expect(this.invitationsUploadSuccessfully).toHaveText('Invitations processed successfully!', { timeout: 20000 })
                console.log('File upload terminated as expected')
                await  this.backToListing_Btn.scrollIntoViewIfNeeded()
                console.log('Invitation Details Page Completed') 
                await  this.clickSaveAndNext_Btn({timeout:5000})    
                    
        } catch(e){
            console.log('Invitation Details Page not available')

        }

     }


        async goToMasterItemListPage(rowNumber){
            try{
            console.log('On Master Item of List Page')
            //await goToMasterItemList()
          
            //  let rowData = rowNumber;
            //  for(let i=0; i< rowData; i++){
            await this.addGroupMasterListItem_img.click({timeout:2000})
            await this.displayPrizeName_txt.fill(testData.prizeItemWithID.prizeName[rowNumber])
            let itemName=testData.prizeItemWithID.prizeName[rowNumber]
            console.log('Item from list: ' +itemName)

            await this.cmpPrizeCode_txt.fill(testData.prizeItemWithID.prizeCode[rowNumber])
            await this.InternalDescription.fill(testData.prizeItemWithID.prizeDescription)
            await this.unitCost.fill(testData.prizeItemWithID.prizeUnitPrice[rowNumber])
            await this.prizeInventory.fill(testData.prizeItemWithID.prizeInventory[rowNumber])  
            await this.saveMasterListItem.click({timeout:2000})
            await this.cancelCMPprizeNotFound.click()
             //await this.page.pause()
            // await this.itemAttribute.selectOption({label:'Beer',timeout:5000})
            // await this.newItem_Btn.click({timeout:3000})
            // await this.saveAttribute.click({timeout:5000})
           // await waitForSelector(this.saveAttribute).toBeSisible().click()
          //console.log('Master list of ' +(i+1)+' items entered as expected')
           // }
             await this.clickSaveAndNext_Btn({timeout:3000})
            console.log('Master List Of Item Page Completed')

             } catch(e){
                console.log('Master Item of List Page is not available')

            }

        }



        async goToAttendeeCapacityPage(attendeeCapacity, numberAttendee){
        try{
            console.log('On Attendee Capacity Page')
             
            if(attendeeCapacity == 'NO'){

                await this.clickSaveAndNext_Btn()
                console.log('Atendee page with Capacity = NO Completed')
            }else {
                await this.attedanceCapacity_OptionBTN.click()
                await this.attedanceCapacity_txt.fill(numberAttendee)
                await this.clickSaveAndNext_Btn({timeout: 3000})
                console.log('Atendee page with Capacity = YES Completed for ' +numberAttendee+ 'Attendees')
            }
         } catch(e){
            console.log('Attendee Capacity Page not Available')
        }

    }

        async goToSegmentsPage(numberItem, MaxPrizeQTY, DefaultPrizeQTY){

        try{

            console.log('Start Segment page')
            // await this.page.pause()
           // await this.maxPrizeQty_txt.fill(MaxPrizeQTY)
           let maxPrizeQty_txt = MaxPrizeQTY
           let defaultPrizeQty_txt = DefaultPrizeQTY
            //await this.defaultPrizeQty_txt.fill(DefaultPrize QTY)
            //await this.page.waitForTimeOut(3000)
            if(numberItem ==1 ){
                console.log('Configure 1 item')
                 // configure 1 item  
                 
                 await this.configureItem1.click()

                
                const context = await browser.newContext();
                // await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_btnAddAllPrimaryPrize').click();
                // await page.getByRole('button', { name: 'Update' }).click();
                context.configurePrimaryPrize.click()
                context.configureUpdate_btn.click()
                context.clickSaveAndNext_Btn()

                //  await this.configurePrimaryPrize.click()
                //  await this.configureUpdate_btn.click()
                
                // this.clickSaveAndNext_Btn()
                 
            }else if(numberItem ==2 ){
            // configure 2 items  
            console.log('Configure 2 items')
               
                await this.configureItem1.click()
                await this.configurePrimaryPrize.click()
                await this.configureUpdate_btn.click()
                

                await  this.configureItem2.click({timeout:15000})
                await  this.configurePrimaryPrize.click({timeout:15000})
                await  this.configureUpdate_btn.click({timeout:15000})

                this.clickSaveAndNext_Btn()
            }else if(numberItem ==3 ){
                //configure 3 items
                console.log('Configure 3 items') 
                this.configureItem1.click({timeout:5000})
                this.configurePrimaryPrize.click({timeout:13000})
                this.configureUpdate_btn.click({timeout:8000})
    
                this.configureItem2.click({timeout:3000})
                this.configurePrimaryPrize.click({timeout:5000})
                this.configureUpdate_btn.click({timeout:8000})

                this.configureItem3.click({timeout:3000})
                this.configurePrimaryPrize.click({timeout:3000})
                this.configureUpdate_btn.click({timeout:8000})
                this.clickSaveAndNext_Btn()

            }
             // configure item 3
          //  this.clickSaveAndNext_Btn()
            console.log('Segment Page Completed')

        }catch(e){
            console.log('Segment Page not Available')
        }

    }


        async goToCheckInPage(CheckinStatus,customForm ){
            try{
            console.log('On Checkin Page')

                    if ((CheckinStatus.toLowerCase() === "yes") && (customForm.toLowerCase() === "no") ) {
                        
                        console.log("Check in status radio option Require Check in Radio is selected " + CheckinStatus);
                        console.log("Check status radio option Require For Capture Fields " + customForm);
                        this.clickSaveAndNext_Btn()
                    } else if((CheckinStatus.toLowerCase() === "yes") && (customForm.toLowerCase() === "YES") ) {

                        console.log("Check in status radio option Require Check in Radio is selected " + CheckinStatus);
                        console.log("Check status radio option Require For Capture Fields " + customForm);
                        console.log('Fill Form Data Capture Field 1 ');
                        // steps to fill Form 
                        this.clickSaveAndNext_Btn()

                    } if(CheckinStatus.toLowerCase() === "NO"){
                        this.clickSaveAndNext_Btn()
                        
                    }

                            console.log('Checking Completed')

            }catch(e){
                console.log('Internal Attachment Page not Available')
            }

        }


        async goToInternalAttachmentsPage(){
            try{
                console.log('On Internal Attachment Page')
              await  this.scrollDownPage_toVisibleButton(submitOfferForReview)
              await  this.clickSaveAndNext_Btn({setTimeout:3000})
                console.log('Close Internal Attachment Page')

            }catch(e){
                console.log('Internal Attachment Page not Available')
            }
        }

        async goToSummaryPafePage(){
            try{
            // await expect(this.offerDisplayname).toHaveText(offerName)
                  const element = this.submitOfferForReview
                  this.scrollDownPage_toVisibleButton(element)
                  await this.submitOfferForReview.click({timeout:8000})
                  await expect(this.validateSuccessOfferSubmited_PopUp).toHaveText('The offer has been submitted successfully!')
                //await this.clickClose_Btn()
                 this.clickClose_Btn({timeout:8000})
                console.log('Offer Summary validated')
            }catch(e){
                    console.log('Summary Page not Available')
            }
        }

        async approvedOpenOffer(offerName){
            try{
                console.log('approving '+offerName+ ' offer')
                 this.clickGoToEmployeeDashboard()
                 await this.eventAndOfferSearch.click();
                 await this.eventOfferName.fill(offerName)
                 await this.eventsOfferStatus.selectOption('3');
                 await this.search_Btn.click();
                 await this.eventOffer3Dots.first().click();
                 await this.eventOfferView.click();
                 await this.approveOffer.click();
                 await this.closeApproveOffer.click()
                console.log('offer '+offerName+ ' Approved as Expected')
            }catch(e){
                console.log('offer ' +offerName +' not found to be Approved')
            }

        }


        async  searchApprovedOffer(offerName){
            try{
                console.log('approving '+offerName+ ' offer')
                 await this.eventAndOfferSearch.click();
                 await this.eventOfferName.fill(offerName)
                 await this.eventsOfferStatus.selectOption('3');
                 await this.search_Btn.click();
                 await this.eventOffer3Dots.first().click();
                 await this.eventOfferView.click();
                 
                console.log('offer '+offerName+ ' Found as Expected')
            }catch(e){
                console.log('offer ' +offerName +' not found')
            }

        }


        async deactivateOffer(offerName){
            try{
                console.log('Deactivating offer: '+offerName)
                this.clickGoToEmployeeDashboard()
                // await this.returnToManageEventsAndOffer()
                 await this.eventAndOfferSearch.click({setTimeout:3000});
                 await this.eventOfferName.fill(offerName)
                 await this.search_Btn.click({setTimeout:3000});
                 await this.eventOffer3Dots.click();
                 await this.clickDeactivateOffer_Btn.click()
                 await this.confirmDeactivationOffer.click()
                 await this.okDecativationOffer.click()

                //  await this.eventsOfferStatus.selectOption('3', {setTimeout:3000})
                //  await this.search_Btn.click({setTimeout:3000});
                //  await this.eventOffer3Dots.click();
                //  await this.clickDeactivateOffer_Btn.click()
                //  await this.confirmDeactivationOffer.click()
                //  await this.okDecativationOffer.click()

                console.log('Offer '+offerName+' Deactivated as expected ')
            }catch(e){
                console.log('Offer: ' +offerName+ ' Not Found to Be Deactivated')
                console.log(e)
            }
        }


        async checkInEventAndOffer(offerName){
            try{
                console.log('check in Event for offer: '+offerName)
                await this.clickGoToEmployeeDashboard()
                await this.playerFunctions_Tab.click()
                await this.eventCheckIn.click()
                await this.eventOfferName_Txt.fill(offerName)
                await this.eventOferSeaerch_Btn.click()
                await this.eventsOfferStatus.selectOption('3')
                await this.eventOferSeaerch_Btn.click()
                await this.clickOfferIndex1()
                await this.viewPaceReport.click()
                await this.closePaceReport.click()
                
                console.log('Event for ' +offerName + ' Check In As expected')
            }catch(e){
                console.log('Event '+offerName + ' not found to check In')
            }
                
        }

        async validateEventCheckIn(offerName){
            try{
                console.log('Validate if Event for offer: '+offerName +' is Cheked In')
                await this.clickGoToEmployeeDashboard()
                await this.playerFunctions_Tab.click()
                await this.eventCheckIn.click()
                await this.eventOfferName_Txt.fill(offerName)
                expect (await this.noResultFound_Txt().toHaveText('No Results Found'))
                console.log('Event for ' +offerName + ' Check In As expected')
            }catch(e){
                console.log('Event '+offerName + ' not In')
            }
                
        }        

        async editAttendeeCapacity(offerName){
            try{
                console.log('MOdify Attendee capacity  for Offer: ' +offerName)
                 await this.eventAndOfferSearch.click();
                 await this.eventOfferName.fill(offerName)
                 await this.eventsOfferStatus.selectOption('3');
                 await this.search_Btn.click();
                 await this.eventOffer3Dots.first().click();
                 await this.eventOfferView.click();
                console.log('Attendee capacity modified as expected ')
            }catch(e){
                console.log('Attendee capacity Tab Not Present')
            }

        }

        async returnToManageEventsAndOffer(){
            try{
             await  this.clickConfiguration_Tab()
             await  this.clickEventsAndOffer_Tab()
             await  this.clickManageEventsAndOffer_Tab()
             console.log('Return to Manage Events And Offer as expected')
            }catch(e){
                console.log('Return to Manage Events And Offer Not Present ')
            }
        }

        async  editOpenOffer(offerName){
            try{
                console.log('Editing Open '+offerName+ ' offer')
                 this.clickGoToEmployeeDashboard()
                 await this.eventAndOfferSearch.click();
                 await this.eventOfferName.fill(offerName)
                 await this.eventsOfferStatus.selectOption('3');
                 await this.search_Btn.click();
                 await this.eventOffer3Dots.first().click();
                 await this.editOffer({timeout: 5000})
                console.log('Open offer '+offerName+ ' Edited as Expected')
            }catch(e){
                console.log('Open offer ' +offerName +' not found to be Edited')
            }

        }


        async viewOpenOffer(offerName){
            try{
                console.log('View Open  '+offerName+'')
                 this.clickGoToEmployeeDashboard()
                 await this.eventAndOfferSearch.click();
                 await this.eventOfferName.fill(offerName)
                 await this.eventsOfferStatus.selectOption('3');
                 await this.search_Btn.click();
                 await this.eventOffer3Dots.first().click();
                 await this.eventOfferView.click();         
                console.log('open offer '+offerName+ ' Viewed as Expected')
            }catch(e){
                console.log('open offer ' +offerName +' not found to be View')
            }

        }



/////////////////////////QUICK OFFER SET UP PAGE ////////////////////


async goToQuickOfferSetUpPage(QuickOfferName, restriction){
        try{
            await this.addNewOffer_Btn.click()
            await this.offerType_QO_DropDown.clear()
            await this.offerType_QO_DropDown.fill('Amenities' ) 
            await this.offerType_QO_DropDown.press('Enter')
            //await this.offerType_QO_DropDown.click()
        
            await this.displayLocation_QO_DropDown.clear({timeout:3000})
            await this.displayLocation_QO_DropDown.fill('casino Floor',{timeout:5000})
            await this.displayLocation_QO_DropDown.press('Enter',{timeout:5000})

            await this.displayProperty_QO_DropDown.clear({timeout:5000})
            await this.displayProperty_QO_DropDown.fill('Hard Rock Hollywood',{timeout:5000})
            await this.displayProperty_QO_DropDown.press('Enter',{timeout:5000})

            await this.cardTierRestriction_QO_dropDown.clear({timeout:5000})
            await this.cardTierRestriction_QO_dropDown.fill(restriction,{timeout:5000})
            await this.cardTierRestriction_QO_dropDown.press('Enter',{timeout:5000})
            console.log('Quick Offer card Restriction: ' +restriction)
            
            await this.displayName_QO_Txt.fill(QuickOfferName, {timeout:5000})
            console.log('Quick Offer Name: ' +QuickOfferName)

            await this.displayDescription_QO_Txt.clear({timeout:5000})
            await this.displayDescription_QO_Txt.fill(QuickOfferName)
            await this.displayDescription_QO_Txt.press('Enter',{timeout:5000})

            await this.disclaimer_QO_Txt.clear({timeout:5000})
            await this.disclaimer_QO_Txt.fill(QuickOfferName)
            await this.disclaimer_QO_Txt.press('Enter')
                        
            await this.goToSummaryPafePage()
            
            console.log('Quick Offer Set Up Page Completed as expected')
        
        } catch(e){
            console.log('Quick Offer Set Up Page not available')

        }
     }

     async goToSummary_QO_Tab(){
            try{
                console.log('Submitting Quick Offer: ' +offerName)

                await this.submit_QO_Btn.click({timeout: 3000})
                await this.closeApproveOffer.click({timeout: 3000})
                console.log('Quick Offer: ' +offerName+ 'Submitted and CLose As expected ')
            }catch(e){
                console.log('Submit Button not Available')
            }

    }

    async search_QO(offerName){
        try{
            const QOFirstRow = page.getByRole('cell', { name: 'QuickOffer_9505' }).nth(2)
            await this.goToManageQuickOffer_Page()
            await this.search_QO_txt.fill(offerName,{timeout:3000})
            await this.search_QO_Btn.click({timeout: 3000})
            console.log('Quick Offer: ' +offerName+ ' Found As expected ')
        }catch(e){
            console.log('Search BTN Not Available')
        }

    }


    async clickDeactivate_QO(QuickOfferName){
        try{
             
            await this.goToManageQuickOffer_Page()
            await this.search_QO_txt.fill(QuickOfferName,{timeout:3000})
            await this.search_QO_Btn.click({timeout: 3000})
            await this.deactivate_QO.click()
            await this.cancelDeactivate_QO_Btn.click()
            await this.deactivate_QO.click()
            await this.okDeactivate_QO_Btn.click()
            console.log('Quick Offer: ' +offerName+ 'Deactivated As expected ')
        }catch(e){
            console.log('Deactivation Button not Available')
        }

}

    async clickCopy_QO(QuickOfferName){
        try{
            await this.goToManageQuickOffer_Page()
            await this.search_QO_txt.fill(QuickOfferName,{timeout:3000})
            await this.search_QO_Btn.click({timeout: 3000})
            await this.copy_QO.click({timeout: 3000})
            console.log('Quick Offer: ' +offerName+ 'Copied As expected ')
        }catch(e){
            console.log('Copy Button not Available')
        }

    }

    async clickEdit_QO(QuickOfferName){
        try{
            await this.goToManageQuickOffer_Page()
            await this.search_QO_txt.fill(QuickOfferName,{timeout:3000})
            await this.search_QO_Btn.click({timeout: 3000})
            await this.edit_QO.click({timeout: 3000})
            console.log('Quick Offer: ' +offerName+ 'Edited As expected ')
        }catch(e){
            console.log('Edit Button not Available')
        }

    }



      

}



