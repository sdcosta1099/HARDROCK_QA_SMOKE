import { test, expect } from '@playwright/test';
test.setTimeout(600000)
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('@27Oct UH_9442_HALO | Events and Offers | Create offer with Prize and Attendance', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
  
  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$") 
  
  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.clickOnAddNewEventAndOffers()
  await pa.ValidateAddNewEventAndOffersPage()
  await pa.SelectfillOutNewEventFields4('UH_9442')
  await pa.clickSaveAndNextStep()
  await pa.SelectAFile()
  await pa.clickSaveAndNextStep()
  await pa.clickOnAddMasterListItems()
  await pa.addMasterListItem1("PrizeName1","PC","Skip","500","50")
  await pa.clickSaveAndNextStep()
  await pa.EnterAttendanceCapacity("2")
  await pa.clickSaveAndNextStep()
  await pa.config()
  await pa.clickSaveAndNextStep()
  await pa.clickSaveAndNextStep()
  await pa.clickSaveAndNextStep()
  await pa.clickOnSubmitForReviewButtonAndVerifyOfferIsSubmittedSuccessfully()
 //await page.waitForTimeout(800000);
  await pa.validateActiveViewAndApprovedStateSelectedByDefault()
  await pa.selectViewFromEventsAndOfferViewDropdown('Pipeline')
  await pa.selectStateFromEventsAndOfferStateDropdown('Pending Review')
  await pa.enterOfferName('UH_9442')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.selectThreeDotsAfterCreatorColoumn()
  await pa.clickOnView()
  await pa.validateSummaryPageDisplayed()
  await pa.clickOnApprovedOfferTab()
  await pa.validateOfferApprovedSuccessPopUp()
  await pa.clickOnCloseOfferApprovedEventsAndOffersSuccessPopUp()
  await pa.validateActiveViewAndApprovedStateSelectedByDefault()
  await pa.selectViewFromEventsAndOfferViewDropdown('Active')
  await pa.selectStateFromEventsAndOfferStateDropdown('Approved')
  await pa.enterOfferName('UH_9442')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.selectThreeDotsAfterCreatorColoumn()
  await pa.clickOnView()
  await pa.validateSummaryPageDisplayed()
  await common.logout();
  

  });

 
