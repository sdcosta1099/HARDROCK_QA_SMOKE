import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9519_HALo | Quick Offers | Sort Quick Offers by Name, Description, Start, End and Display dates', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageQuickOffers()
  await pa.validateQuickOfferSetupPageWithActiveQuickOffersDisplayed()
  await pa.clickOnNameColumn()
  await pa.validateOffersSortedInAscendingOrder()
  await pa.clickOnNameColumn()
  await pa.validateOffersSortedInDescendingOrder()
  await pa.clickOnDescriptionColumn()
  await pa.validateOffersSortedInAscendingOrder()
  await pa.clickOnDescriptionColumn()
  await pa.validateOffersSortedInDescendingOrder()
  await pa.clickOnStartDateColumn()
  await pa.validateOffersSortedInAscendingOrder()
  await pa.clickOnStartDateColumn()
  await pa.validateOffersSortedInDescendingOrder()
  await pa.clickOnEndDateColumn()
  await pa.validateOffersSortedInAscendingOrder()
  await pa.clickOnEndDateColumn()
  await pa.validateOffersSortedInDescendingOrder()
  await pa.clickOnDisplayDateColumn()
  await pa.validateOffersSortedInAscendingOrder()
  await pa.clickOnDisplayDateColumn()
  await pa.validateOffersSortedInDescendingOrder()
  await common.logout();

  });
