import { test, expect } from '@playwright/test';
test.setTimeout(1000000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9488_HALo | Comm Preferences | Contact Info | Edit Email Address', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879400')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnCommPreferencesTab()
  await pa.clickOnContactInformationTab()
  await pa.clickOnEmailEditButton()
  await pa.selectEmailType('Home')
  await pa.enterEmailAddress('tdmqahr+807879456@gmail.com')
  await pa.clickOnSaveEmailAddress()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.validateTableDisplayed()
  await pa.clickOnClose()
  await common.logout();

});
