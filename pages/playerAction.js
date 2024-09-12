import { test, expect } from '@playwright/test';
import { timeStamp } from 'console';
import exp from 'constants';
import { off } from 'process';
const { setInputFiles } = require('playwright/test');
exports.playerAction = class playerAction {
    constructor(page) {
        this.page = page
        this.configuration_link = page.getByRole('link', { name: 'Configuration' })
        this.itemSearchField = page.getByRole('combobox', { name: 'Enter Keyword or Item No.' })
      //UH_9446
      this.empDashboardButton = page.locator("//a[@id='ctl00_lnkToEmployeeDashboard']")
      this.viewEventsAndOffers = page.frameLocator('#ifrContent').locator("//input[@id='btnViewEventsAndOffers']")
      this.searchOfferInViewEventsAndOffer = page.frameLocator('#ifrContent').locator("//input[@name='txtEventsOfferDisplayName']")
      this.searchOfferInEventsAndOffer= page.frameLocator('#ifrContent').locator("//input[@id='btnSearchClick']")
      this.moreInViewEventsAndOffer = page.frameLocator('#ifrContent').locator("(//a[contains(text(),'More')])[1]")
      this.VOverRideMessage = page.frameLocator('#ifrContent').locator("//span[contains(text(),'This patron has not been invited to the event. Click')]													")
      //UH_9443
      this.startTime = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtStarttime']")
      this.view1 = page.locator("(//input[@value='View' and @class='popup-option'])[1]")
      //this.closeSuccessPopup = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlSummary_btnClose']")
      this.addmasterListItem = page.locator("//input[@title='Add Group']")
      this.displayPrizeName = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtDisplayPrizeName']")
      this.prizeCode = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtCmpPrizeCode']")
      this.internalDescription = page.locator("//textarea[@name='ctl00$ContentPlaceHolder1$ctrlMasterListOfItem$txtInternalDescription']")
      this.unitCost = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtUnitCost']")
      this.physicalInventory = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_txtPrizePhyInventory']")
      this.physicalInventory1 = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlMasterListOfItem$txtPhysicalInventory']")
      this.saveMaster = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_btnSaveMasterItem']")
      this.selectPrize1 = page.locator("//option[contains(text(),'PrizeName1')]");
      this.selectPrize2 = page.locator("//option[contains(text(),'PrizeName2')]");
      this.selectPrize3 = page.locator("//option[contains(text(),'PrizeName3')]");
      this.selectPrize4 = page.locator("//option[contains(text(),'PrizeName4')]");
      this.selectPrize5 = page.locator("//option[contains(text(),'PrizeName5')]");
      this.selectPrize6 = page.locator("//option[contains(text(),'PrizeName6')]");
      this.selectPrize7 = page.locator("//option[contains(text(),'PrizeName7')]");
      this.selectPrize8 = page.locator("//option[contains(text(),'PrizeName8')]");
      this.selectPrize9 = page.locator("//option[contains(text(),'PrizeName9')]");
      this.selectPrize10 = page.locator("//option[contains(text(),'PrizeName10')]");
      this.selectPrize11 = page.locator("//option[contains(text(),'PrizeName11')]");

      this.addNewMasterItem = page.locator("//input[@value='New Item']");
      this.addSaveMasterItemButton = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlMasterListOfItem_btnSaveAttribute']")
      this.attendanceRadioButton = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlAttendeeCapacity_rdAttendeeCapacity_1']");
      this.attendeeCapacityField = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlAttendeeCapacity_txtMaximunAttendeeCapacity']")
      this.submitForReview = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnSubmitForReview']")
      this.offerSubmittedSuccessfullyMessage = page.locator("//span[contains(text(),'The offer has been submitted successfully!')]")      
      //UH_9429
      this.Name = page.locator("//th[contains(text(),'Name')]")
      this.Ascending = page.locator("//img[@title='Ascending']")
      this.Descending = page.locator("//img[@title='Descending']")
      this.DescriptionQuickOffer = page.locator("//th[contains(text(),'Description')]")
      this.StartDate1 = page.locator("//th[contains(text(),'Start Date')]")
      this.EndDate1 = page.locator("//th[contains(text(),'End Date')]")
      this.DisplayDate = page.locator("//th[contains(text(),'Display Date')]")

      //UH_9430
      this.EventsAndOffers = page.locator("//a[contains(text(),'Events & Offers')]")
      this.ManageQuickOffers = page.locator("//a[contains(text(),'Manage Quick Offers')]")
      this.QuickOfferPage = page.locator("//span[contains(text(),'Quick Offer Setup')]")

      //UH_9431
      this.Dropdown = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlView']")
      this.ViewQuickOffer = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlView']")
      //this.SearchQuickOffer = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnSearchClick']")
      this.SearchQuickOffer = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnSearchClick']")
      this.vSelectedOffers = page.locator("//div[@id='ctl00_ContentPlaceHolder1_pnlManageQuickOffer']")

      //UH_9432
      
      this.OfferTypeQuickOffer1 = page.locator("(//img[@mkr='ButtonImage'])[3]")
      this.selectEntertainmentQuickOffers = page.locator("//li//a[contains(text(),'Entertainment')]")
      this.displayPropertyDropdownQuickOffer1 = page.locator("(//img[@mkr='ButtonImage'])[4]")
      this.selectOptionDisplayPropertyQuickOffers = page.locator("//label[contains(text(),'All')]")
      this.displayLocationQuickOffers1 = page.locator("(//img[@mkr='ButtonImage'])[5]")
      this.selectOptionDisplayLocationQuickOffers1 = page.locator("//li[@class='igdd_ListItem  igdd_ListItemActive']")
      this.cardTierRestrictionQuickOffers = page.locator("(//img[@mkr='ButtonImage'])[6]")
      this.selectOptionCardTierRestrictionQuickOffer = page.locator("//input[@class='igdd_ValueDisplay ig_Hover igdd_ValueDisplayHover ']")
    
      
     
      
      //UH_9437
      this.PropertyQuickOffer = page.locator("//select[@name='ctl00$ContentPlaceHolder1$ddlProperty']")

      //UH_9438
      this.ManageEventsAndOffers = page.locator("//a[contains(text(),'Manage Events And Offers')]")
      this.vEventsAndOfferPage = page.locator("//div[@id='dvEventsOffers']")
      this.AddNew = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnEventsOfferAddNew']")
      this.OfferName = page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtEventsOfferDisplayName']")
      this.SearchEventsOffers = page.locator("//input[@id = 'ctl00_ContentPlaceHolder1_btnSearchClick']")
      this.FromDateEventSearch = page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtEventsOfferSearchFromDate']")
      this.ToDateEventSearch = page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtEventsOfferSearchToDate']")
      this.Clear = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnEventsOfferClear']")

      //UH_9439
      this.PropertyEventsAndOffers = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlEventsOfferPageProperty']")

      //UH_9440
      this.TypeEventsAndOffers = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlEventsOfferPageType']")

      //UH_9441
      this.ViewEventsAndOffers = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlEventsOfferView']")
      this.StateEventsAndOffers = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlEventsOfferPageState']")

      //UH_9442
      this.AddNewEventAndOffers = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnEventsOfferAddNew']")
      this.vAddNewEventAndOffers = page.locator('//*[@id="ctl00_ContentPlaceHolder1_ctrlOfferSetup_pnlOffer"]')
      this.DisplayPropertyAddNewEvent = page.locator('//select[@name="ctl00$ContentPlaceHolder1$ctrlOfferSetup$ddlSingleProperty"]')
      this.DisplayLocation = page.locator("//select[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$ddlSingleLocation']")
      this.DisplayName = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$txtOfferDisplayName']")
      this.DisplayDescription = page.locator("//textarea[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$txtDisplayDescription']")
      this.DisplayCallToAction = page.locator("//input[@value='No Booking Required']")
      this.DisplayActionDropdown = page.locator("//input[@value='No Booking Required']/parent::td/following-sibling::td")
      this.selectOnlineBooking = page.locator("(//a[contains(text(),'Online Booking')])[3]")
      this.vStartDateEvent = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$txtStartDate']")
      this.vEndDateEvent = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$txtEndDate']")
      this.vDisplayStartDateEvent = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$txtDisplayStartDate']")
      this.vDisplayEndDateEvent = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$txtDisplayEndDate']")
      this.bookNow = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@value='Book Now']")
      this.checkbox1 = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='ctrlEventCheckInDetail_chkUpdateEmailAddress']")
      this.sendEmail = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@value='Send Email']")
      this.okEmailSentSuccesfully = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@name='ctrlEventCheckInDetail$ctl02']")
      this.playerInfo = page.locator("//div[@id='dvPlayer']")
      this.SaveAndNextStep = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnSaveNext']")
      this.configIcon = page.locator("//a[@id='ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_1_lnkConfigure']")
      this.configLegend = page.locator("//a[@id='ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_2_lnkConfigure']")
      this.configStar = page.locator("//a[@id='ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_3_lnkConfigure']")
      this.configXcard = page.locator("//a[@id='ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_4_lnkConfigure']")
      this.selectPrimaryPrize = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option")
      this.selectMoveButton = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlSegments$btnAddPrimaryPrize']")
      this.update = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlSegments$Button1']")
      this.closeButtonOfferApprovedPopUP=page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlSummary$btnClose']")
