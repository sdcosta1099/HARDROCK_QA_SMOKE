import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9436_HALo | Configuration | Events&Offers | Quick Offers | Copy a Quick Offer', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnEventsAndOffers()
  await pa.clickOnManageQuickOffers()
  await pa.validateQuickOfferSetupPageWithActiveQuickOffersDisplayed()
  await pa.enterOfferNameInSearchBox('QuickOffer_9505')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateOfferCreatedDisplayed()
  await page.locator("(//input[@title='Copy'])[1]").click();
  await page.locator("//input[@value='Back to Listing']").click();
  await page.locator("//input[@value='Leave']").click();
  await pa.enterOfferNameInSearchBox('QuickOffer_9505')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateOfferCreatedDisplayed()
  await page.locator("(//input[@title='Copy'])[1]").click();
  await pa.clickOnSaveAndNextStepQuickOfferPage()
  await pa.clickOnSaveAndNextInvitationDetailsPage()
  await pa.clickOnSubmitButton()
  await pa.validateOfferSuccessfullySubmittedMessage()
  await pa.clickOnCloseSuccessPopUp()
  await pa.enterOfferNameInSearchBox('QuickOffer_9505-COPY')
  await pa.clickOnSearchForQuickOffer()
  await pa.validateOfferCreatedDisplayed()
  await page.waitForTimeout(3000)
  await pa.clickOnDeactiveForRecentlycreatedOffer()
  await pa.validateConfirmDeactivateOfferWindowDisplayed()
  await pa.clickOnConfirmTab()
  await pa.validateNotificationOfOfferDeactivated()
  await pa.clickOnCloseDeactivePopUp()
  await common.logout();

  });