import { test, expect } from '@playwright/test';
test.setTimeout(5000000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9517_HALo | Quick Offers | Validate Expired (inactive) Quick Offers are not displayed', async ({ page }) => {
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
  await pa.checkOptionHardRockNorthernIndianaInDisplayPropertyQuickOffer('Hard Rock Northern Indiana')
  await pa.clickOnDisplayLocationDropdown()
  await pa.checkOptionUnityStoreInDisplayLocationQuickOfferSetupPage('Unity Store')
  await pa.enterDisplayName('UH_9517')
  await pa.clickOnCardTierRestrictionDropdownQuickOfferSetupPage()
  await pa.selecCardTierRestrictionXQuickOfferPage('X')
  await pa.enterExpiredStartDate('08/30/2025')
  await pa.enterExpiredEndDate('08/30/2025')
  await pa.enterDisplayEndDate('08/30/2025')
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
  await pa.validateOfferCreatedNotDisplayed()
  await common.logout();

  });
