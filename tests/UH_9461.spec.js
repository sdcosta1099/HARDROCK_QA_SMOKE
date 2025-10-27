import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9461_Halo | Player Function | Player Tier with Tier Match| Adjust Player Tier Level (Tier Match)', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879760')
  await pa.clickOnSearchForPlayer()
  //await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTierWithTierMatch()
  await pa.validatePlayerTierWithTierMatchPopUpWindowOpens()
  await pa.selectReason('Tier Match')
  await pa.selectCompetitorCasino('Firekeepers')
  await pa.clickOnCancelButtonTierMatchWindow()
  await common.logout();

  });
