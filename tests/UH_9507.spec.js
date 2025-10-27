import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9507_HALo | Quick Offers | Create a Quick offer with X card Level', async ({ page }) => {
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
  await pa.enterDisplayName('UH_9507')
  await pa.clickOnCardTierRestrictionDropdownQuickOfferSetupPage()
 // await page.waitForTimeout(200);
  await pa.selecCardTierRestrictionXQuickOfferPage()
  // await page.keyboard.press('ArrowDown');
  // await page.keyboard.press('ArrowDown');
  // await page.keyboard.press('ArrowDown');
  // await page.keyboard.press('ArrowDown');
  // await page.keyboard.press('ArrowDown');
  // await page.keyboard.press('Enter');
  await pa.enterDisplayDescriptionInQuickOfferPage('Test')
  await pa.enterDisclaimerInQuickOfferPage('Test1')
  await pa.clickOnSaveAndNextStepQuickOfferPage()
  await pa.validateSelectAFileButtonDisplayedInInviteeListSection()
  await pa.validateUploadButtonDisplayedInInviteeListSection()
  await pa.clickOnSaveAndNextInvitationDetailsPage()
  await pa.clickOnSubmitButton()
  await pa.validateOfferSuccessfullySubmittedMessage()
  await pa.clickOnCloseSuccessPopUp()
  await pa.enterOfferNameInSearchBox('UH_9507')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateOfferCreatedDisplayed()
  await common.logout();

  });