//UH_9454
      this.PaceReport = page.locator("//input[@value='View Pace Report']")
      this.PaceReportPopup = page.locator("//span[contains(text(),'PACE REPORT')]")
      this.paceReportClose = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnClose']")     
      this.checkInSucessMessage = page.locator("//*[contains(text(),'has been successfully checked-in.')]")
      this.vPlayerNotInvitedPopup = page.locator("//span[contains(text(),'Patron was not invited to the event')]")
      this.addPlayerToEvent = page.locator('#ctl00_ContentPlaceHolder1_btnPlayerAddToEvent')
      this.voverRideReason =  page.getByText('Override Reason')
      this.vApproverUsername = page.getByText('Approving Username')
      this.vApproverPassword =  page.getByText('Password')
      this.overrideReasonInput =  page.locator('#ctl00_ContentPlaceHolder1_txtOverrrideReason')
      this.overrideUsernameInput = page.locator('#ctl00_ContentPlaceHolder1_txtUsername')
      this.overridePasswordInput = page.locator('#ctl00_ContentPlaceHolder1_txtPassword')
      this.OverrideButton =  page.getByRole('button', { name: 'Override' })
     
      // UH_9445
     this.RejectOffer = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnRejectOffer']")
     this.RejectPopUp = page.locator("//div[contains(text(),'REJECT OFFER')]")
     this.rejectReason = page.locator("//textarea[@id='ctl00_ContentPlaceHolder1_ctrlSummary_txtRejectReason']")
     this.rejectTab = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlSummary_btnRejectOffer']")
     this.EventsAndOffersPage = page.locator("//span[@class='GoLeft']")
     this.rejectedOffer = page.locator("//tbody[@class='ig_Item igg_Item borderNoneClass']")

     //Uh_9456
     this.maxNoOfAttendees = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlSegments$txtMaxAttendees']")
     this.maxPrizeQuantity = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlSegments$txtMaxPrizeQuantity']")
     this.vResendConfirmation = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@name='ctrlEventCheckInDetail$btnResendEmail']")
     this.closePlayerTransactionWindow = page.locator("(//a[@ID='close'])[1]")
     

     //UH_9448
    this.selectPrimaryPrize1 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize2 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize3 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize4 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize5 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize6 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize7 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize8 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize9 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize10 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
    this.selectPrimaryPrize11 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstPrimaryPrizesNotSelected']/option[1]")
     
    this.selectBackUpPrize1 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[1]")
    this.selectBackUpPrize2 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[1]")
    this.selectBackUpPrize3 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[1]")
    this.selectBackUpPrize4 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[1]")
    this.selectBackUpPrize5 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[1]")
    this.selectBackUpPrize6 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[1]")
    this.selectBackUpPrize7 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[7]")
    this.selectBackUpPrize8 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[7]")
    this.selectBackUpPrize9 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[7]")
    this.selectBackUpPrize10 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[7]")
    this.selectBackUpPrize11 = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ctrlSegments_lstSecondayPrizesNotSelected']/option[7]")
    this.selectMoveButton1 = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlSegments_btnAddSecondaryPrize']")
    

    //UH_9451
      this.playerEventAndOfferDashboard = page.frameLocator("//iframe[@id='ifrContent']").locator("//div[@id='dvEventDetail']")
      this.vNewEventCreatedVisibilityOnPage = page.frameLocator("//iframe[@id='ifrContent']").locator("//tr[contains(text(),'UH_9451')]")
      this.EventsAndOffersButtonOnPlayerDashBoard = page.locator("//div[@id='dvEventsAndOffers']")
      this.vPlayerEventsAndOffersPage = page.frameLocator("//iframe[@id='ifrContent']").locator("//div[@id='wdgEventsOfferListing']")
      this.InvitedFilter = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnInvitedUninvited']")
      this.MoreLinkofEvent =  page.frameLocator("//iframe[@id='ifrContent']").locator("//a[@id='wdgEventsOfferListing_it8_0_lnkMoreDetail']")
      this.vSelectedEventDetailsPage = page.frameLocator("//iframe[@id='ifrContent']").locator("//div[@id='dvEventDetailsSection']")
      this.vBookNowButton =  page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@value='Book Now']")
      this.vUninvitedPatron =  page.frameLocator("//iframe[@id='ifrContent']").locator("//span[contains(text(),'This patron has not been invited to the event.')]")
      this.SearchTabPlayerEvents = page.locator("//input[@value='Event & Offer Name']")
      //this.vNewEventCreatedVisibilityOnSecondPage = page.frameLocator("//iframe[@id='ifrContent']").locator("//tr[@adr='0']")

      //UH_9460
      this.Justification = page.frameLocator("//*[@id='ctl00_FramePopUp1']").locator("//*[@id='txtJustification']") 
      this.Tier = page.frameLocator("//*[@id='ctl00_FramePopUp1']").locator("//*[@id='ddlMatchedTer']")
      this.Adjust = page.frameLocator("//*[@id='ctl00_FramePopUp1']").locator("//*[@id='btnPlayerAdjust']")
      this.AuthorizationReason1 = page.locator("//select[@id='ddlTierProgramMatch']")
      
      //UH_9463
      this.PlayerTierwithTierMatch = page.locator("//a[contains(text(),'Player Tier With Tier Match')]")
      this.vTierPopUp = page.locator("//*[@id='ctl00_FramePopUp1']")
      this.Reason_1 = page.frameLocator("//*[@id='ctl00_FramePopUp1']").locator("//*[@id='ddlReason']")
      this.Justification = page.frameLocator("//*[@id='ctl00_FramePopUp1']").locator("//*[@id='txtJustification']")
      this.Tier = page.frameLocator("//*[@id='ctl00_FramePopUp1']").locator("//*[@id='ddlMatchedTer']")
      this.Adjust = page.frameLocator("//*[@id='ctl00_FramePopUp1']").locator("//*[@id='btnPlayerAdjust']")
      this.vAuthorizePopUp = page.locator("//div[@id='divAuthorize']")
      this.Password_1 = page.locator("//input[@name='ctl00$ContentPlaceHolder1$TxtAuthorisationPwd']")
      this.Reason_2 = page.locator("//*[@id='ddlTierProgramMatch']")
      this.Comment_2 = page.locator("//textarea[@id='TxtAuthComment']")
      this.Submit_2 = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnPopupSubmit']")
     
      
      
        
      //UH_9465
      this.ViewComment = page.locator("//a[contains(text(), 'View Comment')]")
      this.Add = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='btnAdd']")
      this.Comment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator('//tr[@id="x:1558101725.21:adr:0:tag::chlGCnt:0:exp:False"]')
      this.Delete = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnCommentDelete']")
      this.Cancel = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='ctl08']")
      this.Confirm = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnDeleteConfirm']")
      this.Password = page.locator("//input[@name='ctl00$ContentPlaceHolder1$TxtAuthorisationPwd']")
      this.Reason_3 = page.locator("//select[@name='ctl00$ContentPlaceHolder1$ddlDeleteCommentReason']")
      this.AutComment1 =page.locator("//textarea[@id='TxtAuthComment']")
      this.Submit = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='btnSettleVoidSubmit']")
      this.Submit_3 = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnPopupSubmit']")
      this.vSource_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlSearchSource']")
      this.vDepartment_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlSearchDepartment']")
      this.vProperty_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlSearchProperty']")
      this.vSearchFrom = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='txtSearchFrom']")
      this.vSearchTo = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='txtSearchTo']")
      this.vPriority_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlSearchPriority']")
      this.PriorityDropdown = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator('#ddlSearchPriority')
      // this.VHighPriority = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//option[contains(text(),'2-High')])[1]")
      // this.VMediumPriority = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//option[contains(text(),'3-Medium')])[1]")
      // this.VLowerPriority = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//option[contains(text(),'4-Lower')])[1]")
      // this.VLowestPriority = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//option[contains(text(),'5-Lowest')])[1]")
      // this.VAllPriority = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@id='ddlSearchPriority']//option[contains(text(),'All')]")
      this.vSearch_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='ImgSearch']")
      this.vAdd_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnAdd']")
      this.vViewSettled_Voided = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnViewSettledVoided']")
      this.vDisplaydate_2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//th[@key='DisplayDate']")
      this.vComment_2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//th[@key='Comment']")
      this.vPriority_2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//th[@key='PriorityDesc']")
      this.vSource_2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//th[@key='CommentSource']")
      this.vUsername_2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//th[@key='UserName']")
      this.vDepartment_2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//th[@key='DepartmentName']")
      this.vproperty_2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//th[@key='Property']")
      this.vReply = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnCommentReply']")
      this.vEdit = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnCommentEdit']")
      this.vDelete = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnCommentDelete']")
      this.vSettle_Void = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnCommentSettleVoid']")
      this.vDeletionPopUp = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Comment deleted successfully!')]")
      this.vConfirm = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnDeleteConfirm']")
      this.vCancel = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='ctl08']")
      //this.Ok_2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@onclick='return dismissPop(event, true);']")
      this.Priority_3 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@id='ddlCommentPriority']")
      this.CommentDetails = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//textarea[@name='txtComment']")
      this.Save_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='btnCommentSave']")
      this.Ok_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='ctl10']")
      this.vNoData = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//span[contains(text(),'No data found')]")
      this.Close = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//a[@id='close']")
      this.vViewComment_PopUp = page.locator("//iframe[@id='ctl00_FramePopUp7']")

      //UH_9466
      this.cancelAddCommentOption = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='btnCommentCancel']")
      this.vAddCommentPopUp = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//div[@id='ConfirmationPopUp']")
      this.selectCincinati = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//li[@class='igdd_ListItem igdd_ListItemSelected igdd_ListItemActive ']")
      this.LimitToPropertyDropDown = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//img[@mkr='ButtonImage']")
      this.unCheckNever = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='chkCommentExpirationDate']")
      this.vNewCommentAdded =  page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//tbody//tr[@chlgcnt='0'])[1]") 
      this.vCommentDetailsSection = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//span[contains(text(),'Comment Details')]")
      this.LimitToProperty1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//a[contains(text(),'Hard Rock Cincinnati')])[7]/parent::li/input")
      this.NeverCheckBox = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//label[contains(text(),' Never')]/parent::td/input")
      this.vAlertPopUpMessage = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Please enter Comment')]")
      
      //UH_9470
      this.CommPreferences = page.locator("//div[@id='dvCPContactInformation']")
      this.ContactInformation = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnContactInformation']")
      this.vSocialMedia = page.frameLocator("//iframe[@id='ifrContent']").locator("//h3[contains(text(),'Social Media')]")
      this.AddNewSocialMedia = page.frameLocator("//iframe[@id='ifrContent']").locator("//a[contains(text(),'Add New Social Media')]")
      this.Type =  page.frameLocator("//iframe[@id='ifrContent']").locator("//select[@class='form-control default-border']")
      this.AccountName = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@class='default-form-control']")
      this.SaveSocialMedia = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnSaveSocialMedia']")
      this.DeleteSocialMedia = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@name='ucCPSocialMedia68842ba3_e1a5_474c_ae16_073cc18b59e0$btnDeleteSocial']")
      this.vDeleteSocialMedia =  page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='ucCPSocialMediacdb6fa5f_99b0_49a1_bc49_1daa0a61bae9_btnDeleteSocial']")
      this.vEditSocialMedia = page.frameLocator("//iframe[@id='ifrContent']") .locator("//input[@id='btnEditSocialMedia']")
      
      //UH_9492
      this.offerManagement = page.getByRole('link', { name: 'Offer Management' })
      this.ManageCampaign = page.getByRole('link', { name: 'Manage Campaign' })
      this.submitCampaign = page.getByRole('button', { name: 'Submit' })
      this.vCampaignLabel = page.getByText('Campaigns', { exact: true })
      this.viewCampaign = page.getByRole('button', { name: 'View', exact: true })
      this.addCampaign = page.getByRole('button', { name: 'Add' })
      this.vNewCampaignLabel = page.getByText('Campaign - New')

      this.username = page.locator("//input[@id='txtUserame']")
      this.password = page.locator("//input[@id='txtPassword']")
      this.domain = page.locator("//select[@id='ddlDomain']")
      this.loginBtn = page.locator("//input[@id='btnSubmit1']")

      //UH_9471
      this.SearchPlayer = page.locator("//input[@id='ctl00_ImgSearch']")
      this.PlayerFunction = page.locator("//a[@id='main_nav_1000010']")
      this.PlayerTransactionLog = page.locator("//a[contains(text(),'Player Transaction Log')]")
      this.vTransactionDateTime = page.frameLocator('#ctl00_FramePopUp3').locator("//th[contains(text(),'Transaction Date/Time')]")
      this.vTransactionDescription = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("//th[contains(text(),'Transaction Description')]")
      this.vCreator = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("//th[contains(text(),'Creator')]")
      this.vPropertyName = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("//th[contains(text(),'Property Name')]")
      this.LeftArrow =  page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("(//td//img[@title='Expand Row'])[1]")
      this.vValueBefore =  page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("//th[contains(text(),'Value Before')]")
      this.vValueAfter =  page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("//th[contains(text(),'Value After')]")
      this.vApprovedBy =  page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("//th[contains(text(),'Approved By')]")
      this.Close = page.locator("//a[@id='close']")
      this.highComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//td[contains(text(),'2-High')]")

      //UH_9472
      this.vPlayerFunction = page.locator("//a[@id='main_nav_1000010']")
      this.Priority = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlCommentPriority']")
      this.LimitToDepartment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlCommentDepartment']")
      this.LimitToProperty = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@value='ALL']")
      this.Global_AllProperties = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='chkCommentGlobal']")
      this.CommentType = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlCommentType']")
      this.ExpirationDate = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='txtCommentExpirationDate']")
      this.ChkBox_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='chkCommentExpirationDate']")
      this.CommentBox = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//textarea[@name='txtComment']")
      this.vPlayerfuncationList = page.locator("//div[@id='sub_nav_1000010']")
      this.vViewComment = page.locator("//a[contains (text(),'View Comment')]")
      this.Comment_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//textarea[@id='txtComment']")
      this.Department = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlCommentDepartment']")
      this.YellowIcon = page.locator("//input[@class='playerFlag playerFlagOrange commentBtnWithAsterisk']")


      //UH_9473
      this.LeftArrowUTL = page.locator("//img[@id='x:1380623324.30:mkr:expColBtn:un:0']")
      this.vValueBeforeUTL = page.locator("//th[contains(text(),'Value Before')]")
      this.vValueAfterUTL =  page.locator("//th[contains(text(),'Value After')]")
      this.vApprovedByUTL =  page.locator("//th[contains(text(),'Approved By')]")
      
      //UH_9474
       this.UserTransactionLog = page.locator("//a[contains(text(),'User Transaction Log')]")
       this.vUserID = page.locator("//th[contains(text(),'User ID')]")
       this.vCorpProp = page.locator("//th[contains(text(),'Corp Prop')]")
       this.vDateRange = page.locator("//th[contains(text(),'Date Range')]")
       this.vClearButton = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnClear']")
       this.vSearchButton = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnSearch']")
       this.UserID = page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtUserID']")
       this.CorpProp = page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtPropCode']")
       this.DateRangeUTL = page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlDateRange']")
       this.vTransactionDateTimeUserTransactionLog = page.locator("//th[contains(text(),'Transaction Date/Time')]")
       this.vPlayerIdUserTransactionLog = page.getByText('Player Id')
       this.vUserID_1 = page.locator("(//th[contains(text(),'User ID')])[2]")
       this.vCorpProp_1 = page.locator("(//th[contains(text(),'Corp Prop')])[2]")
       this.vTransaction = page.locator("//table[@id='x:1380623324.9:mkr:contentTbl']")

       //UH_9475
      this.AddComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='btnAdd']")
      this.PriorityViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@id='ddlCommentPriority']")
      this.LimitToDepartmentViewComment =  page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@id='ddlCommentDepartment']")
      this.EnterTextViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//textarea[@id='txtComment']")
      this.SaveViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='btnCommentSave']")
      this.vCommentAddedPopup = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Comment added successfully!')]")
      //this.SelectComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//tr[@id='x:1558101725.23:adr:0:tag::chlGCnt:0:exp:False']")
      this.SelectComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//tr[@type='row']")                                                                                   
      this.EditButton = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='btnCommentEdit']")
      this.vEditModeComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//span[contains(text(),'Edit Comment Details')]")
      this.vCommentUpdatedMessage = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Comment updated successfully!')]")
      this.OkMessagePopUp = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@name='ctl10']")
      this.CloseComment =  page.locator("//a[@id='close']")
      this.vCommentTransaction = page.frameLocator("//iframe[@name='FramePopUp3']").locator("(//tbody[@class='ig_Item igg_Item'])[2]")

      //UH_9477
      this.TierCreditsEarningsTab = page.locator("//div[@id='dvTierPtEarn']")  
      this.ArrowIcone = page.frameLocator("//iframe[@id='ifrContent']").locator("//img[@id='x:10588114.31:mkr:expColBtn:un:0']")
      this.vRecordExpand = page.frameLocator("//iframe[@id='ifrContent']").locator("//tr[@id='x:668532068.23:adr:0:tag::chlGCnt:0:exp:False']") 
      this.vDateTime = page.frameLocator("//iframe[@id='ifrContent']").locator("(//th[contains(text(),'Date/Time')])[1]") 
      this.vProperty1 = page.frameLocator("//iframe[@id='ifrContent']").locator("(//th[contains(text(),'Property')])[1]")  
      this.vTransactionType = page.frameLocator("//iframe[@id='ifrContent']").locator("(//th[contains(text(),'Transaction Type')])[1]")  
      this.vTierCredits = page.frameLocator("//iframe[@id='ifrContent']").locator("(//th[contains(text(),'Tier Credits')])[1]")  
      
      //UH_9453
      this.vReservationCancelSuccessful = page.frameLocator("//iframe[@id='ifrContent']").locator("//p[contains(text(),'The reservation was cancelled successfully!')]")
      this.playerReservation = page.locator("//div[@id='dvReservations']")
      this.playerReservationName= page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='txtReservationName']")
      this.playerReservationSearch =page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnSearchClick']")
      this.playerDetails = page.frameLocator("//iframe[@id='ifrContent']").locator("(//a[contains(text(),'Details')])[1]")
      this.cancelPlayerReservation = page.frameLocator("//iframe[@id='ifrContent']").locator("//div[@id='ctrlEventCheckInDetail_pnlUpdateReservation']/child::input[@value='Cancel Reservation']")
      this.confirmCancellation = page.frameLocator("//iframe[@id='ifrContent']").locator("//div[@id='popupheaderCancelReservation']/parent::div//input[@value='Confirm']")
      this.closeCancellationSuccsessPopup = page.frameLocator("//iframe[@id='ifrContent']").locator("//div[@id='popupheaderCancelSameDayReservation']/child::a[@id='close']");
      //UH_9478
      this.UnityPointsEarningsTab = page.locator("//div[@id='dvCashBackEarn']")
      this.ArrowIcone_1 = page.frameLocator("//iframe[@id='ifrContent']").locator("//img[@id='x:1244363346.27:mkr:expColBtn:un:0']")
      this.vRecordExpand_1 = page.frameLocator("//iframe[@id='ifrContent']").locator("//tr[@id='x:148235847.25:adr:0:tag::chlGCnt:0:exp:False']")
      this.vUnityPoints = page.frameLocator("//iframe[@id='ifrContent']").locator("(//th[contains(text(),'Unity Points')])[2]")
      this.vFlexRule = page.frameLocator("//iframe[@id='ifrContent']").locator("(//th[contains(text(),'Flex Rule')])[1]")

      //UH_9479
      this.DiscretionaryCompsTab = page.locator("//div[@id='dvDiscretionaryComps']")
      this.vIssuedDcompRecord = page.frameLocator("//iframe[@id='ifrContent']").locator("//tr[@id='x:1448404730.33:adr:0:tag::chlGCnt:0:exp:False']")
      this.ViewCompDetailsButton = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnViewDetails']")
      this.vViewCompDetails = page.frameLocator("//iframe[@id='ifrContent']").locator("//div[@id='wdCompDetails']")
      this.XIcone = page.frameLocator("//iframe[@id='ifrContent']").locator("//img[@id='x:1269945244.4:mkr:Close']")

      
      //UH_9480
      this.IssueCompButton = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnIssueComp']")
      this.vIssueCompPopUpWindow = page.locator("//span[contains(text(),'ISSUE COMP')]")
      this.vDiscretionaryCompRadioButton = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//label[@for='rdoDiscretionaryComp']")
      this.CompType = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//select[@id='DDLCompType']")
      this.CompItem = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//select[@id='ddlCompItem']")
      this.CompCount = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//input[@id='TxtCompCount']")
      this.vTotalCompValue = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("(//td[@class='style6'])[1]")
      this.vCompAvailability = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("(//td[@class='style6'])[2]")
      this.vCompsRemaining = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("(//td[@class='style6'])[3]")
      this.vIssuedDate = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("(//td[@class='style6'])[4]")
      this.UserNameAD = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//input[@name='txtUserId']")
      this.PassWordAD = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//input[@name='txtPwd']")
      this.CommentAD = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//textarea[@name='TxtAuthComment']")
      this.IssueCompButton1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("(//input[@value='ISSUE COMP'])[2]")
      this.vIssueCompPopUpMessage = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//span[@id='lblcompExeption']")
      this.ProceedButton =  page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//button[contains(text(),' PROCEED')]")
      this.CommentIssueComp = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//textarea[@id='txtnegComment']")
      this.IssueCompButton2 = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("(//input[@value='ISSUE COMP'])[1]")
      //9481
      this.PlayerFunctions = page.locator("//a[contains(text(),'Player Functions')]")
      this.ViewTierHistory = page.locator("//a[contains(text(),'View Tier History')]")
      this.vCurrentTier1 = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Progress Current Tier : Star Tier Credits : 00')
      this.vTierCredits1 = page.frameLocator('#ifrContent').getByText('Tier Credits :')
      this.vNextTier1 = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Next Tier :')
      this.vTierCreditsRequired1 = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Next Tier :')
      this.vTierCreditsToEarnNextTier = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Tier Credits to Earn Next Tier :')
      this.vNextTierExpiration = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Next Tier Expiration :')
      this.vNextTierCreditsExpiration = page.frameLocator('#dialog1 iframe[name="FramePopUp1"]').getByText('Next Tier Credits Expiration :')
      this.CancelButton = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//input[@id='ImageButton1']")

      //UH_9482
      this.PlayerID = page.locator("//input[@id='ctl00_txtPlayerId']")
      this.ClubInfo = page.frameLocator('#ifrContent').locator('#ddlPlayerInfo')
      this.vCardPic = page.frameLocator('#ifrContent').getByText('Star', { exact: true })
      this.vCurrentTier = page.frameLocator('#ifrContent').locator("//span[@id='lblcrntTier']")
      this.vTireCredits = page.frameLocator('#ifrContent').getByText('Current Tier Credits:')
      this.vNextTier= page.frameLocator('#ifrContent').getByText('Next Tier -')
      this.vTierCreditsRequired = page.frameLocator('#ifrContent').getByText('Tier Credits Required:')
      this.vNextTierCredits = page.frameLocator('#ifrContent').getByText('Required to Next Tier:')
      this.vRequiredToNextTierCredits = page.frameLocator('#ifrContent').locator('//div[@id="tdNextExpirationlabel"]')
      
      //UH_9483
      this.vPlayerName = page.frameLocator('#ifrContent').getByText('Rae  Clark')
      this.vPlayerId = page.frameLocator('#ifrContent').getByText('Player Id')
      this.vPlayerType = page.frameLocator('#ifrContent').getByText('Player Type:')
      this.vDob = page.frameLocator('#ifrContent').getByText('DOB:')
      this.vMemberSince = page.frameLocator('#ifrContent').getByText('Member Since:')
      this.vTierExpiration = page.frameLocator('#ifrContent').getByText('Tier Expiration:')
      this.vAccountType = page.frameLocator('#ifrContent').getByText('Account Type:')
      this.vPredominentLocation = page.frameLocator('#ifrContent').getByText('Predominant Location:')
      this.vShowLinks = page.frameLocator('#ifrContent').getByText('Show Links')
      this.vTierMatchIcon = page.frameLocator('#ifrContent').locator("//input[@id='imgTier']")

      //UH_9484
      this.TripsTab = page.locator("//div[@id='dvTrips']")
      this.vTripPage = page.locator("//span[@id='ctl00_lblContent']")
      this.vTotalTrips = page.frameLocator('#ifrContent').getByText('Total Trips:')
      this.vTotalProperties = page.frameLocator('#ifrContent').getByText('Total Properties:')
      this.vStartDate = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label1']")
      this.vEndDate = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label11']")
      this.vDaysPlayed = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label3']")
      this.vTheoWin = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label4']")
      this.vActualWin = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label5']")
      this.vIssued = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label6']")
      this.vRedeemed = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label7']")
      this.vPointsEarned = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label8']")
      this.vTierCreditsEarned = page.frameLocator('#ifrContent').locator("//span[@id='lvLive_ctrl0_ctl01_Label9']")

      //UH_9485
      this.Configuration = page.locator("//a[@id='main_nav_1000000']")
      this.CoreSystemConfiguration = page.locator("//a[contains(text(),'Core System Configurations')]")
      this.ManageTripDefinition = page.locator("//a[contains(text(),'Manage Trip Definition')]")
      this.vManageTripDefinition = page.locator("//span[contains(text(),'Manage Trip Definition')]")
      this.InActiveTab = page.locator("//a[contains(text(),'Inactive')]")
      this.SelectTrip = page.locator("//select[@id='ctl00_ContentPlaceHolder1_lstTrips']")
      this.vTripName = page.locator("//span[contains(text(),'Trip Name:')]")
      this.vTripType = page.locator("//span[contains(text(),'Trip Type:')]")
      this.vTripDescription = page.locator("//span[contains(text(),'Trip Description:')]")
      this.vProperty = page.locator("//span[contains(text(),'Property:')]")
      this.vMaxOfDays = page.locator("//span[contains(text(),'Max # of days in a trip :')]")
      this.vInactivityDays = page.locator("//span[contains(text(),'Inactivity Days:')]")
      this.vSortOrder = page.locator("//span[contains(text(),'Sort Order:')]")
      this.vCompRedemption = page.locator("//option[contains(text(),'Comp Redemption')]")
      this.vOfferRedemption = page.locator("//option[contains(text(),'Offer Redemption')]")
      this.vRating = page.locator("//option[contains(text(),'Rating')]")
      this.ActiveCheckBox = page.locator("//input[@id='ctl00_ContentPlaceHolder1_chkActive']")
      this.Save = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnSave']")
      this.vActiveList = page.locator("//select[@id='ctl00_ContentPlaceHolder1_lstTrips']")
      this.ActiveTab = page.locator("//a[@id='ctl00_ContentPlaceHolder1_btnActive']")
      this.vInActiveList = page.locator("//select[@id='ctl00_ContentPlaceHolder1_lstTrips']")
      
      //UH_9486
      this.vHideGraphSetting = page.frameLocator('#ifrContent').locator("//div[@id='dbTripSetGraph']")
      this.vBuildGridDisplay = page.frameLocator('#ifrContent').locator("//input[@name='ucUserSeletedGraph$btntdTripBuildGraph']")
      this.vSaveSearchSetting = page.frameLocator('#ifrContent').locator("//input[@id='ucUserSeletedGraph_btnTripSave']")
      this.vExpandGraphSetting =  page.frameLocator("//iframe[@id='ifrContent']").locator("//div[contains(text(),'Expand Graph Setting')]")
      this.vFrom = page.frameLocator("//iframe[@id='ifrContent']").locator("(//th[contains(text(),'From')])[1]")
      this.vTo = page.frameLocator('#ifrContent').locator("(//th[contains(text(),'To')])[1]")
      this.DateRange = page.frameLocator('#ifrContent').locator("//select[@id='ddldbTripsDateRange']")
      this.Property1 = page.frameLocator('#ifrContent').locator("//input[@id='ucUserSeletedGraph_cklProperty_5']")
      this.RatingType =page.frameLocator('#ifrContent').locator("//select[@name='ucUserSeletedGraph$tdTripDdlRatingType']")
      this.SaveSearchSetting = page.frameLocator('#ifrContent').locator("//input[@id='ucUserSeletedGraph_btnTripSave']")
      this.vUserTripGraphWindow = page.locator("//div[contains(text(),'User Trip Graph')]")
      this.Ok = page.locator("//input[@value='OK']")
      this.vSearchSettingSaved = page.locator("//span[@id='ctl00_lblContent']")

      //UH_9490
      this.DelConfirmPopUP = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains (text(),'Are you sure you want to Delete the Comment')]")
      //this.LeftArrow_1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("//img[@id='x:1778794230.35:mkr:expColBtn:un:0']")   
      this.vTransactionDateTime_Value = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("(//td[contains(text(),'06/27/2024 09:34 AM')])[1]")
      this.vTransactionDescription_Value = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("(//td[contains(text(),'Player Comment - Deleted in HALO')])[1]")
      this.vCreator_Value = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("(//td[contains(text(),'TU_LAB_HALO_NIN_ADM')])[1]")
      this.vPropertyName_Value = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("(//td[contains(text(),'Hard Rock Casino, Northern Indiana')])[1]")
      this.vValueBefore_Value = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("(//td[@idx='0'])[2]")
      this.vValueAfter_Value = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("(//td[@idx='1'])[2]")
      this.vApprovedBy_Value = page.frameLocator("//iframe[@id='ctl00_FramePopUp3']").locator("(//td[@idx='2'])[2]")
      this.AuthorizationReasonDelete = page.locator("//select[@id='ddlDeleteCommentReason']")

      //UH_9491
      this.vPlayerDashboard = page.locator("//span[@id='ctl00_lblContent']")
      this.Trips = page.locator("//div[@id='dvTrips']")
      this.vLifeToTripHistory = page.frameLocator('#ifrContent').getByText('Life to Date Trip History')
      this.vTripHistory = page.frameLocator('#ifrContent').getByText('Trip History', { exact: true })
      this.vPlayerTripHistory = page.frameLocator('#ifrContent').getByText('PLAYER TRIP HISTORY')
      this.vTripNumber = page.frameLocator('#ifrContent').locator('#lvTrip_ctrl0_ctl01_btnSelect')
      this.vRatingID = page.frameLocator('#ifrContent').getByText('Rating ID')

      //UH_9493
      this.SettleVoidCommentDB = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//div[contains(text(),'SETTLE/VOID COMMENT ')]")
      this.SettleRadioButton = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='rdSettle']")
      this.EnterComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//textarea[@id='txtSettleVoidComment']")
      this.AutSubmit = page.locator("//input[@id='btnPopupSubmit']")
      this.vConfirmation = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Are you sure you want to Settle the Comment?')]")
      this.Confirm1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='btnSettleVoidConfirm']")
      this.vAuthorizationBox = page.locator("//div[@id='divAuthorize']")
      this.AuthorizationReason = page.locator("//select[@id='ddlSettleVoidCommentReason']")
      this.AuthorizationPassword = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator(" //input[@id='TxtAuthorisationPwd']")
      this.vCommentSettledMessage = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Comment Settled successfully!')]")
      //this.vCommentSettledMessage = page.locator("//p[contains(text(),'Comment Settled successfully!')]")
      this.vviewSettledVoidedComments = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//tbody[@class='ig_Item igg_Item'])[1]")
      
      //UH_9444
      this.ThreeDots = page.locator("(//a[@id='imgbtnViewEventsOfferOps']//img)[1]")
      this.View = page.locator("(//input[@value='View'])[1]")
      this.vSummaryPage = page.locator("//a[@id='ctl00_ContentPlaceHolder1_lstOfferCreationSteps_ctrl7_liStep']")
      this.ApprovedOfferTab = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnApproveOffer']")
      this.vOfferApprovedPopup = page.locator("//span[contains(text(),'The offer has been approved!')]")
      this.closeSuccessPopup = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlSummary$btnCloseSubmit']")
      this.noResultFoundEventCheckIn = page.locator("//center[contains(text(),'No Results Found')]")
      //UH_9452
      this.offerSetupPage = page.locator("//a[contains(text(),'Offer Setup')]")

      //UH_9503
      this.checkLobCafeQuickOfferSetUpPage = page.locator("(//a[contains(text(),'Cafe')])[1]/parent::li//input")
      this.OfferTypePartnerOffersQuickOfferPage = page.locator("//a[contains(text(),'Partner Offers')]")
      // this.OfferTypePartnerOffersQuickOfferPage = page.locator("//tbody//tr//td//input[@value='Partner Offers']")
      this.HardRockCafeAtlantaDisplayPropertyQuickOffer = page.locator("//a[contains(text(),'Hard Rock Cafe Atlanta')]/parent::li//input")
      this.Location67DisplayLocationQuickOffer = page.locator("//a[contains(text(),'Location 67')]/parent::li/input")

      //UH_9505
      this. AddNewQuickOffer = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnNewQuickOffer']")
      this.vNewQuickOfferSetupPage = page.locator("//span[contains(text(),'New Quick Offer Setup')]")
      this.LobDropdownQuickOfferPage = page.locator("(//img[@mkr='ButtonImage'])[1]")
      this.UncheckLobQuickOffer = page.locator("//li[@id='x:463268121.9:adr:1']//a[contains(text(),'Casino')]")
      this.OfferTypeDropdownQuickOffer = page.locator("//td[@id='x:1061541114.3:mkr:Button']")
      //this.OfferTypeQuickOffer = page.locator("//li[@id='x:1061541114.10:adr:2']//a[contains(text(),'Entertainment')]")
      //this.OfferTypeQuickOffer = page.locator("//div[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_ddlOfferType']")
      this.OfferTypeQuickOfferValue = page.locator("//li//a[contains(text(),'Entertainment')]")
      this.DisplayPropertyDropdownQuickOffer = page.locator("//img[@id='x:753879057.4:mkr:ButtonImage']")
      this.CheckDisplayProperty =page.locator("//li[@id='x:753879057.8:adr:0']")
      this.DisplayLocationDropdown = page.locator("//img[@id='x:1838980312.4:mkr:ButtonImage']")
      this.CheckDisplayLocation = page.locator("//li[@id='x:1838980312.8:adr:0']")
      this.DisplayNameQuickOffer = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtPromotionDisplayName']")
      this.TierRestrictionDropdown = page.locator("//img [@id='x:47688940.4:mkr:ButtonImage']")
      //this.CardTierRestriction = page.locator("//input[@id='x:47688940.2:mkr:Input']")
      this.DisplayDescription = page.locator("//textarea[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtDisplayDescription']")
      this.Disclaimer = page.locator("//textarea[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtDisplayDisclaimer']")
      this.SaveAndNextStepQuickOfferPage = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnSaveNext']")
      this.vSelectAFileButton = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlInvitationDetails_flUpload']")
      this.vUploadButton= page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlInvitationDetails_btnInvitationUpload']")
      this.SubmitButton = page.locator("//input[@name='ctl00$ContentPlaceHolder1$btnSubmitForReview']")
      this.vOfferSubmittedMessage = page.locator("//span[contains(text(),'The offer has been submitted successfully!')]")
      this.OfferSearch = page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtQuickOffer']")
      //this.vOfferCreated = page.locator("//tbody[@id='x:1698345930.20:mkr:rows:nw:1']")
      this.vOfferCreated = page.locator("//div[@id='ctl00_ContentPlaceHolder1_wdgQuickOffersList']")
      
      //UH_9506
      this.OnlineLobQuickOfferSetupPage = page.locator("(//a[contains(text(),'Online')])[1]/parent::li//input")
      
      //UH_9476
      this.TierHistoryTab = page.locator("//div[@id='dvTierHistory']")
      this.vTierHistoryDetails = page.frameLocator("//iframe[@id='ifrContent']").locator("//tbody[@id='x:613926798.28:mkr:rows:nw:1']")
      
      //UH_9469
      this.vPhoneSection = page.frameLocator("//iframe[@id='ifrContent']").locator("//h3[contains(text(),'Phone')]")
      this.PhoneType = page.frameLocator("//iframe[@id='ifrContent']").locator("//select[@class='form-control default-border']")
      this.PhoneNumber = page.frameLocator("//iframe[@id='ifrContent']").locator("(//input[contains(@name,'txtPhoneNumber')])[1]")
      this.SavePhoneNumber = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnSavePhone']")
      this.vDuplicatePhoneNumberMessage = page.frameLocator("//iframe[@id='ifrContent']").locator("//span[contains(text(),'Phone Type cannot be duplicate.')]")
      //this.vEditPhoneTab = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnEditPhone']")
      //this.vDeletePhoneTab = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='ucCPPhone20252ec0_feb5_4673_8b1c_02f0fad08026_btnDeletePhone']")
      this.vAddNewPhone = page.frameLocator("//iframe[@id='ifrContent']").locator("//a[contains(text(),'Add New Phone')]")
      
      //UH_9467
      this.vAddress = page.frameLocator("//iframe[@id='ifrContent']").locator("//h3[contains(text(),'Address')]")
      this.AddNewAddress = page.frameLocator("//iframe[@id='ifrContent']").locator("//a[contains(text(),'Add New Address')]")
      this.AddressType = page.frameLocator("//iframe[@id='ifrContent']").locator("(//select[@class='form-control default-border'])[1]")
      this.Address1 = page.frameLocator("//iframe[@id='ifrContent']").locator("(//input[contains(@name,'txtAddress1')])[1]")
      this.Address2 = page.frameLocator("//iframe[@id='ifrContent']").locator(" (//input[contains(@name,'txtAddress2')])[1]")
      this.City = page.frameLocator("//iframe[@id='ifrContent']").locator("(//input[contains(@name,'txtCity')])[1]")
      this.Country= page.frameLocator("//iframe[@id='ifrContent']").locator("(//select[contains(@name,'ddlCountry')])[1]")
      this.State= page.frameLocator("//iframe[@id='ifrContent']").locator("(//select[contains(@name,'ddlState')])[1]")
      this.Zip = page.frameLocator("//iframe[@id='ifrContent']").locator("(//input[contains(@name,'txtZip')])[1]")
      this.SaveAddress = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnSaveAddress']")
      
      //UH_
      this.vReplyAddedPopup = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Reply added successfully!')]")
      this.LeftArrowViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//img[@class='ighg_ExpandButton'])[1]")
      this.vDisplayDateViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//th[contains(text(),'Display Date')])[2]")
      this.vCommentViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//th[contains(text(),'Comment')])[2]")
      this.vUserNameViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//th[contains(text(),'UserName')])[2]")

      //UH_9495
      this.VoidRadioButton = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='rdVoid']")
      this.vVoidConfirmation = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Are you sure you want to Void the Comment?')]")
      this.vCommentVoidedMessage = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//p[contains(text(),'Comment Voided successfully!')]") 

      //UH_9461
      this.PlayerTyerWithTierMatch = page.locator("//a[contains(text(),'Player Tier With Tier Match')]")
      this.vPopUpWindow = page.locator("//span[contains(text(),'Player Tier With Tier Match')]")
      this.Reason = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//select[@id='ddlReason']") 
      this.CompetitorCasino =  page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//select[@id='ddlCompetitorCasino']")
      this.vPatronUpgradedMessage = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("")
      this.CancelButtonTierMatchWindow = page.frameLocator("(//iframe[@name='FramePopUp1'])[1]").locator("//div[@id='divVisible3']//input[@id='btnCancel']")
      
      //UH_9462
      this.LighteningIcon = page.frameLocator("//iframe[@id='ifrContent']").locator("//a[@id='lnkHeartBtn']")
      this.AlertWindow = page.locator("(//div[@id='popupheader'])[1]")
      this.closeAlert = page.frameLocator("//iframe[@id='ctl00_FramePopUp1']").locator("//button[@id='button']")
      this.ExpandSearchIcon = page.locator("//a[@title='Expand Search']")

      //UH_9502
      this.vCasinoOptionLOBDropdown = page.locator("//input[@id='x:463268121.2:mkr:Input']")

      //UH_9507
      this.CardTierRestrictionDropdownQuickOfferSetup = page.locator("//img[@id='x:47688940.4:mkr:ButtonImage']")
      this.CardTierRestriction1 = page.locator("//li//a[contains(text(),'X')]")
      this.vSummaryPage1 = page.locator("//a[contains(text(),'Summary')]")
      
      //UH_9508
      this.CardTierRestriction = page.locator("//li//a[contains(text(),'Star')]")

      //UH_9511

      this.RegionDropdownQuickOffer = page.locator("//img[@id='x:1997031700.4:mkr:ButtonImage']")
      this.UncheckRegionQuickOffer = page.locator("//a[contains(text(),'Caribbean')]/parent::li/input")

      //UH_9509
      this.vEditButtonQuickOffer = page.locator("//input[@id='ctl00_ContentPlaceHolder1_wdgQuickOffersList_it7_0_btnUpdate']")
      this.EditButton1 = page.locator("//input[@name='ctl00$ContentPlaceHolder1$wdgQuickOffersList$it7_0$btnUpdate']")
      this.vOfferInEditMode = page.locator("//div[@id='ctl00_ContentPlaceHolder1_UpdatePanel1']")
      this.OfferSetUP = page.locator("//ul//a[contains(text(),'Offer Setup')]")
      this.SaveAndClose = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnSaveClose']")
      this.vLobNotEditable = page.locator("//div[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_ddlLOB']")
      
      //UH_9516
      this.vCopyButtonQuickOffer = page.locator("//input[@id='ctl00_ContentPlaceHolder1_wdgQuickOffersList_it7_0_btnCopy']")
      this.vOfferInEditModeCopy = page.locator("//div[@class='SubHeader RevColor H26']")
      this.vNoFileSelected = page.locator("(//span[@class='txt-middle'])[1]")

      //UH_9510
      
      this.DeactiveButton = page.locator("//td//input[@id='ctl00_ContentPlaceHolder1_wdgQuickOffersList_it7_0_btnDelete']")
      this.vConfirmDeactivatePopup = page.locator("(//div[@id='popupheader2'])[1]")
      this.ConfirmTab = page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnDeleteOffer']")
      this.vOfferDeactivated = page.locator("//span[contains(text(),'Quick Offer deactivated successfully.')]")
      this.CloseDeactivePopUp = page.locator("//button[contains(text(),'Close')]")

      //UH_9524
      this.StartDateQuickOffer = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$txtStartDate']")
      this.EndDateQuickOffer = page.locator("//input[@name='ctl00$ContentPlaceHolder1$ctrlOfferSetup$txtEndDate']")
      

      //UH_9523
      this.CheckLobQuickOfferHotel = page.locator("//li[@id='x:463268121.10:adr:2']")
      this.checkDisplayPropertyHardRockAtlanticCity = page.locator("(//a[contains(text(),'Hard Rock Atlantic City')])[1]/parent::li//input")
      this.checkDisplayPropertyHardRockNorthernIndiana = page.locator("//a[contains(text(),'Hard Rock Northern Indiana')]/parent::li//input")
      this.checkLocationLocation71 = page.locator("//a[contains(text(),'Location 71')]/parent::li//input")

      //UH_9521
      this.CardTierRestriction2 = page.locator("//li//a[contains(text(),'Legend')]")

      //UH_9522
      this.CardTierRestriction3 = page.locator("//li//a[contains(text(),'Icon')]")

      //UH_9512
      this.RegionUS = page.locator("//li[@id='x:1997031700.10:adr:2']")

      //UH_9517
     this.StartDate = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtStartDate']")
     this.EndDate = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtEndDate']")
     this.DisplayEndDate = page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtDisplayEndDate']")
     this.CheckDisplayProperty1 =page.locator("//li[@id='x:753879057.11:adr:3']//a[contains(text(),'Hard Rock Northern Indiana')]")
     this.CheckDisplayLocation1 = page.locator("//a[contains(text(),'Unity Store')]/parent::li//input")
     this.ExpandPlayerSearchIcon = page.locator("//td[@style='padding-top: 3px; padding-left: 2px; position: relative']")
     this.EventAndOfferName = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='txtEventsOfferDisplayName']")
     this.SearchViewEventAndOffer = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnSearchClick']")
     this.vOfferNotDisplayed = page.frameLocator("//iframe[@id='ifrContent']").locator("//span[contains(text(),'No Data Found')]")
     //9468
     this.vEmailSection = page.frameLocator("//iframe[@id='ifrContent']").locator("//h3[contains(text(),'Email')]")
     this.EditEmail =  page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnEditEmail']")
     this.EmailTypeArrow = page.frameLocator("//iframe[@id='ifrContent']").locator("//select[@name='ucCPEmailff1cb806_7c64_4cfc_9e06_b054034e9a16$ddlEmailtype']")
     this.EmailType = page.frameLocator("//iframe[@id='ifrContent']").locator("//select[@class='form-control default-border']")
     this.EmailAddress =  page.frameLocator("//iframe[@id='ifrContent']").locator("(//input[contains(@name,'txtEmailAddress')])[1]")
     this.SaveEmail = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnSaveEmail']")
     this.AddNewEmail = page.frameLocator("//iframe[@id='ifrContent']").locator("//a[contains(text(),'Add New Email')]")

     //9498
     this.ClosePopupWindow = page.locator("//a[@id='close']")
     this.vSystemDisplayResult = page.locator("//span[@id='hd']")
     this.FromDate = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//td//input[@id='txtSearchFrom']")
     this.ToDate = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='txtSearchTo']")
     this.selectSource = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@id='ddlSearchSource']")
     this.selectPriority = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@name='ddlSearchPriority']")
     this.vNoData = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//span[contains(text(),'No data found')]")
     this.SearchOffer =  page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='ImgSearch']")

      //9499
      this.OffersTab = page.locator("//div[@id='dvOffers']")
      this.vActiveCheckBox = page.frameLocator("//iframe[@id='ifrContent']").locator("//label[contains(text(),'Active')]")
      this.vRedeemedCheckBox = page.frameLocator("//iframe[@id='ifrContent']").locator("//label[contains(text(),'Redeemed')]")
      this.vVoidedCheckBox = page.frameLocator("//iframe[@id='ifrContent']").locator("//label[contains(text(),'Voided')]")
      this.vExpiredCheckBox = page.frameLocator("//iframe[@id='ifrContent']").locator("//label[contains(text(),'Expired')]")
      this.vReservedCheckBox = page.frameLocator("//iframe[@id='ifrContent']").locator("//label[contains(text(),'Reserved')]")
      this.vOffersList = page.frameLocator("//iframe[@id='ifrContent']").locator("//div[@class ='GoLeft']//strong")
      this.vViewOfferDetailsButton = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnViewPlayerOffer']")
      this.vRedeemOfferButton = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnRedeemOffer']")
      this.vDeletePlayerButton = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnRemovePlayerOffer']")
      this.vScanBarcodeButton = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnScanBarcode']")
      this.vCheckForUpdateButton = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='btnCheckForUpdate']")
      this.SelectOffer = page.frameLocator("//iframe[@id='ifrContent']").locator("//tbody//tr[@id='x:1952661193.30:adr:0:tag:']")
      this.vOfferDetailsWindow = page.frameLocator("//iframe[@id='ifrContent']").locator("(//span[contains(text(),'CHARLES  BAUGH  660302931')])[1]")
      this.CloseOfferDetailsWindow = page.frameLocator("//iframe[@id='ifrContent']").locator("(//td[@class='igdw_HeaderContent igdw_HeaderButtonArea'])[1]")
      this.vOfferSyncPopUpWindow = page.frameLocator("//iframe[@id='ifrContent']").locator("//span[contains(text(),'Timeout occurred during the offers sync process.  Please try again.')]")
      this.OkOfferSync = page.frameLocator("//iframe[@id='ifrContent']").locator("//input[@id='Button1']")
   
      //UH_9487
      this.EditAddress = page.frameLocator("//iframe[@id='ifrContent']") .locator("//input[@id='btnEditAddress']")

      //UH_9432
      this.vOfferCreated1 =  page.frameLocator("//iframe[@id='ifrContent']") .locator("//tbody[@class='ig_Item igg_Item borderNoneClass']")

      //UH_9496
      this.PropertyViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@id='ddlSearchProperty']")
      this.DepartmentViewComment =  page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@id='ddlSearchDepartment']")
      this.CommentTypeViewComment =  page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//select[@id='ddlCommentType']")
      this.ExpirationDateViewComment =  page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@id='txtCommentExpirationDate']")
      this.vAllLimitToDepartmentViewComment = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//input[@class='ig_Disabled igdd_ValueDisplayDisabled ']")
      this.vGlobalPropertiesChecked = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//label[contains(text(),' Global (All Properties)')]")
      this.UncheckedGlobalProperties = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//label[contains(text(),' Global (All Properties)')]/parent::td//input")
      this.LimitToPropertyDropdown = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//td[@class='igdd_DropDownButton ']")
      this.vPropertyList = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//ul[@class='igdd_DropDownList '])[3]")
      this.LimitToProperty = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//a[contains(text(),'SG Casino, Brighton')])[3]/parent::li/input")
      this.vNeverCheckBox = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//label[contains(text(),' Never')]")
   
      //UH_9515

   this.validateLOBDefault = page.locator("//input[@type='text' and @value='Casino']")
   this.valiidateRegionDropdown = page.locator("//img[@id='x:1997031700.4:mkr:ButtonImage']")
   this.validateStartDate = page.locator("(//label[contains(., 'Start Date')])[1]");
   this.validateEndDate = page.locator("(//label[contains(., 'End Date')])[1]");
   this.SelectLobCafe = page.locator("(//a[contains(text(),'Cafe')])[1]/parent::li//input")
      //UH_9464
      this.CancelSettleVoidCommentBox =   page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("//td//input[@id='btnSettleVoidCancel']")
      this.Comment1 = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//tr[@type='row'])[2]") 
      this.CancelConfirmation = page.frameLocator("//iframe[@id='ctl00_FramePopUp7']").locator("(//input[@onClick='return dismissPop(event);'])[2]")
     
   }
   //*******************************************************************************************************************
   UH_9515
   async validateLOBdropdownIsDisplayedAndCasinoOptionIsSelectedByDefault(){
      await expect(this.validateLOBDefault).toBeVisible();
   }
   async validateRegionDropdownDisplaysOptionsAccordingToLOBSelection(){
      await expect(this.valiidateRegionDropdown).toBeVisible();
   }
   async vaidateStartDateAndEndDateAreAvailableForUsersToCreateOffer(){
      await expect(this.validateStartDate).toBeVisible();
      await expect(this.validateEndDate).toBeVisible();
   }
   async checkCafeOptionOfLobQuickOfferSetupPage(){
      await this.SelectLobCafe.click();
   }
   
  
   
   //UH_9464
   async clickOnCancelSettleVoidCommentBox(){
      await this.CancelSettleVoidCommentBox.click();
   }
   async selectComment1(){
      await this.Comment1.click();
   }
   async clickOnCancelConfirmationMessagePopUp(){
      await this.CancelConfirmation.click();
   }
   async validateCommentWithStatusSettledDisplayed(){
      await expect(this.vviewSettledVoidedComments).toBeVisible();

   }
   async validateCommentWithStatusVoidedDisplayed(){
      await expect(this.vviewSettledVoidedComments).toBeVisible();
   }
   //UH_9496
   async selectPropertyViewCommentPage(Property){
      await this.PropertyViewComment.selectOption(Property);
   }
   async selectDepartViewCommentPage(Department){
      await this.DepartmentViewComment.selectOption(Department);
   }
   async selectCommentTypeViewCommentPage(CommentType){
      await this.CommentTypeViewComment.selectOption(CommentType);
   }
   async enterExpirationDateViewCommentPage(ExpirationDate){
      await this.ExpirationDateViewComment.fill(ExpirationDate);
   }
   async validateAllSelectedByDefaultInLimitToDepartment(){
      await expect(this.vAllLimitToDepartmentViewComment).toBeVisible();
   }
   async validateGlobalAllPropertiesIsCheckedByDefault(){
      await expect(this.vGlobalPropertiesChecked).toBeVisible();
   }
   async uncheckedGlobalAllPropertiesCheckBox(){
      await this.UncheckedGlobalProperties.click();
   }
   async validatePropertyListDisplayed(){
      await expect(this.vPropertyList).toBeVisible();
   }
   async clickOnLimitToPropertyDropdown(){
      await this.LimitToPropertyDropDown.click();
   }
   async selectLimitToPropertyViewCommentPage(){
      await this.LimitToProperty.click();
   }
   async validateNeverCheckboxIsNextToExpirationDate(){

   }
     //UH_9432
  async validateCreatedOfferInEventAndOffersTabForStarCardDisplayed(){
   await expect(this.vOfferCreated1).toBeVisible();
  }
   //9487
   async clickOnEditTab(){
         await this.EditAddress.click();
    }

   //9499
 async validateOffersTabDisplayed(){
   await expect(this.OffersTab).toBeVisible();
 }
   async clickOnOffersTab(){
      await this.OffersTab.click();
}
async validateByDefaultActiveRedeemedVoidedExpiredReservedCheckBoxesIsCheckedNextToThePageName(){
   await expect(this.vActiveCheckBox).toBeVisible();
   await expect(this.vRedeemedCheckBox).toBeVisible();
   await expect(this.vVoidedCheckBox).toBeVisible();
   await expect(this.vExpiredCheckBox).toBeVisible();
   await expect(this.vReservedCheckBox).toBeVisible();
}
 async validateOffersInTheListDisplayed(){
   await expect(this.vOffersList).toBeVisible();
 }
 async validateViewOfferDetailsRedeemOfferDeletePlayerOfferScanBarCodeCheckForUpdatesButtonsDisplayed(){
   await expect(this.vViewOfferDetailsButton).toBeVisible();
   await expect(this.vRedeemOfferButton).toBeVisible();
   await expect(this.vDeletePlayerButton).toBeVisible();
   await expect(this.vScanBarcodeButton).toBeVisible();
   await expect(this.vCheckForUpdateButton).toBeVisible();
}
async selectOfferFromTheAssignedList(){
   await this.SelectOffer.click();
}
 async clickOnViewOfferDetailsButton(){
   await this.vViewOfferDetailsButton.click();
 }   
 async validateViewOfferDetailsWindowDisplayed(){
   await expect(this.vOfferDetailsWindow).toBeVisible();
 }
 async closeOfferDetailsWindow(){
   await this.CloseOfferDetailsWindow.click();
 }
 async clickOnCheckForUpdatesButton(){
   await this.vCheckForUpdateButton.click();
 }
 async validateOfferSyncPopUpWindowWithCloseAndOkButtons(){
   await this.vOfferSyncPopUpWindow.click();
 }
 async clickOnOkOfferSyncPopUpWindow(){
   await this.OkOfferSync.click();
 }
   //9498
 async clickOnClosePopupWindow(){
   await this.ClosePopupWindow.click();
 }

 async validateSystemDisplaySearchResult(){
   await expect(this.vSystemDisplayResult).toBeVisible();
 }
