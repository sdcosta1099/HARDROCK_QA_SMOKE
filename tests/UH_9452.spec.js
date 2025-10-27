import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9452_HALO | Events & Offers | Booking | Modify Booked Offer', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

    await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$") 
  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.clickOnAddNewEventAndOffers()
  await pa.ValidateAddNewEventAndOffersPage()
  await pa.SelectfillOutNewEventFields4("Smoke_UH_9452")
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
  await pa.enterOfferName("Smoke_UH_9452")
  await pa.clickOnSearchForEventsAndOffers()
  await pa.selectThreeDotsAfterCreatorColoumn()
  await pa.clickOnView()
  await pa.validateSummaryPageDisplayed()
  await pa.clickOnApprovedOfferTab()
  await pa.validateOfferApprovedSuccessPopUp()
  await pa.clickOnCloseOfferSuccessPopup1()
  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.enterOfferName("Smoke_UH_9452")
  await pa.clickOnSearchForEventsAndOffers()
  await pa.selectThreeDotsAfterCreatorColoumn()
  await pa.clickOnView()
  await pa.clickOnofferSetupPage()
  await page.waitForTimeout(2500); 

  await common.logout();
   });
