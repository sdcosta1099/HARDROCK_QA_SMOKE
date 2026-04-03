import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9438_HALO | Events & Offers | Offer Management: Search Offers: Search for offer by name', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.validateEventsAndOfferPageDisplayed()
  await pa.enterOfferName('UH_9712')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await pa.enterOfferName('UH_9836')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await pa.clickOnClear()
  await pa.enterFromDate('06/01/2024')
  await pa.enterToDate('06/16/2024')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await pa.enterFromDate('05/15/2024')
  await pa.enterToDate('05/31/2024')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await common.logout();

  });
