import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9516_HALo | Quick Offers | Copy an existing Quick Offer', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageQuickOffers()
  await pa.validateQuickOfferSetupPageWithActiveQuickOffersDisplayed()
  await pa.validateCopyButtonInQuickOfferSection()
  await pa.clickOnCopyButton()
  await pa.validateOfferInEditModeAppeared()
  await pa.editDisplayDescriptionInQuickOfferPage('Test')
  await pa.editDisclaimerInQuickOfferPage('Test1')
  await pa.clickOnSaveAndNextStepQuickOfferPage()
  await pa.validateSelectAFileButtonDisplayedInInviteeListSection()
  await pa.validateUploadButtonDisplayedInInviteeListSection()
  //await pa.validateNoFileSelectedInInviteeListSection()//
  await pa.clickOnSaveAndNextInvitationDetailsPage()
  await pa.validateSummaryPage1Displayed()
  await pa.clickOnSubmitButton()
  await pa.validateOfferSuccessfullySubmittedMessage()
  await pa.clickOnCloseSuccessPopUp()
  await pa.enterOfferNameInSearchBox('QuickOffer_9505-COPY')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateOfferCreatedDisplayed()
  await common.logout();

  });