async enterDateRange(){
   await this.FromDate.fill('08/01/2024');
   await this.ToDate.fill('08/19/2024');
}
async selectSourceOption(Option){
   await this.selectSource.selectOption(Option);
}
async selectPriorityOption(Option){
   await this.selectPriority.selectOption(Option);
}
async validateNoDataFound(){
   await expect(this.vNoData).toBeVisible();
}
async clickOnSearchOffer(){
   await this.SearchOffer.click();
}


   //UH_9468
 async validateEmailSectionDisplayed(){
   await expect(this.vEmailSection).toBeVisible();
 }
 async clickOnAddNewEmailLink(){
   await this.AddNewEmail.click();
 }
 async clickOnEmailEditButton(){
   await this.EditEmail.click();
 }
 async clickOnEmailTypeArrow(){
   await this.EmailTypeArrow.click();
 }
async selectEmailType(EmailType){
   await this.EmailType.selectOption(EmailType);
}
async enterEmailAddress(EmailAddress1){
   await this.EmailAddress.fill(EmailAddress1);
}
 async clickOnSaveEmailAddress(){
   this.SaveEmail.click();
 }
  
   //9517 
   async checkOptionHardRockNorthernIndianaInDisplayPropertyQuickOffer(){
      await this.CheckDisplayProperty1.click();
}
   async checkOptionUnityStoreInDisplayLocationQuickOfferSetupPage(){
      await this.CheckDisplayLocation1.click();
      await this.DisplayLocationDropdown.click();
}
 async enterExpiredStartDate(StartDate){
   await this.StartDate.fill(StartDate);
}
 async enterExpiredEndDate(EndDate){
     await this.EndDate.fill(EndDate);
 }
 async enterDisplayEndDate(DisplayEndDate){
   await this.DisplayEndDate.fill(DisplayEndDate);
 }
 async clickOnExpandPlayerSearchIcon(){
   await this.ExpandPlayerSearchIcon.click();
}
   async enterEventOfferNameInSearchBox(EventAndOfferName){
      await this.page.waitForTimeout(3000);
   await this.EventAndOfferName.fill(EventAndOfferName);
   await this.page.waitForTimeout(3000);
}
async clickOnSearchViewEventAndOffer(){
   await this.SearchViewEventAndOffer.click();
}
async validateOfferCreatedNotDisplayed(){
   await expect(this.vOfferNotDisplayed).toBeVisible();
}
   //UH_9512
      
      async clickOnUSOptionInRegionQuickOfferPage(){
        await this.RegionDropdownQuickOffer.click();
        await this.RegionUS.click();
      }
   //UH_9521
   async selecCardTierRestrictionLegendQuickOfferPage(){
      await this.CardTierRestrictionDropdownQuickOfferSetup.click();
      await this.CardTierRestriction2.click();
   }

   //UH_9522
   async selecCardTierRestrictionIconQuickOfferPage(){
      await this.CardTierRestrictionDropdownQuickOfferSetup.click();
      await this.CardTierRestriction3.click();
   }
   //UH_9523
   async checkHotelOptionOfLobQuickOfferSetupPage(){
      await this.CheckLobQuickOfferHotel.click()
   }
   async checkHardRockAtlanticCityOptionDisplayPropertyQuickOffer(){
      await this.page.waitForTimeout(2000);
      await this.checkDisplayPropertyHardRockAtlanticCity.click();
   }
   async checkHardRockNorthernIndianaOptionDisplayPropertyQuickOffer(){
      await this.page.waitForTimeout(2000);
      await this.checkDisplayPropertyHardRockNorthernIndiana.click();
      await this.page.waitForTimeout(2000);
   }
   async checkOptionOfDisplayLocationQuickOfferSetupPage(){
      await this.page.waitForTimeout(2000);
      await this.checkLocationLocation71.click();
      await this.page.waitForTimeout(2000);
   }
   //UH_9524
   async enterStartDateQuickOfferSetupPage(StartDate){
      await this.StartDateQuickOffer.fill(StartDate)
   }
   async enterEndDateQuickOfferSetupPage(EndDate){
      await this.EndDateQuickOffer.fill(EndDate)
   }
   
   //UH_9510
   
   async clickOnDeactiveForRecentlycreatedOffer(){
      await this.DeactiveButton.click();
   }
   async validateConfirmDeactivateOfferWindowDisplayed(){
      await expect(this.vConfirmDeactivatePopup).toBeVisible();
   }
   async clickOnConfirmTab(){
      await this.ConfirmTab.click();
   }
   async validateNotificationOfOfferDeactivated(){
      await expect(this.vOfferDeactivated).toBeVisible();
   }
   async clickOnCloseDeactivePopUp(){
      await this.CloseDeactivePopUp.click();
   }
   async validateCreatedOfferNotDisplayed(){
      await expect(this.vOfferCreated).toBeVisible();
   }
   //UH_9516
   async validateCopyButtonInQuickOfferSection(){
      await expect(this.vCopyButtonQuickOffer).toBeVisible();
   }
   async clickOnCopyButton(){
      await this.vCopyButtonQuickOffer.click();
   }
   async validateOfferInEditModeAppeared(){
      await expect(this.vOfferInEditModeCopy).toBeVisible();
   }
   async editDisplayDescriptionInQuickOfferPage(DisplayDescription){
      await this.DisplayDescription.fill(DisplayDescription);
   }
   async editDisclaimerInQuickOfferPage(Disclaimer){
      await this.Disclaimer.fill(Disclaimer);
   }
   async validateNoFileSelectedInInviteeListSection(){
      await this.page.waitForTimeout(3000);
      await expect(this.vNoFileSelected).toBeVisible();
      await this.page.waitForTimeout(3000);
   }
  
      
   //UH_9509
   async ValidateEditButtonInQuickOfferSectionForEachOfferLineDisplayed(){
      await expect(this.vEditButtonQuickOffer).toBeVisible();
   }
   async clickOnEditButton1(){
      await this.EditButton1.click()
   }
   async validateOfferInEditModeDisplayed(){
      await expect(this.vOfferInEditMode).toBeVisible();
   }
   async clickOnOfferSetUp(){
      await this.OfferSetUP.click();
   }
   async validateLobIsNotEditable(){
      await expect(this.vLobNotEditable).toBeVisible();
   }
   async clickOnSaveAndClose(){
      await this.SaveAndClose.click();
   }
   //UH_9511
   async clickOnRegionDropdownInQuickOfferPage(){
      await this.page.waitForTimeout(3000);
      this.RegionDropdownQuickOffer.click();
      await this.page.waitForTimeout(3000);
      this.RegionDropdownQuickOffer.click();
   }
   async uncheckOptionOfRegionQuickOfferSetupPage(){
      this.UncheckRegionQuickOffer.click();
   }
   //UH_9508
   async selecCardTierRestrictionStarQuickOfferPage(){
      await this.page.waitForTimeout(3000);
      await this.CardTierRestrictionDropdownQuickOfferSetup.click();
      await this.page.waitForTimeout(3000);
      await this.CardTierRestrictionDropdownQuickOfferSetup.click();
      await this.page.waitForTimeout(4000);
      await this.CardTierRestrictionDropdownQuickOfferSetup.click();
      await this.page.waitForTimeout(4000);
      await this.CardTierRestriction.click();
   }
   //UH_9507
   async clickOnCardTierRestrictionDropdownQuickOfferSetupPage(){
      await this.page.waitForTimeout(4000);
      await this.CardTierRestrictionDropdownQuickOfferSetup.click();
      await this.page.waitForTimeout(4000);
      //await this.CardTierRestrictionDropdownQuickOfferSetup.click();
   }
   async selecCardTierRestrictionXQuickOfferPage(){
      await this.page.waitForTimeout(4000);
      await this.CardTierRestrictionDropdownQuickOfferSetup.click();
      await this.CardTierRestriction1.click();
      await this.page.waitForTimeout(4000);
   }
   async validateSummaryPage1Displayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vSummaryPage1).toBeVisible();
   }

   //UH_9502
