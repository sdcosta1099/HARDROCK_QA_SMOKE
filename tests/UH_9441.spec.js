import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9441_HALO | Events & Offers | Search Offers: Toggle offers by status', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.validateEventsAndOfferPageDisplayed()
  await pa.validateActiveViewAndApprovedStateSelectedByDefault()
  await pa.selectStateFromEventsAndOfferStateDropdown('All States')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await pa.selectViewFromEventsAndOfferViewDropdown('Pipeline')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await common.logout();

  });
