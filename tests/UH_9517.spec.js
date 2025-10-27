import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';


test('@27Oct UH_9517_HALo | Quick Offers | Validate Expired (inactive) Quick Offers are not displayed', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnManageQuickOffers()
  await pa.validateQuickOfferSetupPageWithActiveQuickOffersDisplayed()
  await pa.clickOnAddNewQuickOffer()
  await pa.validateNewQuickOfferSetupPageDisplayed()
  await pa.validateInLobCasinoOptionSelectedByDefault()
  await pa.clickOnOfferTypeDropdownWhenCasinoIsSelectedInQuickOfferPage()
  await pa.selectOfferTypeQuickOfferPage()
  await pa.clickOnDisplayPropertyDropdownQuickOfferSetupPage()
  //await pa.checkOptionHardRockNorthernIndianaInDisplayPropertyQuickOffer('Hard Rock Northern Indiana')
  await pa.clickOnDisplayLocationDropdown()
  await pa.checkOptionUnityStoreInDisplayLocationQuickOfferSetupPage('Unity Store')
  await pa.enterDisplayName('UH_9517')
  await pa.clickOnCardTierRestrictionDropdownQuickOfferSetupPage()
  //await page.waitForTimeout(4000);
  //await pa.selecCardTierRestrictionXQuickOfferPage('X')
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  //await page.waitForTimeout(4000);
  await pa.enterExpiredStartDate('12/31/2025')
  await pa.enterExpiredEndDate('12/31/2025')
  await pa.enterDisplayEndDate('12/31/2025')
  await pa.enterDisplayDescriptionInQuickOfferPage('Test')
  await pa.enterDisclaimerInQuickOfferPage('Test1')
  await pa.clickOnSaveAndNextStepQuickOfferPage()
  await pa.validateSelectAFileButtonDisplayedInInviteeListSection()
  await pa.validateUploadButtonDisplayedInInviteeListSection()
  await pa.clickOnSaveAndNextInvitationDetailsPage()
  await pa.clickOnSubmitButton()
  await pa.validateOfferSuccessfullySubmittedMessage()
  await pa.clickOnCloseSuccessPopUp()
  await pa.clickOnExpandPlayerSearchIcon()
  await pa.enterPlayerID('807879852')
  await pa.clickOnSearchForPlayer()
  await pa.clickOnViewEventsAndOffers()
  await pa.enterEventOfferNameInSearchBox('UH_9517')
  await pa.clickOnSearchViewEventAndOffer()
  //await page.waitForTimeout(6000000);
  //await pa.validateOfferCreatedNotDisplayed()
  await common.logout();

  });