async validateInLobCasinoOptionSelectedByDefault(){
   await expect(this.vCasinoOptionLOBDropdown).toBeVisible();
}
//UH_9452
async clickOnofferSetupPage(){
   this.offerSetupPage.click();
}
   //UH_9462
   async clickonLighteningIcon(){
      await this.LighteningIcon.click();
   }
   async validateAlertWindowShowsLegendwith0TierPoints(){
      await expect(this.AlertWindow).toBeVisible();
   }
   async clickOnCloseAlert(){
      this.closeAlert.click();
   }
  
   async clickOnExpandSearchIcon(){
      this.ExpandSearchIcon.click();
   }
   async validateAlertWindowShowsLegendwithMoreThan0TierPoints(){
      await expect(this.AlertWindow).toBeVisible();
   }
   //UH_9461
   async clickOnPlayerTierWithTierMatch(){
      await this.PlayerTierwithTierMatch.click();
   }
   async validatePlayerTierWithTierMatchPopUpWindowOpens(){
      await expect(this.vPopUpWindow).toBeVisible();
   }
   async selectReason(Reason){
      await this.Reason.selectOption(Reason);
   }
   async selectCompetitorCasino(Option){
      await this.CompetitorCasino.selectOption(Option);
   }
   async clickOnCancelButtonTierMatchWindow(){
      await this.page.waitForTimeout(4000);
      await this.CancelButtonTierMatchWindow.click();
      await this.page.waitForTimeout(4000);
   }
   //UH_9495
   async selectVoidRadioButton(){
      await this.VoidRadioButton.click();
   }
   async validateVoidConfirmationMessage(){
      await expect(this.vVoidConfirmation).toBeVisible();
   }
   async validateMessageCommentVoidedSuccessfully(){
      await expect(this.vCommentVoidedMessage).toBeVisible();
   }
    //UH_9443
    async clickOnCloseEventsAndOffersSuccessPopUp(){
      await this.closeSuccessPopup.click();
   }
    async clickOnView1(){
      await this.view1.click();
   }
    async clickOnAddMasterListItems(){
      await this.page.waitForTimeout(2000);
      await this.addmasterListItem.click();
      await this.page.waitForTimeout(2000);
    }
   async addMasterListItem1(prizeName,prizeCode,interDesc,unitCst,phyInvent){
      await this.displayPrizeName.fill(prizeName)
      await this.prizeCode.fill(prizeCode)
      await this.internalDescription.fill(interDesc)
      await this.unitCost.fill(unitCst)
      await this.physicalInventory.fill(phyInvent)
      await this.saveMaster.click();
      await this.page.waitForSelector('//option[contains(text(),"PrizeName1")]',{state:'visible'});
      await this.selectPrize1.click();
      await this.addNewMasterItem.click();
      // await this.physicalInventory1.fill(phyInvent1);
      await this.addSaveMasterItemButton.click();
   }
   async addMasterListItem11(prizeName,prizeCode,interDesc,unitCst,phyInvent,phyInvent1){
      await this.displayPrizeName.fill(prizeName)
      await this.prizeCode.fill(prizeCode)
      await this.internalDescription.fill(interDesc)
      await this.unitCost.fill(unitCst)
      await this.physicalInventory.fill(phyInvent)
      await this.saveMaster.click();
      await this.page.waitForSelector('//option[contains(text(),"PrizeName1")]',{state:'visible'});
      await this.selectPrize1.click();
      await this.addNewMasterItem.click();
      await this.physicalInventory1.fill(phyInvent1);
      await this.addSaveMasterItemButton.click();
   }

   async EnterAttendanceCapacity(attendanceCapacity){
      await this.attendanceRadioButton.click();
      await this.attendeeCapacityField.fill(attendanceCapacity)
   }
   async clickOnSubmitForReviewButtonAndVerifyOfferIsSubmittedSuccessfully(){
      await this.submitForReview.click();
      await expect(this.offerSubmittedSuccessfullyMessage).toBeVisible();
      await this.closeSuccessPopup.click();
   }

   //UH_9448

   async addMasterListItem2(prizeName,prizeCode,interDesc,unitCst,phyInvent){

      await this.displayPrizeName.fill(prizeName)
      
      await this.prizeCode.fill(prizeCode)
      await this.internalDescription.fill(interDesc)
      await this.unitCost.fill(unitCst)
      await this.physicalInventory.fill(phyInvent)
      await this.saveMaster.click();
      await this.page.waitForSelector('//option[contains(text(),"PrizeName1")]',{state:'visible'});
          
   }
   async addNewItem(phyInvent1){
      await this.page.waitForTimeout(2000);
      await this.addNewMasterItem.click();
      await this.physicalInventory1.fill(phyInvent1);
      await this.addSaveMasterItemButton.click();
   }
   async clickOnPrize1(){
      await this.selectPrize1.click();
   }
   async clickOnPrize2(){
      await this.selectPrize2.click();
   }
   async clickOnPrize3(){
      await this.selectPrize3.click();
   }
   async clickOnPrize4(){
      await this.selectPrize4.click();
   }
   async clickOnPrize5(){
      await this.selectPrize5.click();
   }
   async clickOnPrize6(){
      await this.selectPrize6.click();
   }
   
   async clickOnPrize7(){
      await this.selectPrize7.click();
   }
   async clickOnPrize8(){
      await this.selectPrize8.click();
   }
   async clickOnPrize9(){
      await this.selectPrize9.click();
   }
   async clickOnPrize10(){
      await this.selectPrize10.click();
   }
   async clickOnPrize11(){
      await this.selectPrize11.click();
   }

   async config1(){
      await this.configIcon.click();
      await this.selectPrimaryPrize1.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize2.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize3.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize4.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize5.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize6.click();
      await this.selectMoveButton.click();
      // await this.selectPrimaryPrize7.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize8.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize9.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize10.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize11.click();
      // await this.selectMoveButton.click();
      // await this.selectBackUpPrize1.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize2.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize3.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize4.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize5.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize6.click();
      // await this.selectMoveButton1.click();
      await this.selectBackUpPrize7.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize8.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize9.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize10.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize11.click();
      await this.selectMoveButton1.click();
      await this.update.click();

      await this.configLegend.click();
      await this.selectPrimaryPrize1.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize2.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize3.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize4.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize5.click();
      await this.selectMoveButton.click();
      // await this.selectPrimaryPrize6.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize7.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize8.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize9.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize10.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize11.click();
      // await this.selectMoveButton.click();
      // await this.selectBackUpPrize1.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize2.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize3.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize4.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize5.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize6.click();
      // await this.selectMoveButton1.click();
      await this.selectBackUpPrize7.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize8.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize9.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize10.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize11.click();
      await this.selectMoveButton1.click();
      await this.update.click();

      await this.configStar.click();
      await this.selectPrimaryPrize1.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize2.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize3.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize4.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize5.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize6.click();
      await this.selectMoveButton.click();
      // await this.selectPrimaryPrize7.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize8.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize9.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize10.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize11.click();
      // await this.selectMoveButton.click();
      // await this.selectBackUpPrize1.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize2.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize3.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize4.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize5.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize6.click();
      // await this.selectMoveButton1.click();
      await this.selectBackUpPrize7.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize8.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize9.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize10.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize11.click();
      await this.selectMoveButton1.click();
      await this.update.click();

      await this.configXcard.click();
      await this.selectPrimaryPrize1.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize2.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize3.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize4.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize5.click();
      await this.selectMoveButton.click();
      await this.selectPrimaryPrize6.click();
      await this.selectMoveButton.click();
      // await this.selectPrimaryPrize7.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize8.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize9.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize10.click();
      // await this.selectMoveButton.click();
      // await this.selectPrimaryPrize11.click();
      // await this.selectMoveButton.click();
      // await this.selectBackUpPrize1.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize2.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize3.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize4.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize5.click();
      // await this.selectMoveButton1.click();
      // await this.selectBackUpPrize6.click();
      // await this.selectMoveButton1.click();
      await this.selectBackUpPrize7.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize8.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize9.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize10.click();
      await this.selectMoveButton1.click();
      await this.selectBackUpPrize11.click();
      await this.selectMoveButton1.click();
      await this.update.click();
    
   }

   //UH_9492
   async loginToApp(){
      await this.username.fill('TU_LAB_HALO_NIN_ADM');
      await this.password.fill('Password01@$');
      await this.domain.selectOption('seminolehardrock.fl.local')
      await this.loginBtn.click()
   }
   async clickOnOfferManagement(){
      await this.offerManagement.click();
   }
   async clickOnManagecampaign(){
      await this.ManageCampaign.click();
   }
   async clickOnSubmitCampaign(){
      await this.submitCampaign.click();
   }
   async validateCampaignLabel(){
      await expect(this.vCampaignLabel).toBeVisible()
   }
   async clickOnViewcampaign(){
      await this.viewCampaign.click();
   }
   async clickOnAddCampaign(){
      await this.addCampaign.click();
   }
   async validateNewCampaignLabel(){
      await expect(this.vNewCampaignLabel).toBeVisible()
   }
   
