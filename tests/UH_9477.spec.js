import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9477_HALo | Patron Dash Board | View Tier Credit Earnings', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('550296941')
  await pa.clickOnSearchForPlayer()
  await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnTierCreditsEarningsTab()
  await pa.clickOnArrowIconeInFrontOfDataRecord()
  await pa.validateRecordExpands()
  await pa.validateDataDisplayedByDateTime()
  await pa.validateDataDisplayedByProperty()
  await pa.validateDataDisplayedByTransactionType()
  await pa.validateDataDisplayedByTierCredits()
  await common.logout();

  });
