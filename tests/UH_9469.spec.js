import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9469_HALo | Patron Dashboard | Comm Preferences | Contact Info | Add Phone number', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879400')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnCommPreferencesTab()
  await pa.clickOnContactInformationTab()
  await pa.validatePhoneSectionDisplayed()
  await pa.clickOnAddNewPhone()
  await pa.selectTypeInPhoneFields('Home')
  await pa.enterPhoneNumber('25600778')
  await pa.clickOnSavePhoneNumber()
  await common.logout();

});