//UH_9451

//async validateSelectedEventNotvisible(){
   //await expect(this.playerEventAndOfferDashboard).toBeVisible()
   //await expect(this.vNewEventCreatedVisibilityOnPage).not.toBeVisible();
//}
async selectEventsAndOffersButtonOnPlayerDashBoard(){
   await this.EventsAndOffersButtonOnPlayerDashBoard.click();
   }
 async validatePlayerEventsAndOffersPage(){
   await expect(this.vPlayerEventsAndOffersPage).toBeVisible();
}

async clickOnInvitedFilter(){
   await this.InvitedFilter.click();
   }

async searchForEvent(EventName){
   await this.SearchTabPlayerEvents.fill(EventName);

}
async ValidateSelectedEventVisible(){
      await expect(this.vNewEventCreatedVisibilityOnPage).toBeVisible();
   }
async clickOnMoreLinkofEvent(){
   await this.page.waitForTimeout(3000);
   await this.MoreLinkofEvent.click();
   await this.page.waitForTimeout(3000);
   }
async ValidateSelectedEventDetailsSectionPage(EventName){
   await expect(this.vSelectedEventDetailsPage).toBeVisible(EventName);
   }
async ValidateBookNowButtonNotVisible(){
   await expect(this.vBookNowButton).not.toBeVisible();
   }
async ValidateUnInvitationCommentVisible(){
   await expect(this.vUninvitedPatron).toBeVisible();
   }


   

   //UH_9494
   async clickOnReplyTab(){
      await this.vReply.click()
   }
   async validateReplyAddedSuccessfullyPopup(){
      await expect(this.vReplyAddedPopup).toBeVisible();
   }
   async clickOnLeftArrowViewComment(){
      await this.LeftArrowViewComment.click();
   }
   async validateTableDisplayedViewComment(){
      await expect(this.vDisplayDateViewComment).toBeVisible();
      await expect(this.vCommentViewComment).toBeVisible();
      await expect(this.vUserNameViewComment).toBeVisible();


   }
   //UH_9467
   async validateAddressSectionDisplayed(){
      await expect(this.vAddress).toBeVisible();
   }
   async clickOnAddNewAddress(){
      await this.AddNewAddress.click();
   }
   async selectAddressType(AddressType){
      await this.AddressType.selectOption(AddressType);
   }
   async enterAddress1(Address1){
      await this.Address1.fill(Address1);
   }
   async enterAddress2(Address2){
      await this.Address2.fill(Address2);
   }
   async enterCity(City){
      await this.City.fill(City);
   }
   async selectCountry(Country){
      await this.Country.selectOption(Country);
   }
   async selectState(State){
      await this.State.selectOption(State);
   }
   async enterZip(Zip){
      await this.Zip.fill(Zip);
   }
   async clickOnSaveAddress(){
      await this.SaveAddress.click();
   }
   
   //UH_9469
   async clickOnAddNewPhone(){
      await this.vAddNewPhone.click();
   }
   async validatePhoneSectionDisplayed(){
      await expect(this.vPhoneSection).toBeVisible();
   }
   async selectTypeInPhoneFields(PhoneType){
   await this.PhoneType.selectOption(PhoneType);
   }
   async enterPhoneNumber(PhoneNumber){
      await this.PhoneNumber.fill(PhoneNumber);
   }
   async clickOnSavePhoneNumber(){
      await this.SavePhoneNumber.click();
   }
   async validateDuplicatePhoneNumberMessageIsDisplayed(){
      await expect(this.vDuplicatePhoneNumberMessage).toBeVisible();
   }
   // async validateEditDeleteAddNewPhoneTab(){
   //    await expect(this.vEditPhoneTab).toBeVisible();
   //    await expect(this.vDeletePhoneTab).toBeVisible();
   //    await expect(this.vAddNewPhone).toBeVisible();
   // }

   //UH_9476
   async clickOnTierHistoryTab(){
      await this.TierHistoryTab.click();
   }
   async validateTierHistoryDetailsDisplayed(){
      await expect(this.vTierHistoryDetails).toBeVisible();
   }
   async validatePhoneNumberSaved(){

   }
   //UH_9497
   async validateNoDataInDateRangeFields(){
      await expect(this.vSearchFrom).toBeVisible();
      await expect(this.vSearchTo).toBeVisible(); 
   }
   async  validateValueAllByDefaultDisplayedInSourceDepartmentPropertyPriorityDropdownFields(){
      await expect(this.vSource_1).toBeVisible();
      await expect(this.vDepartment_1).toBeVisible();
      await expect(this.vProperty_1).toBeVisible();
      await expect(this.vPriority_1).toBeVisible();
   }
