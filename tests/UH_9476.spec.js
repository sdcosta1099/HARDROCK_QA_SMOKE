import { test, expect } from '@playwright/test';
test.setTimeout(100000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9476_Halo| Patron Dash Board | View Tier History', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807651716')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnTierHistoryTab()
  await pa.validateTierHistoryDetailsDisplayed()
  await common.logout();

  });
