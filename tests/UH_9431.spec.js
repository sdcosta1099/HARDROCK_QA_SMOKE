import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9431_HALo | Configuration | Events & Offers | Quick Offers | Validate Expired and Inactive Quick Offers', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageQuickOffers()
  await pa.validateQuickOfferSetupPageWithActiveQuickOffersDisplayed()
  await pa.clickOnDropdown()
  await pa.selectOptionFromViewDropdown('Expired')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateExpiredQuickOffersDisplayed()
  await pa.clickOnDropdown()
  await pa.selectOptionFromViewDropdown('Inactive')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateInactiveQuickOffersDisplayed()
  await common.logout();

  });