//UH_9453
   async clickOnPlayerReservation(){
      await this.playerReservation.click();
   }
   async enterPlayerReservationName(EventName){
      await this.playerReservationName.fill(EventName);
   }
   async clickOnPlayerReservationSearch(){
      await this.playerReservationSearch.click();
   }
   async clickOnPlayerDetailsLink(){
      await this.playerDetails.click();
   }
   async clickOnPlayerReservationCanclelAndConfirm(){
   await this.cancelPlayerReservation.click();
   await this.confirmCancellation.click();
}
async reservationCancellationSuccessfullpopup(){
await expect(this.vReservationCancelSuccessful).toBeVisible();
}
async closeReservationCancelationSuccessfulPopup(){
   await this.closeCancellationSuccsessPopup.click();
}
   //UH_9503
   async checkOptionCafeOfLobQuickOfferSetupPage(){
      await this.checkLobCafeQuickOfferSetUpPage.click();
   }
   async selectOfferTypePartnerOffersQuickOfferPage(){
      await this.OfferTypePartnerOffersQuickOfferPage.click();

   }
   async checkOptionHardRockCafeAtlantaDisplayPropertyQuickOffer(){
      await this.DisplayPropertyDropdownQuickOffer.click();
      await this.page.waitForTimeout(4000);
      await this.DisplayPropertyDropdownQuickOffer.click();
      await this.HardRockCafeAtlantaDisplayPropertyQuickOffer.click();
      await this.page.waitForTimeout(4000);
      await this.DisplayPropertyDropdownQuickOffer.click();
   }
   async checkOptionLocation67OfDisplayLocationQuickOfferSetupPage(){
      await this.DisplayLocationDropdown.click();
      await this.page.waitForTimeout(4000);
      await this.Location67DisplayLocationQuickOffer.click();
      await this.DisplayLocationDropdown.click();
   }
  
   //UH_9505
   async clickOnAddNewQuickOffer(){
      await this.AddNewQuickOffer.click();
   }
   async validateNewQuickOfferSetupPageDisplayed(){
      await expect(this.vNewQuickOfferSetupPage).toBeVisible();
   }
   async clickOnLobDropdownQuickOfferPage(){
      await this.page.waitForTimeout(3000);
      await this.LobDropdownQuickOfferPage.click();
      await this.page.waitForTimeout(3000);    
   }
   async uncheckOptionOfLobQuickOfferSetupPage(){
      await this.UncheckLobQuickOffer.click();
   }
   async checkOptionOfLobQuickOfferSetupPage(){
      await this.page.waitForTimeout(3000);
      await this.CheckLobQuickOfferHotel.click();
      await this.page.waitForTimeout(3000);
   }
   async clickOnOfferTypeDropdownQuickOfferPage(){
      await this.OfferTypeDropdownQuickOffer.click();
      await this.page.waitForTimeout(5000);
      await this.OfferTypeDropdownQuickOffer.click();
   }
   async clickOnOfferTypeDropdownWhenCasinoIsSelectedInQuickOfferPage(){
      await this.OfferTypeDropdownQuickOffer.click();
      await this.page.waitForTimeout(2000);
    }

   async selectOfferTypeQuickOfferPage(){
      await this.OfferTypeDropdownQuickOffer.click();
      await this.page.waitForTimeout(4000);
      await this.OfferTypeDropdownQuickOffer.click();
      await this.page.waitForTimeout(4000);
      await this.OfferTypeQuickOfferValue.click();
      await this.page.waitForTimeout(4000);
    }
   async clickOnDisplayPropertyDropdownQuickOfferSetupPage(){
      await this.page.waitForTimeout(5000);
      await this.DisplayPropertyDropdownQuickOffer.click();
      await this.page.waitForTimeout(5000);
   }
   async checkOptionDisplayPropertyQuickOffer(){    
      await this.page.waitForTimeout(3000); 
      await this.CheckDisplayProperty.click();
      await this.page.waitForTimeout(3000);
    }
    async clickOnDisplayLocationDropdown(){
      await this.DisplayLocationDropdown.click();
      await this.page.waitForTimeout(3000);
      await this.DisplayLocationDropdown.click();
    }
    async checkOptionOfDisplayLocationQuickOfferSetupPage(){
      await this.CheckDisplayLocation.click();
      await this.DisplayLocationDropdown.click();
    }
    async enterDisplayName(Name){
      await this.page.waitForTimeout(3000);
      await this.DisplayNameQuickOffer.fill(Name);
      await this.page.waitForTimeout(3000);
    }
    async enterDisplayDescriptionInQuickOfferPage(Description){
      await this.DisplayDescription.fill(Description);
    }
    async enterDisclaimerInQuickOfferPage(Disclaimer){
      await this.page.waitForTimeout(3000);
      await this.Disclaimer.fill(Disclaimer);
      await this.page.waitForTimeout(3000);
    }
    async clickOnSaveAndNextStepQuickOfferPage(){
      await this.SaveAndNextStepQuickOfferPage.click();
    }
    async validateSelectAFileButtonDisplayedInInviteeListSection(){
      await this.page.waitForTimeout(3000);
      await expect(this.vSelectAFileButton).toBeVisible();
      await this.page.waitForTimeout(3000);
    }
   async validateUploadButtonDisplayedInInviteeListSection(){
      await expect(this.vUploadButton).toBeVisible();
  }
  async clickOnSaveAndNextInvitationDetailsPage(){
      await this.page.waitForTimeout(3000);
      await this.SaveAndNextStepQuickOfferPage.click();
      await this.page.waitForTimeout(3000);
   }
   async clickOnSubmitButton(){
      await this.page.waitForTimeout(3000);
      await this.SubmitButton.click();
   }
   async validateOfferSuccessfullySubmittedMessage(){
      await expect(this.vOfferSubmittedMessage).toBeVisible();
   }
   async clickOnCloseSuccessPopUp(){
      await this.page.waitForTimeout(3000);
      await this.closeSuccessPopup.click();
      await this.page.waitForTimeout(3000);
   }
   async enterOfferNameInSearchBox(OfferName){
      await this.page.waitForTimeout(5000);
      await this.OfferSearch.fill(OfferName);
   }
   async validateOfferCreatedDisplayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vOfferCreated).toBeVisible();
   }

   //UH_9506
   async checkOptionOnlineOfLobQuickOfferSetupPage(){
      await this.OnlineLobQuickOfferSetupPage.click();
   }
  
      
   //UH_9444
   async selectThreeDotsAfterCreatorColoumn(){
      this.ThreeDots.click();
   }
   async clickOnView(){
      await this.View.click();
   }
   async validateSummaryPageDisplayed(){
      await expect(this.vSummaryPage).toBeVisible();
   }
   async clickOnApprovedOfferTab(){
      await this.ApprovedOfferTab.click();
   }
   async validateOfferApprovedSuccessPopUp(){
      await this.page.waitForTimeout(3000);
      await expect(this.vOfferApprovedPopup).toBeVisible();
   }
   async clickOnCloseEventsAndOffersSuccessPopUp(){
      await this.page.waitForTimeout(3000);
      await this.closeButtonOfferApprovedPopUP.click();
      await this.page.waitForTimeout(3000);
   }
   
   
  //UH_9429
   async clickOnNameColumn(){
      await this.Name.click();
   }
   async validateOffersSortedInAscendingOrder(){
      await expect(this.Ascending).toBeVisible();
   }
   async validateOffersSortedInDescendingOrder(){
      await expect(this.Descending).toBeVisible();
   }
   async clickOnDescriptionColumn(){
      await this.DescriptionQuickOffer.click();
   }
   async clickOnStartDateColumn(){
      await this.page.waitForTimeout(3000);
      await this.StartDate1.click();
      await this.page.waitForTimeout(3000);
   }
   async clickOnEndDateColumn(){
      await this.page.waitForTimeout(3000);
      await this.EndDate1.click();
      await this.page.waitForTimeout(3000);
   }
   async clickOnDisplayDateColumn(){
      await this.DisplayDate.click();
   }

   //UH_9430
   async clickOnEventsAndOffers(){
      await this.EventsAndOffers.click();
   }
   async clickOnManageQuickOffers(){
      await this.ManageQuickOffers.click();
   }
   async validateQuickOfferSetupPageWithActiveQuickOffersDisplayed(){
      await expect(this.QuickOfferPage).toBeVisible();
   }
   
   //UH_9431
   async clickOnDropdown(){
      await this.Dropdown.click();
   }
   async selectOptionFromViewDropdown(Option){
      await this.ViewQuickOffer.selectOption(Option);
   }
   async clickOnSearchForQuickOffer(){
      await this.page.waitForTimeout(3000);
      await this.SearchQuickOffer.click();
      await this.page.waitForTimeout(5000);
   }
   async validateExpiredQuickOffersDisplayed(){
      await expect(this.vSelectedOffers).toBeVisible();
   }
   async validateInactiveQuickOffersDisplayed(){
      await expect(this.vSelectedOffers).toBeVisible();
   }

   //UH_9432
   async selectFillOutQuickOfferFields(Name){
    await this.OfferTypeQuickOffer1.click();
    await this.selectEntertainmentQuickOffers.click();

    await this.displayPropertyDropdownQuickOffer1.click();
    await this.selectOptionDisplayPropertyQuickOffers.click();

    await this.displayLocationQuickOffers1.click();
    await this.selectOptionDisplayLocationQuickOffers1.click();

    await this.DisplayNameQuickOffer.fill(Name);

    await this.cardTierRestrictionQuickOffers.click();
    await this.selectOptionCardTierRestrictionQuickOffer.click()

    await this.enterDisplayDescriptionInQuickOfferPage.fill('test');
    await this.enterDisclaimerInQuickOfferPage.fill('Automation Testing');

   }

   //UH_9437
   async selectPropertyFromPropertyDropdown(Property){
      await this.page.waitForTimeout(3000);
      await this.PropertyQuickOffer.selectOption(Property);
      await this.page.waitForTimeout(3000);
   }
   async validateQuickOffersOfSelectedPropertyDisplayed(){
      await expect(this.vSelectedOffers).toBeVisible();
   }

   //UH_9438
   async clickOnManageEventsAndOffers(){
      await this.ManageEventsAndOffers.click();
   } 
   async validateEventsAndOfferPageDisplayed(){
      await expect(this.vEventsAndOfferPage).toBeVisible();
   }
   async enterOfferName(OfferName){
      await this.OfferName.fill(OfferName);
   }
   async clickOnSearchForEventsAndOffers(){
      await this.SearchEventsOffers.click();
   }
   async validateOffersAccordingtoSearchCriteriaDisplayed(){
      await expect(this.vEventsAndOfferPage).toBeVisible();
   }
   async clickOnClear(){
      await this.Clear.click();
   }
   async enterFromDate(Date){
      await this.FromDateEventSearch.fill(Date);
   }
   async enterToDate(Date){
      await this.ToDateEventSearch.fill(Date);
   }
   
   //UH_9439
   async selectPropertyFromEventsAndOfferPropertyDropdown(Property){
      await this.PropertyEventsAndOffers.selectOption(Property);
   }

   //UH_9440
   async selectTypeFromEventsAndOfferTypeDropdown(Type){
      await this.TypeEventsAndOffers.selectOption(Type);
   }

   //UH_9441
   async validateActiveViewAndApprovedStateSelectedByDefault(){
      await expect(this.vEventsAndOfferPage).toBeVisible();
   }
   async selectViewFromEventsAndOfferViewDropdown(View){
      await this.ViewEventsAndOffers.selectOption(View);
   }
   async selectStateFromEventsAndOfferStateDropdown(State){
      await this.StateEventsAndOffers.selectOption(State);
   }

   //UH_9442
   async clickOnAddNewEventAndOffers(){
      await this.AddNewEventAndOffers.click();
   }
   async ValidateAddNewEventAndOffersPage(){
      await expect(this.vAddNewEventAndOffers).toBeVisible();
   }
   async SelectfillOutNewEventFields(eventName){
      await this.DisplayPropertyAddNewEvent.selectOption('Hard Rock Sacramento');
      await this.DisplayLocation.selectOption('Event Location 1');
      await this.page.waitForTimeout(3000);
      await this.DisplayName.fill(eventName);
      await this.DisplayDescription.fill('Test_Description');
      //await this.DisplayCallToAction.selectOption('Online Booking');
      await this.vStartDateEvent.fill('10/11/2024')
      await expect (this.vStartDateEvent).toBeVisible();
      // await expect (this.vEndDateEvent).Clear();
      await this.vEndDateEvent.fill('10/19/2024');
      const now = new Date();
      const hours = String(now.getHours()).padStart(2,'0');
      const minutes = String(now.getMinutes()).padStart(2,'0');
      const formattedTime ='${hours}:${minutes}';
      // await this.page.waitForTimeout(300000);
      // await page.fill(this.eventStartTime,formattedTime);
      // await this.eventStartTime.fill("12:00 AM");
      // await this.page.waitForTimeout(300000);
      await expect(this.vDisplayStartDateEvent).toBeVisible();
      await expect(this.vDisplayEndDateEvent).toBeVisible();
   }
   async SelectfillOutNewEventFields4(eventName){
      await this.DisplayPropertyAddNewEvent.selectOption('Hard Rock Sacramento');
      await this.DisplayLocation.selectOption('Event Location 1');
      await this.page.waitForTimeout(3000);
      await this.DisplayName.fill(eventName);
      await this.DisplayDescription.fill('Test_Description');
      let now = new Date();
      let now1 = new Date();
      now.setMinutes(now.getMinutes()+1);
      now1.setDate(now.getDate()+1)
      let formatter1 = now1.toLocaleDateString('en-US',{year: 'numeric', month: '2-digit', day: '2-digit'});
      let formatter = now.toLocaleDateString('en-US',{year: 'numeric', month: '2-digit', day: '2-digit'});
      let timeFormatter = now.toLocaleTimeString('en-US',{hour: '2-digit',minute:'2-digit'})
      console.log('Start date:',formatter);
      console.log('Start date1:',formatter1);
      console.log('Time Sec:',timeFormatter);
      await this.vStartDateEvent.fill(formatter)
      await expect (this.vStartDateEvent).toBeVisible();
      await this.vEndDateEvent.fill('12/30/2024');
      // await this.page.fill(page.locator('//input[@id="ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtStarttime"]'),formattedTime);
      await this.page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtStarttime']").fill(timeFormatter)
      await this.page.waitForTimeout(2000);
      await this.DisplayActionDropdown.click();
      await this.page.waitForTimeout(2000);
      await this.selectOnlineBooking.click();
      await expect(this.vDisplayStartDateEvent).toBeVisible();
      await expect(this.vDisplayEndDateEvent).toBeVisible();
   }
   async SelectfillOutNewEventFields1(eventName){
      await this.DisplayPropertyAddNewEvent.selectOption('Hard Rock Sacramento');
      await this.DisplayLocation.selectOption('Event Location 1');
      await this.page.waitForTimeout(3000);
      await this.DisplayName.fill(eventName);
      await this.DisplayDescription.fill('Test_Description');
      //await this.DisplayCallToAction.selectOption('Online Booking');
      await this.vStartDateEvent.fill('10/11/2024')
      await expect (this.vStartDateEvent).toBeVisible();
      // await expect (this.vEndDateEvent).Clear();
      await this.vEndDateEvent.fill('10/19/2024');
      const currentDate = new Date();
      currentDate.setMinutes(currentDate.getMinutes()+1);
      const hours = String(currentDate.getHours()).padStart(2,'0');
      const minutes = String(currentDate.getMinutes()).padStart(2,'0');
      const formattedTime = '${hours}:${minutes}';
      console.log("formated time is "+formattedTime)
      // await this.page.fill(page.locator('//input[@id="ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtStarttime"]'),formattedTime);
      await this.page.locator("//input[@id='ctl00_ContentPlaceHolder1_ctrlOfferSetup_txtStarttime']").click();
      await this.page.locator("//li[contains(text(),'11:30 AM')]").click()
      await this.page.waitForTimeout(3000);
      await expect(this.vDisplayStartDateEvent).toBeVisible();
      await expect(this.vDisplayEndDateEvent).toBeVisible();
   }
   async validateBookNowButton(){
      // await this.page.waitForTimeout(6000);
      // await expect(this.bookNow).toBeVisible();
   }
   async clickOnBookNowButton(){
      await this.page.waitForTimeout(4000);
      await this.bookNow.click();
   }
   async selectCheckboxAndSendEmail(){
      await this.page.waitForTimeout(4000);
      await this.checkbox1.click();
      await this.page.waitForTimeout(4000);
      await this.sendEmail.click();
      await this.page.waitForTimeout(4000);
      await this.okEmailSentSuccesfully.click();
   }
   async clickOnPlayerInfo(){
      await this.playerInfo.click();
   }
   async clickSaveAndNextStep(){
      await this.SaveAndNextStep.click();
   }
   async selectCheckInNo(){
      await this.page.locator("(//input[@value='No'])[1]").click();
   }
   //UH_9454
   async clickOnCheckInButtonInEventCheckIn(){
      await this.page.waitForTimeout(3000);
      await this.page.getByRole('button', { name: 'Check-In' }).click();
      await this.page.waitForTimeout(3000);
   }
   async clickPaceReportButton(){
      await this.PaceReport.click();
   }
   async validatePaceReportPopupIsOpen(){
      await expect(this.PaceReportPopup).toBeVisible();
   }
   async closePaceReportPopup(){
      await this.PaceReportPopup.click();
   }
   async validateCheckInSuccessfulPopupAndClose(){
      await this.page.waitForTimeout(3000);
      await expect(this.checkInSucessMessage).toBeVisible();
      await this.page.waitForTimeout(3000);
      await this.page.getByRole('button', { name: 'Close' }).click();
      await this.page.waitForTimeout(3000);
   }
   async searchEventInCheckin(eventName){
      await this.page.locator("//input[@placeholder='Event & Offer Name']").fill(eventName);
      await this.page.locator("//input[@id='ctl00_ContentPlaceHolder1_btnSearchClick']").click();
   }
   async addPatronToEvent(){
      await this.addPlayerToEvent.click();
   }
   async selectEventInCheckin(eventID){
      const ele = "(//td[contains(text(),'"+eventID+"')])[1]";
      await this.page.locator(ele).click();
   }
   async enterPatronInEventCheckinAndSearch(PatronID){
      await this.page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtSearchPatron']").fill(PatronID);
      await this.page.locator("//input[@id='ctl00_ContentPlaceHolder1_ImgSearchPatron']").click();
   }
   async validatePatronWasNotInvitedPopup(){
      await expect(this.vPlayerNotInvitedPopup).toBeVisible();
   }
   async validateOverridereasonApproverusernameApproverpassword(){
      await expect(this.voverRideReason).toBeVisible();
      await expect(this.vApproverUsername).toBeVisible();
      await expect(this.vApproverPassword).toBeVisible();
   }
   async enterOverRideDetailsAndOverRide(Reason,Username,Password){
      await this.overrideReasonInput.fill(Reason);
      await this.overrideUsernameInput.fill(Username);
      await this.overridePasswordInput.fill(Password);
      await this.OverrideButton.click();
   }
   async config(){
      await this.configIcon.click();
      await this.selectPrimaryPrize.click();
      await this.selectMoveButton.click();
      await this.update.click();
      await this.configLegend.click();
      await this.selectPrimaryPrize.click();
      await this.selectMoveButton.click();
      await this.update.click();
      await this.configStar.click();
      await this.selectPrimaryPrize.click();
      await this.selectMoveButton.click();
      await this.update.click();
      await this.configXcard.click();
      await this.selectPrimaryPrize.click();
      await this.selectMoveButton.click();
      await this.update.click();
    
   }
   async clickOnCloseOfferApprovedEventsAndOffersSuccessPopUp(){
      await this.closeButtonOfferApprovedPopUP.click();
    }
    async clickOnCloseOfferSuccessPopup1(){
    await this.closeButtonOfferApprovedPopUP.click();
    }

    //UH_9456

    async config2(){
      await this.configIcon.click();
      await this.maxNoOfAttendees.fill('2');
      await this.maxPrizeQuantity.fill("3")
      await this.selectPrimaryPrize1.click();
      await this.selectMoveButton.click();
      await this.page.waitForTimeout(3000);
      await this.selectPrimaryPrize2.click();
      await this.selectMoveButton.click();
      await this.page.waitForTimeout(3000);
      //await this.selectPrimaryPrize3.click();
      //await this.selectMoveButton.click();
      await this.update.click();

      await this.configLegend.click();
      await this.maxNoOfAttendees.fill('2');
      await this.maxPrizeQuantity.fill("3")
      await this.selectPrimaryPrize1.click();
      await this.selectMoveButton.click();
      await this.page.waitForTimeout(3000);
      await this.selectPrimaryPrize2.click();
      await this.selectMoveButton.click();
      await this.page.waitForTimeout(3000);
      //await this.selectPrimaryPrize3.click();
      //await this.selectMoveButton.click();
      await this.update.click();

      await this.configStar.click();
      await this.maxNoOfAttendees.fill('2');
      await this.maxPrizeQuantity.fill("3")
      await this.selectPrimaryPrize1.click();
      await this.selectMoveButton.click();
      await this.page.waitForTimeout(3000);
      await this.selectPrimaryPrize2.click();
      await this.selectMoveButton.click();
      await this.page.waitForTimeout(3000);
      //await this.selectPrimaryPrize3.click();
      //await this.selectMoveButton.click();
      await this.update.click();

      await this.configXcard.click();
      await this.maxNoOfAttendees.fill('2');
      await this.maxPrizeQuantity.fill("3")
      await this.selectPrimaryPrize1.click();
      await this.selectMoveButton.click();
      await this.page.waitForTimeout(5000);
      await this.selectPrimaryPrize2.click();
      await this.selectMoveButton.click();
      await this.page.waitForTimeout(3000);
      //await this.selectPrimaryPrize3.click();
      //await this.selectMoveButton.click();
      await this.update.click();
      
    }

    async validateEventDetailsInPlayerTransaction(){
      await expect(this.vValueAfter).toBeVisible();
    }

    async clickOnclosePlayerTransactionWindow(){
      await this.closePlayerTransactionWindow.click();
    }
    async validateEventDetailsPageWithSuccessfullCheckin(){
      await this.vResendConfirmation.toBeVisible();
    }
   //UH_9445
   async clickOnRejectOffer(){
      await this.RejectOffer.click();
   }
   async validateRejectPopUp(){
      await expect(this.RejectPopUp).toBeVisible();
   }
   async rejectionReason(){
      await this.rejectReason.fill('Test');
   }
   async clickOnRejectTab(){
      await this.rejectTab.click();
   }
   async validateEventAndOffersPage(){
      await expect(this.EventsAndOffersPage).toBeVisible();
   }
   async validateRejectedOffer(){
      await expect(this.rejectedOffer).toBeVisible();
   }

   //UH_9446
   async validateThisPatronHasNotBeenInvitedToTheEvent(){
      await expect(this.VOverRideMessage).toBeVisible();
   }												
   async clickOnEmployeeDashboard(){
      await this.empDashboardButton.click()
   }
   async clickOnViewEventsAndOffers(){
      await this.viewEventsAndOffers.click()
   }
   async searchOfferFromViewEventsAndOffer(offerName){
      await this.searchOfferInViewEventsAndOffer.fill(offerName)
      await this.page.waitForTimeout(4000);
      await this.searchOfferInEventsAndOffer.click()
      await this.page.waitForTimeout(4000);
   }
   async clickOnMoreLink(){
      await this.moreInViewEventsAndOffer.click()
   }
   // async clickSelectAFileEventsAndOffers(){
   //    await this.SelectAFileEventsAndOffers.click()
   // }
   
 

   //9501
   async validatePriorityDropdownField(){
   await this.vPriority_1.click();
   await page.selectOption('select#ddlSearchPriority',{index: '1'})
   await page.selectOption('select#ddlSearchPriority',{index: '2'})
   await page.selectOption('select#ddlSearchPriority',{index: '3'})
   await page.selectOption('select#ddlSearchPriority',{index: '4'})
   await page.selectOption('select#ddlSearchPriority',{index: '5'})
   await page.selectOption('select#ddlSearchPriority',{index: '0'})
}
async selectHighComment(){
   await this.vSearch_1.click();
}
async validateHighCommentsAreOnlyDisplayed(){
   await expect(this.highComment).toBeVisible();

}

