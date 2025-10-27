import { test, expect } from '@playwright/test';
test.setTimeout(100000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9470_HALo | Patron Dashboard | Comm Preferences | Contact Info | Add Social Media', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('660302931')//807879760//
  await pa.clickOnSearchForPlayer()
  //await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnCommPreferencesTab()
  await pa.clickOnContactInformationTab()
  await pa.validateSocialMediaSectionDisplayed()
  await pa.clickOnAddNewSocialMediaLink()
  await pa.selectTypeInSocialMediaFields('Gmail')
  await pa.enterAccountName('tanya@gmail.com')
  await pa.clickOnSaveSocialMedia()
  //await pa.validateDetailsSavedAndDeleteAndEditButtonAndAddNewSocialMediaLinkDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.validateTableDisplayed()
  await pa.clickOnClose()
  await common.logout();

});
