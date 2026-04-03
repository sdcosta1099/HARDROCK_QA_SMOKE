import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9483_Halo| Patron Dash Board | View Player Info', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879529')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.validatePlayerNameDisplayed()
  await pa.validatePlayerIdDisplayed()
  await pa.validatePlayerTypeDisplayed()
  await pa.validateDobDisplayed()
  await pa.validateMemberSinceDisplayed()
  await pa.validateTierExpirationDisplayed()
  await pa.validateAccountTypeDisplayed()
  await pa.validatePredominentLocationDisplayed()
  await pa.validateShowLinksDisplayed()
  await pa.validateTierMatchIconDisplayed()
  await common.logout();

  });