//UH_9460
async enterJustification(Justification){
   await this.Justification.fill(Justification);
}
async selectTier(Tier){
   await this.Tier.selectOption(Tier);
}
async clickOnAdjustButtonTierMatchWindow(){
   await this.Adjust.click();
}
async selectAuthorizationReason1(Reason){
   await this.AuthorizationReason1.selectOption(Reason);
}



//UH_9463

async clickOnPlayerTierWithTierMatch(){
   await this.PlayerTierwithTierMatch.click();
}
async validateTierPopUp(){
   await expect(this.vTierPopUp).toBeVisible();
}
async SelectReason(){
   await this.Reason_1.selectOption('Other');
}
async enterJustification(Justification){
   await this.Justification.fill(Justification);
}
async SelectTier(){
   await this.Tier.selectOption('Legend');
}
async clickOnAdjust(){
   await this.Adjust.click();
}
async validateAuthorizePOpUp(){
   await expect(this.vAuthorizePopUp).toBeVisible();
}
async Autorize(){
   await this.Password_1.fill('Password01@$');
   await this.Reason_2.selectOption('System Testing');
   await this.Comment_2.fill('System Testing');
   await this.Submit_2.click();
}
async clickOnPlayerTransactionLog(){
   await this.PlayerTransactionLog.click();
}
async SelectTier_1(){
   await this.Tier.selectOption('Icon');
}

   //UH_9465
   async clickOnViewComment(){
      await this.ViewComment.click();
   }
   
   async validateViewCommentPopUp(){
      await expect(this.vViewComment_PopUp).toBeVisible();
      await expect(this.vSource_1).toBeVisible();
      await expect(this.vDepartment_1).toBeVisible();
      await expect(this.vProperty_1).toBeVisible();
      await expect(this.vSearchFrom).toBeVisible();
      await expect(this.vSearchTo).toBeVisible();
      await expect(this.vPriority_1).toBeVisible();
      await expect(this.vSearch_1).toBeVisible();
      await expect(this.vAdd_1).toBeVisible();
      await expect(this.vViewSettled_Voided).toBeVisible();
      await expect(this.vDisplaydate_2).toBeVisible();
      await expect(this.vComment_2).toBeVisible();
      await expect(this.vPriority_2).toBeVisible();
      await expect(this.vSource_2).toBeVisible();
      await expect(this.vUsername_2).toBeVisible();
      await expect(this.vDepartment_2).toBeVisible();
      await expect(this.vproperty_2).toBeVisible();

   }
   async clickOnAdd(){
      await this.Add.click();
   }
   async selectAddCommentOption1(){
   // await this.page.waitForTimeout(3000);
   // await this.Priority_3.click();
   //await this.page.waitForTimeout(3000);
   await this.Priority_3.selectOption('3-Medium');
   await this.CommentDetails.fill('Testing');
   await this.Save_1.click();
   await this.Ok_1.click();
   }
   async clickOnComment(){
      await this.Comment.click();
   }
   async validateReplyEditDeletSettleVoidButtonsDisplayed(){
      await expect(this.vReply).toBeVisible();
      await expect(this.vEdit).toBeVisible();
      await expect(this.vDelete).toBeVisible();
      await expect(this.vSettle_Void).toBeVisible();
   }

   async clickOnDelete(){
      await this.Delete.click();
   }
   async validateDeletePopupoptions(){
      await expect(this.vConfirm).toBeVisible();
      await expect(this.vCancel).toBeVisible();
   }
   async clickOnCancel(){
      await this.Cancel.click();
   }
   async validateCommentPresence(){
      await expect(this.vComment_2).toBeVisible();
   }
   async clickOnConfirm(){
      await this.Confirm.click();
   }
   async enterAuthorizationDetails(EnterComment){
      await this.Password.fill('Password01@$');
      await this.Reason_3.selectOption('System Testing');
      await this.AutComment1.fill(EnterComment);
      await this.Submit_3.click();
   }
   async validateDeleteAcknowledgePopUp(){
      await expect(this.vDeletionPopUp).toBeVisible();
   }
   async clickOnOk_1(){
      await this.Ok_1.click();
   }
   async vDelPopUpClosed(){
      await expect(this.Ok_1).not.toBeVisible();
   }
   async validateNoDataFound(){
      await expect(this.vNoData).toBeVisible()
   
   }
   async clickOnClose(){
      await this.Close.click();
   }


   //UH_9466
   async selectAddCommentOption2(){
      await this.Priority.selectOption("2-High");
      await this.LimitToDepartment.selectOption("All");
      //await this.Global_AllProperties.click();
      await this.CommentType.selectOption("User Comment");
      //await this.ExpirationDate.Fill("08/15/2024");
      await this.CommentDetails.fill('Testing');

   }
   async clickOnCancelAddCommentOption(){
      await this.cancelAddCommentOption.click();
   }
   async clickOnSaveAddCommentOption(){
      await this.Save_1.click();
   }
   async validateAddCommentPopUp(){
      await expect(this.vAddCommentPopUp).toBeVisible();
   }
   async clickOnOkl(){
      await this.Ok_1.click();
   }
   async validateCommentAddedSuccessfully(){
      await expect(this.Comment).toBeVisible();
   }

   async selectAddCommentOption3(){
      await this.Priority.selectOption("2-High");
      await this.LimitToDepartment.selectOption("IT");
      await this.Global_AllProperties.click();
      await this.CommentType.selectOption("Customer Request");
      await this.LimitToPropertyDropDown.click();
      await this.selectCincinati.click();
      //await this.ExpirationDate.Fill("08/15/2024");
      await this.CommentDetails.fill('Testing');
      await this.unCheckNever.click()
   }
   async validateNewCommentAddedToCommentsTable(){
      await this.page.waitForTimeout(3000);
      await expect(this.vNewCommentAdded).toBeVisible();
   }
   async validateCommentDetailsSectionDisabled(){
      await expect(this.vCommentDetailsSection).toBeVisible();
   }
   async validateCommentDetailsSectionEnabled(){
      await expect(this.vCommentDetailsSection).toBeVisible();
   }
   async selectLimitToPropertyHardRockCincinnatiViewCommentPage(){
      await this.LimitToProperty1.click();
   }
   async selectNeverCheckboxIsNextToExpirationDate(){
      await this.NeverCheckBox.click();
   }
   async validateAlertPopUpMessageToEnterCommentDisplayed(){
      await expect(this.vAlertPopUpMessage).toBeVisible();
   }
   async validateAddTabDisabled(){
      await expect(this.AddComment).toBeVisible();
   }
   async enterExpirationDate1ViewCommentPage(){
      let now1 = new Date();
      now1.setDate(now1.getDate()+1)
      let formatter1 = now1.toLocaleDateString('en-US',{year: 'numeric', month: '2-digit', day: '2-digit'});
      console.log('Start date1:',formatter1);
      await this.ExpirationDateViewComment.fill(formatter1);
   }
    //UH_9470
    async clickOnCommPreferencesTab(){
      await this.CommPreferences.click();
   }
   async clickOnContactInformationTab(){
      await this.ContactInformation.click();
   }
   async validateSocialMediaSectionDisplayed(){
      await expect(this.vSocialMedia).toBeVisible();
   }
   async clickOnAddNewSocialMediaLink(){
      await this.AddNewSocialMedia.click();
   }
   async clickOnDeleteSocialMedia(){
      await this.DeleteSocialMedia.click();
   }
   async selectTypeInSocialMediaFields(Type){
      await this.Type.selectOption(Type);
   }
   async enterAccountName(AccountName){
      await this.AccountName.fill(AccountName);
   }
   async clickOnSaveSocialMedia(){
      await this.SaveSocialMedia.click();
   }
   async validateDetailsSavedAndDeleteAndEditButtonAndAddNewSocialMediaLinkDisplayed(){
      await expect(this.vDeleteSocialMedia).toBeVisible();
      await expect(this.vEditSocialMedia).toBeVisible();
   }
  
   
   //UH_9471
   async clickOnSearch(){
      await this.page.waitForTimeout(3000);
      await this.SearchPlayer.click();
      await this.page.waitForTimeout(3000);

   }
   async clickOnPlayerFunction(){
      await this.PlayerFunction.click();
   }
   async clickOnPlayerTransactionLog(){
      await this.page.waitForTimeout(3000);
      await this.PlayerTransactionLog.click();
      await this.page.waitForTimeout(3000);
   }
   async validatePlayerTransactionLogPopUp(){
      await this.page.waitForTimeout(4000);
      await expect(this.vTransactionDateTime).toBeVisible();
      await this.page.waitForTimeout(3000);
      await expect(this.vTransactionDescription).toBeVisible();
      await expect(this.vCreator).toBeVisible();
      await expect(this.vPropertyName).toBeVisible();
   }
   async clickOnLeftArrow(){
      await this.page.waitForTimeout(3000);
      await this.LeftArrow.click();
      await this.page.waitForTimeout(3000);
   }
   async validateTableDisplayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vValueBefore).toBeVisible();
      await this.page.waitForTimeout(3000);
      await expect(this.vValueAfter).toBeVisible();
      await expect(this.vApprovedBy).toBeVisible();
   }
   async clickOnClose(){
      await this.Close.click();
   }

   //UH_9472

   async validatePlayerFunctionList(){
      await expect(this.vPlayerfuncationList).toBeVisible();
   }

   async CommentText(EnterComment){
      await this.Comment_1.fill(EnterComment)
   }
   async SelectPriority(){
      await this.Priority.selectOption()
   }

   async validateCommentSection(){
      await expect(this.Priority).toBeVisible()
      await expect(this.LimitToDepartment).toBeVisible()
     // await expect(this.LimitToProperty).toBeVisible()
      await expect(this.Global_AllProperties).toBeVisible()
      await expect(this.CommentType).toBeVisible()
      await expect(this.ExpirationDate).toBeVisible()
      await expect(this.ChkBox_1).toBeVisible()
      await expect(this.CommentBox).toBeVisible()      
   }  
   
   async validateDefault(){

      await expect(this.Priority).toBeVisible()
      await expect(this.CommentType).toBeVisible()
      await expect(this.ExpirationDate).toBeVisible()
      await expect(this.Global_AllProperties).toBeVisible()
   }

   async SelectAllPriority(){
      await this.Priority.selectOption('1-Highest');
      await this.Priority.selectOption('2-High');
      await this.Priority.selectOption('3-Medium');
      await this.Priority.selectOption('4-Lower');
      await this.Priority.selectOption('5-Lowest')
   }

   async SelectDepartment(){
      await this.Department.selectOption('All');
      //await this.Department.selectOption('Casino');
      //await this.Department.selectOption('Operations');
      //await this.Department.selectOption('Corp IT');
      await this.Department.selectOption('IT');
   }

   async selectCommentType(){
      await this.CommentType.selectOption('Compliment');
      await this.CommentType.selectOption('Customer Concerns');
      await this.CommentType.selectOption('Customer Request');
      await this.CommentType.selectOption('Task');
      await this.CommentType.selectOption('User Comment');

   }
   async selectAddCommentOption(){
      await this.Save_1.click();
      await this.Ok_1.click();
   }

   async clickOnClose(){
      await this.Close.click();
   }
   async validateCommentAdded(){
      await expect(this.vComment_2).toBeVisible()
   }
   async ValidateYellowIcon(){
      await expect(this.YellowIcon).toBeVisible()
   }

   //UH_9473
   async clickOnLeftArrowUTL(){
      await this.LeftArrowUTL.click();
   }
   async validateTableDisplayedUTL(){
      await expect(this.vValueBeforeUTL).toBeVisible();
      await expect(this.vValueAfterUTL).toBeVisible();
      await expect(this.vApprovedByUTL).toBeVisible();
   }
   async clickOnClearButton(){
      await this.vClearButton.click();
   }
   async enterCorpProp(CorpProp){
      await this.CorpProp.fill(CorpProp);
   }

    //UH_9474
    async clickOnUserTransactionLog(){
      await this.UserTransactionLog.click();
   }
   async validateUserTransactionLogPage(){
      await expect(this.vUserID).toBeVisible();
      await expect(this.vCorpProp).toBeVisible();
      await expect(this.vDateRange).toBeVisible();
      await expect(this.vClearButton).toBeVisible();
      await expect(this.vSearchButton).toBeVisible();
   }
   async enterUserID(UserID){
      await this.UserID.fill(UserID);
   }
   async selectDateRangeUTL(DateRange){
      await this.page.waitForTimeout(3000);
      await this.DateRangeUTL.selectOption(DateRange);
   }
   async clickOnSearchUserTransactionLog(){
      await this.vSearchButton.click();
   }
   async validateTranscationDisplayed(){
      await this.page.waitForTimeout(4000);
      await expect(this.vTransaction).toBeVisible();
      await this.page.waitForTimeout(4000);
   }
   async validateTransactionTableInUserTransactionLogPage(){
      await expect(this.vTransactionDateTimeUserTransactionLog).toBeVisible();
      await expect(this.vPlayerIdUserTransactionLog).toBeVisible();
      await expect(this.vTransaction).toBeVisible();
      await expect(this.vUserID_1).toBeVisible();
      await expect(this.vCorpProp_1).toBeVisible();
   }
   //UH_9475
   async clickOnAddCommentTab(){
      await this.page.waitForTimeout(4000);
      this.AddComment.click();
      await this.page.waitForTimeout(4000);
   }
   async selectPriorityAddComment(Priority){
      await this.page.waitForTimeout(4000);
      await this.PriorityViewComment.selectOption(Priority);
      await this.page.waitForTimeout(4000);
   }
   async selectLimitToDepartment(LimitToDepartment){
      await this.LimitToDepartmentViewComment.selectOption(LimitToDepartment);
   }
   async enterText(Text){
      await this.EnterTextViewComment.fill(Text);
   }
   async clickOnSaveViewComment(){
      await this.SaveViewComment.click();
   }
   async validateCommentAddedSuccessfullyPopup(){
      await expect(this.vCommentAddedPopup).toBeVisible();
   }
   async clickOnOkMessagePopup(){
      await this.OkMessagePopUp.click();
   }
   async selectComment(){
      await this.page.waitForTimeout(3000);
      await this.SelectComment.click();
   }
   async clickOnEditButton(){
      await this.EditButton.click();
   }
   async validateCommentInEditModeDisplayed(){
      await expect(this.vEditModeComment).toBeVisible();
   }
   async selectPriorityEditComment(Priority){
      await this.PriorityViewComment.selectOption(Priority);
   }
   async selectLimitToDepartmentEditComment(LimitToDepartment){
      await this.LimitToDepartmentViewComment.selectOption(LimitToDepartment);
   }
   async enterTextEditComment(Text){
      await this.EnterTextViewComment.fill(Text);
   }
   async clickOnSaveEditComment(){
      await this.SaveViewComment.click();
   }
   async validateCommentCommentUpdatedSuccessfully(){
      await expect(this.vCommentUpdatedMessage).toBeVisible();
   }
   async clickOnCloseComment(){
      await this.CloseComment.click();
   }
   async validateCommentTransactionDisplayed(){
      await this.page.waitForTimeout(4000);
      await expect(this.vCommentTransaction).toBeVisible();
      await this.page.waitForTimeout(3000);
   }

   //UH_9477
   async clickOnTierCreditsEarningsTab(){
      this.TierCreditsEarningsTab.click();
   }
   async clickOnArrowIconeInFrontOfDataRecord(){
      this.ArrowIcone.click();
   }
   async validateRecordExpands(){
      await expect(this.vRecordExpand).toBeVisible();
   }
   async validateDataDisplayedByDateTime(){
      await expect(this.vDateTime).toBeVisible();
   }
   async validateDataDisplayedByProperty(){
      await expect(this.vProperty1).toBeVisible();
   }
   async validateDataDisplayedByTransactionType(){
      await expect(this.vTransactionType).toBeVisible();
   }
   async validateDataDisplayedByTierCredits(){
      await expect(this.vTierCredits).toBeVisible();
   }
   //UH_9478
   async clickOnUnityPointsEarningsTab(){
      await this.UnityPointsEarningsTab.click();
   }
   async clickOnArrowIcone_1InFrontOfDataRecord(){
      await this.ArrowIcone_1.click();
   }
   async validateRecordExpands_1(){
      await this.page.waitForTimeout(3000);
      await expect(this.vRecordExpand_1).toBeVisible();
   }
   async validateDataDisplayedByUnityPoints(){
      await expect(this.vUnityPoints).toBeVisible();
   }
   async validateDataDisplayedByFlexRule(){
      await expect(this.vFlexRule).toBeVisible();
   }

   //UH_9479
   async clickOnDiscretionaryCompsTab(){
      await this.DiscretionaryCompsTab.click();
   }
   async vIssuedDcomprecordsdisplays(){
      await expect(this.vIssuedDcompRecord).toBeVisible();
   }
   async selectRecord(){
      await this.vIssuedDcompRecord.click();
   }
   async clickOnViewCompDetailsButton(){
      await this.ViewCompDetailsButton.click();
   }
   async validateInPopupWindowViewCompDetailsDisplayed(){
      await expect(this.vViewCompDetails).toBeVisible();
   }
   async clickOnXIconeInPopupWindow(){
      await this.XIcone.click();
   }
   
   //UH_9480
   async clickOnIssueCompButton(){
      await this.IssueCompButton.click();
   }
   async validateIssueCompPopUpWindowOpen(){
      await expect(this.vIssueCompPopUpWindow).toBeVisible();
   }
   async validateDiscretionaryCompRadioButtonSelected(){
      await expect(this.vDiscretionaryCompRadioButton).toBeVisible();
   }
   async selectCompType(CompType){
      await this.CompType.selectOption(CompType);
   }
   async selectCompItem(CompItem){
      await this.CompItem.selectOption(CompItem);
   }
   async enterCompCount(CompCount){
      await this.CompCount.fill(CompCount);
   }
   async validatTotalCompValueFieldAutoPopulated(){
      await expect(this.vTotalCompValue).toBeVisible();
   }
