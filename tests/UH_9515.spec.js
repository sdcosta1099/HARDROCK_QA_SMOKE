import { test, expect } from '@playwright/test';
test.setTimeout(200000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9515_HALo | Quick Offers | New fields in Quick Offers', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

    await common.goToHALOWebApplication()
    await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageQuickOffers()
  await pa.validateQuickOfferSetupPageWithActiveQuickOffersDisplayed()
  await pa.clickOnAddNewQuickOffer()
  await pa.validateNewQuickOfferSetupPageDisplayed()
  await pa.validateLOBdropdownIsDisplayedAndCasinoOptionIsSelectedByDefault()
  await pa.clickOnLobDropdownQuickOfferPage()
  await pa.checkCafeOptionOfLobQuickOfferSetupPage('Cafe')
  await pa.clickOnRegionDropdownInQuickOfferPage()
  await pa.clickOnRegionDropdownInQuickOfferPage()
  await pa.validateRegionDropdownDisplaysOptionsAccordingToLOBSelection()
  await page.waitForTimeout(2000)
  await pa.uncheckOptionOfRegionQuickOfferSetupPage()
  await pa.uncheckOptionOfRegionQuickOfferSetupPage()
  await pa.clickOnOfferTypeDropdownQuickOfferPage()
  await pa.selectOfferTypeQuickOfferPage()
  await pa.clickOnDisplayPropertyDropdownQuickOfferSetupPage()
  await pa.checkOptionDisplayPropertyQuickOffer('Hard Rock Atlantic City')
  await pa.clickOnDisplayPropertyDropdownQuickOfferSetupPage()
  await pa.vaidateStartDateAndEndDateAreAvailableForUsersToCreateOffer()
  await common.logout();
  
  });
