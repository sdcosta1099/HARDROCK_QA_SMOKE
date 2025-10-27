import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9489_HALo | Comm Preferences | Contact Info | Edit Phone Number', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('660302931') 
  await pa.clickOnSearchForPlayer() 
  await pa.clickOnClose() 
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnCommPreferencesTab()
  await pa.clickOnContactInformationTab()
  await pa.validatePhoneSectionDisplayed()
  await pa.clickOnEditPhoneTab()
  await pa.selectTypeInPhoneFields('Home')
  await pa.enterPhoneNumber('25600779')
  await pa.clickOnSavePhoneNumber()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.validateTableDisplayed()
  await pa.clickOnClose()
  await common.logout();

});
