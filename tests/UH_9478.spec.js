import { test, expect } from '@playwright/test';
test.setTimeout(600000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9478_Halo| Patron Dash Board | View Unity points Earnings', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('660302931')
  await pa.clickOnSearchForPlayer()
  await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnUnityPointsEarningsTab()
  await pa.clickOnArrowIcone_1InFrontOfDataRecord()
  await pa.validateRecordExpands_1()
  //await page.waitForTimeout(8000000)
  await pa.validateDataDisplayedByDateTime()
  await page.waitForTimeout(2000)
  await pa.validateDataDisplayedByProperty()
  await pa.validateDataDisplayedByTransactionType()
  await pa.validateDataDisplayedByUnityPoints()
  await pa.validateDataDisplayedByFlexRule()
  await common.logout();

  });
