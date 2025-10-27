import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9451_HALO | Events & Offers | Booking | Book uninvited Patron', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$") 
  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.clickOnAddNewEventAndOffers()
  await pa.ValidateAddNewEventAndOffersPage()
  await pa.SelectfillOutNewEventFields4("UH_9451_1")
  await pa.clickSaveAndNextStep()
  await pa.SelectAFile1()
  //await page.waitForTimeout(800000000); 
  await pa.clickSaveAndNextStep()
  await pa.clickOnAddMasterListItems()
  await pa.addMasterListItem1("PrizeName1","PC","Skip","500","50")
  await pa.clickSaveAndNextStep()
  await pa.EnterAttendanceCapacity("2")
  await pa.clickSaveAndNextStep()
  await pa.clickSaveAndNextStep()
  await pa.clickSaveAndNextStep()
  await pa.clickSaveAndNextStep()
  await pa.clickOnSubmitForReviewButtonAndVerifyOfferIsSubmittedSuccessfully()
  await pa.validateActiveViewAndApprovedStateSelectedByDefault()
  await pa.selectViewFromEventsAndOfferViewDropdown('All Views')
  await pa.selectStateFromEventsAndOfferStateDropdown('Pending Review')
  await pa.enterOfferName("UH_9451_1")
  await pa.clickOnSearchForEventsAndOffers()
  await pa.selectThreeDotsAfterCreatorColoumn()
  await pa.clickOnView()
  await pa.validateSummaryPageDisplayed()
  await pa.clickOnApprovedOfferTab()
  await pa.validateOfferApprovedSuccessPopUp()
  await pa.clickOnCloseOfferSuccessPopup1()
  await pa.clickOnEmployeeDashboard()
  await pa.enterPlayerID('807651714') 
  await pa.clickOnSearch()
  await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.selectEventsAndOffersButtonOnPlayerDashBoard()
  await pa.validatePlayerEventsAndOffersPage()
  await pa.clickOnInvitedFilter()
  await page.waitForTimeout(50000);  
  await pa.searchOfferFromViewEventsAndOffer('UH_9451_1')
  await page.waitForTimeout(30000); 
  await pa.clickOnMoreLinkofEvent()
  await pa.ValidateSelectedEventDetailsSectionPage()
  await pa.validateThisPatronHasNotBeenInvitedToTheEvent()
  await common.logout();

   });
 