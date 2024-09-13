import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9444_HALO | Events & Offers | Offers | Approve an offer', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.validateEventsAndOfferPageDisplayed()
  await pa.selectStateFromEventsAndOfferStateDropdown('Pending Review')
  await pa.selectViewFromEventsAndOfferViewDropdown('Pipeline')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await pa.selectThreeDotsAfterCreatorColoumn()
  await pa.clickOnView()
  await pa.validateSummaryPageDisplayed()
  await pa.clickOnApprovedOfferTab()
  await pa.validateOfferApprovedSuccessPopUp()
  await pa.clickOnCloseEventsAndOffersSuccessPopUp()
  await pa.validateEventsAndOfferPageDisplayed()
  await pa.selectStateFromEventsAndOfferStateDropdown('Approved')
  await pa.selectViewFromEventsAndOfferViewDropdown('Active')
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await common.logout();

  });
