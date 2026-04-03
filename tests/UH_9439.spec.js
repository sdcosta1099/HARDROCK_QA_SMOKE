import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9439_HALO | Events & Offers | Search Offers: Filter offers by Property', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageEventsAndOffers()
  await pa.validateEventsAndOfferPageDisplayed()
  await pa.selectPropertyFromEventsAndOfferPropertyDropdown('HR Casino, Northern Indiana')
  await pa.clickOnSearchForEventsAndOffers()
  await pa.validateOffersAccordingtoSearchCriteriaDisplayed()
  await common.logout();

  });
