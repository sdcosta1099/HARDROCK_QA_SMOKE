import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9509_HALo | Quick Offers | Edit a Quick Offer', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")
  
  await pa.clickOnConfiguration()
  await pa.clickOnManageQuickOffers()
  await pa.validateQuickOfferSetupPageWithActiveQuickOffersDisplayed()
  await pa.ValidateEditButtonInQuickOfferSectionForEachOfferLineDisplayed()
  await pa.clickOnEditButton1()
  await pa.validateOfferInEditModeDisplayed()
  await pa.clickOnOfferSetUp()
  await pa.validateLobIsNotEditable()
  await pa.editDisplayDescriptionInQuickOfferPage('Test')
  await pa.editDisclaimerInQuickOfferPage('Test1')
  await pa.clickOnSaveAndNextStepQuickOfferPage()
  await pa.validateSelectAFileButtonDisplayedInInviteeListSection()
  //await pa.validateUploadButtonDisplayedInInviteeListSection()
  await pa.clickOnSaveAndClose()
  await pa.enterOfferNameInSearchBox('UH_9517_COPY')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateOfferCreatedDisplayed()
  await common.logout();

  });
