import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9514_HALo | Quick Offers | Validate Quick Offer is displayed to all Patrons when no Invitee List is uploaded', async ({ page }) => {
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
  await pa.checkOptionDisplayPropertyQuickOffer('Hard Rock Northern Indiana')
  await pa.clickOnDisplayLocationDropdown()
  await pa.checkOptionOfDisplayLocationQuickOfferSetupPage('Hard Rock Live')
  await pa.enterDisplayName('UH_9514')
  await pa.clickOnCardTierRestrictionDropdownQuickOfferSetupPage()
  await pa.selecCardTierRestrictionStarQuickOfferPage()
  await pa.enterDisplayDescriptionInQuickOfferPage('Test')
  await pa.enterDisclaimerInQuickOfferPage('Test1')
  await pa.clickOnSaveAndNextStepQuickOfferPage()
  await pa.validateSelectAFileButtonDisplayedInInviteeListSection()
  await pa.validateUploadButtonDisplayedInInviteeListSection()
  await pa.clickOnSaveAndNextInvitationDetailsPage()
  await pa.validateSummaryPage1Displayed()
  await pa.clickOnSubmitButton()
  await pa.validateOfferSuccessfullySubmittedMessage()
  await pa.clickOnCloseSuccessPopUp()
  await pa.enterOfferNameInSearchBox('UH_9514')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateOfferCreatedDisplayed()
  await common.logout();
 
  });
