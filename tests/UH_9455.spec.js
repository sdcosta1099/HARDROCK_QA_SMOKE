import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9455 HALO | Events & Offers | Check-In | Invited booked Patron', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$") 

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.clickOnAddNewEventAndOffers()
  await pa.ValidateAddNewEventAndOffersPage()
  await pa.SelectfillOutNewEventFields4("Smoke_UH_9455")
  await pa.clickSaveAndNextStep()
  await pa.SelectAFile()
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
  await pa.enterOfferName("Smoke_UH_9455")
  await pa.clickOnSearchForEventsAndOffers()
  await pa.selectThreeDotsAfterCreatorColoumn()
  await pa.clickOnView()
  await pa.validateSummaryPageDisplayed()
  await pa.clickOnApprovedOfferTab()
  await pa.validateOfferApprovedSuccessPopUp()
  await pa.clickOnCloseOfferSuccessPopup1()
  await pa.clickOnEmployeeDashboard()
  await pa.clickOnPlayerFunction()
  await pa.playerFunctionsEventCheckin()
  await pa.searchEventInCheckin('Smoke_UH_9455')
  await pa.selectEventInCheckin('Smoke_UH_9455')
  await pa.enterPatronInEventCheckinAndSearch('703039411')
  await pa.clickOnCheckInButtonInEventCheckIn()
  await pa.validateCheckInSuccessfulPopupAndClose()
  await pa.clickPaceReportButton()
  await pa.validatePaceReportPopupIsOpen()
  await pa.closePaceReportPopup()
  await page.waitForTimeout(4000);
  await common.logout();
  
  });