async validateCompAvailabilityFieldAutoPopulated(){
   await expect(this.vCompAvailability).toBeVisible();
}
async validateCompsRemainingFieldAutoPopulated(){
await expect(this.vCompsRemaining).toBeVisible();
}
async validateIssuedDateTodaysDate(){
   await expect(this.vIssuedDate).toBeVisible();
}
async enterUserNameInAD(UserName){
   await this.UserNameAD.fill(UserName);
}
async enterPasswordInAD(PassWord){
   await this.PassWordAD.fill(PassWord);
}
async enterCommentInAD(Comment){
   await this.CommentAD.fill(Comment);
}
async clickOnIssueCompButton1(){
   await this.IssueCompButton1.click();
}
async validateIssueCompPopUpMessage(){
   await expect(this.vIssueCompPopUpMessage).toBeVisible();
}
async clickOnProceedButton(){
   await this.ProceedButton.click();
}
async enterCommentInIssueCompField(Comment){
   await this.CommentIssueComp.fill(Comment);
}
async clickOnIssueCompButton2(){
   await this.IssueCompButton2.click();
}



   //UH_9481
   async clickOnPlayerFunctions(){
      await this.PlayerFunctions.click();
   }
   async clickOnViewTierHistory(){
      await this.ViewTierHistory.click();
   }
   async validateViewTierHistoryWindowDisplayed(){
      await expect(this.ViewTierHistory).toBeVisible();
   }
   async validateCurrentTierDisplayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vCurrentTier1).toBeVisible();
      await this.page.waitForTimeout(3000);
   }
   async validateTierCredits(){
      await expect(this.vTierCredits1).toBeVisible();
   }
   async validateNextTier1(){
      await expect(this.vNextTier1).toBeVisible();
   }
   async validateTierCreditsRequired1(){
      await expect(this.vTierCreditsRequired1).toBeVisible();
   }
   async validateTierCreditsToEarnNextTier(){
      await expect(this.vTierCreditsToEarnNextTier).toBeVisible();
   }
   async validateNextTierExpiration(){
      await expect(this.vNextTierExpiration).toBeVisible();
   }
   async validateNextTierCreditsExpiration(){
      await expect(this.vNextTierCreditsExpiration).toBeVisible();
   }
   async clickOnCancelButton(){
      await this.CancelButton.click();
   }

   //UH_9482
   async enterPlayerID(PlayerID){
      await this.PlayerID.fill(PlayerID); 
   }
   async clickOnSearchForPlayer(){
      await this.SearchPlayer.click();
   }
   async selectClubInfoFromDropdown(){
         await this.ClubInfo.selectOption('2');
   }
   async validateCurrentTierCreditCardPic(){
      await expect(this.vCardPic).toBeVisible();
   }
   async validateCurrentTier(){
      await expect(this.vCurrentTier).toBeVisible();
   }
   async validateCurrentTireCredits(){
      await expect(this.vTireCredits).toBeVisible();
   }
   async validateNextTier(){
      await expect(this.vNextTier).toBeVisible();
   }
   async validateTierCreditsRequired(){
      await expect(this.vTierCreditsRequired).toBeVisible();
   }
   async validateRequiredToNextTierCredits(){
      await expect(this.vRequiredToNextTierCredits).toBeVisible();
   }
   
   //UH_9483
   async validatePlayerNameDisplayed(){
      await expect(this.vPlayerName).toBeVisible();
   }
   async validatePlayerIdDisplayed(){
      await expect(this.vPlayerId).toBeVisible();
   }
   async validatePlayerTypeDisplayed(){
      await expect(this.vPlayerType).toBeVisible();
   }
   async validateDobDisplayed(){
      await expect(this.vDob).toBeVisible(); 
   }
   async validateMemberSinceDisplayed(){
      await expect(this.vMemberSince).toBeVisible();
   }
   async validateTierExpirationDisplayed(){
      await expect(this.vTierExpiration).toBeVisible();
   }
   async validateAccountTypeDisplayed(){
      await expect(this.vAccountType).toBeVisible();  
   }
   async validatePredominentLocationDisplayed(){
      await expect(this.vPredominentLocation).toBeVisible();
   }
   async validateShowLinksDisplayed(){
      await expect(this.vShowLinks).toBeVisible();
   }
   async validateTierMatchIconDisplayed(){
      await expect(this.vTierMatchIcon).toBeVisible();
   }
   async ClickOnActiveCheckBox(){
      await expect(this.vActiveList).toBeVisible();
   }
   
   //UH_9484
   async clickOnTripTab(){
      await this.TripsTab.click();
   }
   async validatePlayersTripPageDisplayed(){
      await expect(this.vTripPage).toBeVisible();
   }
   async validateTotalTripsInLifeToDateTripHistoryDisplayed(){
      await expect(this.vTotalTrips).toBeVisible();
   }
   async validateTotalPropertiesInLifeToDateTripHistoryDisplayed(){
      await expect(this.vTotalTrips).toBeVisible();
   }
   async validateStartDateInLifeToDateTripHistoryDisplayed(){
      await expect(this.vStartDate).toBeVisible();
   }
   async validateEndDateInLifeToDateTripHistoryDisplayed(){
      await expect(this.vEndDate).toBeVisible();
   }
   async validateDaysPlayedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vDaysPlayed).toBeVisible();
   }
   async validateTheoWinInLifeToDateTripHistoryDisplayed(){
      await expect(this.vTheoWin).toBeVisible();
   }
   async validateActualWinInLifeToDateTripHistoryDisplayed(){
      await expect(this.vActualWin).toBeVisible();
   }
   async validateIssuedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vIssued).toBeVisible();
   }
   async validateRedeemedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vRedeemed).toBeVisible();
   }
   async validatePointsEarnedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vPointsEarned).toBeVisible();
   }
   async validateTierCreditsEarnedInLifeToDateTripHistoryDisplayed(){
      await expect(this.vTierCreditsEarned).toBeVisible();
   }
   async validateTripNumberInTripHistoryDisplayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vTripNumber).toBeVisible();
   }

   //UH_9485
   async clickOnConfiguration(){
      await this.Configuration.click();
   }
   async clickOnCoreSystemConfiguration(){
      await this.CoreSystemConfiguration.click();
   }
   async clickOnManageTripDefinition(){
      await this.ManageTripDefinition.click();
   }
   async validateManageTripDefinitionPageDisplayed(){
      await expect(this.vManageTripDefinition).toBeVisible();
   }
   async clickOnInActiveTab(){
      await this.InActiveTab.click();
   }
   async selectTrip(){
      await this.SelectTrip.click();
   }
   async validateValueInTripNameDisplayed(){
      await expect(this.vTripName).toBeVisible();
   }
   async validateValueInTripTypeDisplayed(){
      await expect(this.vTripType).toBeVisible();
   }
   async validateValueInTripDescriptionDisplayed(){
      await expect(this.vTripDescription).toBeVisible();
   }
   async validateValueInPropertyDisplayed(){
      await expect(this.vProperty).toBeVisible();
   }
   async validateMaxOfDaysDisplayed(){
      await expect(this.vMaxOfDays).toBeVisible();
   }
   async validateInactivityDaysDisplayed(){
      await expect(this.vInactivityDays).toBeVisible();
   }
   async validateSortOrderDisplayed(){
      await expect(this.vSortOrder).toBeVisible();
   }
   async validateCompRedemptionInStartsATripDisplayed(){
      await expect(this.vCompRedemption).toBeVisible();
   }
   async validateOfferRedemptionInStartsATripDisplayed(){
      await expect(this.vOfferRedemption).toBeVisible();
   }
   async validateRatingInStartsATripDisplayed(){
      await expect(this.vOfferRedemption).toBeVisible();
   }
   async clickOnActiveCheckBox(){
      await this.ActiveCheckBox.click();
   }
   async clickOnSave(){
      await this.Save.click();
   }
   async validateTripUnderActiveListDisplayed(){
      await expect(this.vActiveList).toBeVisible();
   }
   async clickOnActiveTab(){
      await this.ActiveTab.click();
   }
   async uncheckActiveCheckBox(){
      await this.ActiveTab.click();
   }
   async playerFunctionsEventCheckin(){
      await this.page.locator("//a[contains(text(),'Event Check-in')]").click();
   }
   async enterEventAndOfferNameToSearch(EventName){
      await this.page.locator("//input[@placeholder='Event & Offer Name']").fill('EventName')
   }
   async validateNoResultFoundInEventCheckin(){
      await expect(this.noResultFoundEventCheckIn).toBeVisible();
   }
   async validateTripUnderInActiveListDisplayed(){
      await expect(this.vInActiveList).toBeVisible()
   }

   //UH_9486
   async validateHideGraphInPlayerTripHistoryDisplayed(){
      await expect(this.vHideGraphSetting).toBeVisible();
   }
   async validateBuildGridDisplayInPlayerTripHistoryDisplayed(){
      await expect(this.vBuildGridDisplay).toBeVisible();
   }
   async validateSaveSearchSettingInPlayerTripHistoryDisplayed(){
      await expect(this.vSaveSearchSetting).toBeVisible();
   }
   async clickOnHideGraphSetting(){
      await this.vHideGraphSetting.click();
   }
   async clickOnExpandGraphSetting(){
      await this.page.waitForTimeout(3000);
      await this.vExpandGraphSetting.click();
   }
   async validateHideGraphSettinghidedExpandGraphSettingDisplayed(){
      await expect(this.vExpandGraphSetting).toBeVisible();  
   }
   async clickOnBuildGridDiplay(){
      await this.vBuildGridDisplay.click();
   }
   async validateGridDisplayedWithTripNumber(){
      await expect(this.vTripNumber).toBeVisible();
   }
   async validateGridDisplayedWithFromColoumn(){
      await this.page.waitForTimeout(3000);
      await expect(this.vFrom).toBeVisible();
   }
   async validateGideDisplayedWithToColoum(){
      await expect(this.vTo).toBeVisible();
   }
   async selectDateRange(DateRange){
      await this.page.waitForTimeout(3000);
      await this.DateRange.selectOption(DateRange);
      await this.page.waitForTimeout(3000);
   }
   async clickOnProperty(){
      await this.page.waitForTimeout(4000);
      await this.Property1.click();
      await this.page.waitForTimeout(4000);
   }
   async selectRatingType(RatingType){
      await this.page.waitForTimeout(4000);
      await this.RatingType.selectOption(RatingType);
      await this.page.waitForTimeout(4000);
   }
   async clickOnSaveSearchSetting(){
      await this.SaveSearchSetting.click();
   }
   async validateUserTripGraphWidowOpened(){
      await this.page.waitForTimeout(3000);
   await expect(this.vUserTripGraphWindow).toBeVisible();
   }
   async clickOnOk(){
      await this.Ok.click();
   }
   async validateSearchSettingSaved(){
      await expect(this.vSearchSettingSaved).toBeVisible();
   }

   //UH_9490

   async validateConfirmationPopup(){
      await expect(this.DelConfirmPopUP).toBeVisible();
   }
   async validateCommentDeleted(){
      await expect(this.Comment).not.toBeVisible();
   }
   async ValidateCommentInPlayerTransactionLog(){
      await this.PlayerFunction.click();
      await this.PlayerTransactionLog.click();
      await expect(this.vTransactionDateTime).toBeVisible();
      await expect(this.vTransactionDescription).toBeVisible();
      await expect(this.vCreator).toBeVisible();
      await expect(this.vPropertyName).toBeVisible();
      await this.LeftArrow.click();
      await expect(this.vValueBefore).toBeVisible();
      await expect(this.vValueAfter).toBeVisible();
      await expect(this.vApprovedBy).toBeVisible();
   }
   async selectAuthorizationReasonForDelete(Reason){
      await this.AuthorizationReasonDelete.selectOption(Reason);
   }
   //UH_9491
   async validatePlayerDashboardDisplayed(){
      await expect(this.vPlayerDashboard).toBeVisible();
   }
   async clickOnTripsTab(){
      await this.Trips.click();
   }
   async validateTripHistoryDisplayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vTripHistory).toBeVisible();
      await this.page.waitForTimeout(3000);
   }
   async validateLifeToDateTripHistoryDisplayed(){
      await expect(this.vLifeToTripHistory).toBeVisible();
   }
   async validatePlayerTripHistoryDisplayed(){
      await expect(this.vPlayerTripHistory).toBeVisible();
   }
   async validateTripHistoryHasTripNumber(){
      await expect(this.vTripNumber).toBeVisible();
   }
   async clickOnTripNumberLink(){
      await this.vTripNumber.click();
   }
   async validateRatingIDDataDisplayed(){
      await expect(this.vRatingID).toBeVisible();
   }

   //UH_9493
   async selectSettleVoidButton(){
      await this.vSettle_Void.click();
   }
   async validateDialogBoxWithSettleVoidCommentDisplayed(){
      await expect(this.SettleVoidCommentDB).toBeVisible();
   }
   async selectSettleRadioButton(){
      await this.SettleRadioButton.click();
   }
   async enterComment(Comment){
      await this.EnterComment.fill(Comment);
   }
   async clickOnSubmit(){
      await this.Submit.click();
   }
   async validateConfirmationMessage(){
      await expect(this.vConfirmation).toBeVisible();
   }
   async clickOnConfirm1(){
      await this.Confirm1.click();
   }
   async validateAuthorizationBox(){
      await expect(this.vAuthorizationBox).toBeVisible();
   }
   async enterPassword(Password){
      await this.Password.fill(Password);
   }
   async selectAuthorizationReason(Reason){
      await this.page.waitForTimeout(3000);
      await this.AuthorizationReason.selectOption(Reason);
      await this.page.waitForTimeout(3000);
   }
   async enterAuthorizationComment(Comment){
      await this.AutComment1.fill(Comment);
   }
   async clickOnAutSubmit(){
      await this.AutSubmit.click();
   }
   async SelectAFile(){
      await this.page.locator('#ctl00_ContentPlaceHolder1_ctrlInvitationDetails_flUpload').setInputFiles("C:\\Users\\Sheldon.dcosta\\Desktop\\HR_Automation\\HARDROCK_RETAL\\RU_RETAIL - June42024\\HALo_7Acct_Automation.csv");
      await this.page.locator('#ctl00_ContentPlaceHolder1_ctrlInvitationDetails_btnInvitationUpload').click();
      // const fileUploadSuccessMessage = await this.page.locator('//span[contains(text(),"Invitations processed successfully!")]');
      await this.page.waitForTimeout(3000);
      //await this.page.waitForSelector('//span[contains(text(),"Invitations processed successfully!")]',{state:'visible'});
      await this.page.waitForTimeout(3000);
   }
   async validateMessageCommentSettledSuccessfully(){
      await expect(this.vCommentSettledMessage).toBeVisible();
   }
   async clickOnViewSettledVoidedButton(){
      await this.vViewSettled_Voided.click();
   }
   async validateviewSettledVoidedCommentsDisplayed(){
      await this.page.waitForTimeout(3000);
      await expect(this.vviewSettledVoidedComments).toBeVisible();
   }

   //9504
   async validateActiveOptionSelectedInViewDropdownByDefault(){
      await expect(this.ViewQuickOffer).toBeVisible();
   }
}
