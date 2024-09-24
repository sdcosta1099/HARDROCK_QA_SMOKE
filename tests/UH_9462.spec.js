import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9462_Halo | Player Function | Player Tier with Tier Match| Validate Legend Tier', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879852')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickonLighteningIcon()
  await pa.validateAlertWindowShowsLegendwith0TierPoints()
  await pa.clickOnCloseAlert()
  await pa.clickOnExpandSearchIcon()
  await pa.enterPlayerID('807879529')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickonLighteningIcon()
  await pa.validateAlertWindowShowsLegendwithMoreThan0TierPoints()
  await pa.clickOnCloseAlert()
  await common.logout();

  });
