import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9481_Halo| Patron Dash Board | Player Function| View Tier History', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879484')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunctions()
  await pa.clickOnViewTierHistory()
  await pa.validateViewTierHistoryWindowDisplayed()
  await pa.validateCurrentTierDisplayed()
  await pa.validateTierCredits()
  await pa.validateNextTier1()
  await pa.validateTierCreditsRequired1() 
  await pa.validateTierCreditsToEarnNextTier()
  await pa.validateNextTierExpiration()
  await pa.validateNextTierCreditsExpiration()
  await pa.clickOnCancelButton()
  await common.logout();

  });
