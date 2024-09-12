import { test, expect } from '@playwright/test';
test.setTimeout(1000000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9487_HALo | Comm Preferences | Contact Info | Edit Physical Address', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879760')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnCommPreferencesTab()
  await pa.clickOnContactInformationTab()
  await pa.validateAddressSectionDisplayed()
  await pa.clickOnEditTab()
  await pa.selectAddressType('Home')
  await pa.enterAddress1('21')
  await pa.enterAddress2('Apple Wood')
  await pa.enterCity('A City')
  await pa.selectCountry('United States of America')
  await pa.selectState('Florida')
  await pa.enterZip('32110')
  await pa.clickOnSaveAddress()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.validateTableDisplayed()
  await pa.clickOnClose()
  await common.logout();

});
