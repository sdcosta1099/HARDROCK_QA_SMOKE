import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9479_Halo| Patron Dash Board | View Discretionary Comps', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807651715')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnDiscretionaryCompsTab()
  await pa.vIssuedDcomprecordsdisplays()
  await pa.selectRecord()
  await pa.clickOnViewCompDetailsButton()
  await pa.validateInPopupWindowViewCompDetailsDisplayed()
  await pa.clickOnXIconeInPopupWindow()
  await common.logout();

  });
