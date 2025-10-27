import { test, expect } from '@playwright/test';
test.setTimeout(1000000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9467_HALo | Patron Dashboard | Comm Preferences | Contact Info | Add Physical Address', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")
  
  await pa.enterPlayerID('807879748')//807879760//
  await pa.clickOnSearchForPlayer()
  //await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnCommPreferencesTab()
  await pa.clickOnContactInformationTab()
  await pa.validateAddressSectionDisplayed()
  await pa.clickOnAddNewAddress()
  await pa.selectAddressType('Home')
  await pa.enterAddress1('123')
  await pa.enterAddress2('Green Park')
  await pa.enterCity('A City')
  await pa.selectCountry('United States of America')
  await pa.selectState('Florida')
  await pa.enterZip('32104')
  await pa.clickOnSaveAddress()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.validateTableDisplayed()
  await pa.clickOnClose()
  await common.logout();

});
