import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9498_HALO| Patron Dashboard |Player function | Comments | Filters | Search Results Validations', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('703039411')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnClosePopupWindow()
  await pa.clickOnPlayerFunction()
  await pa.clickOnViewComment()
  await pa.validateSystemDisplaySearchResult()
  await pa.enterDateRange()
  await pa.selectSourceOption('HALO')
  await pa.selectPriorityOption('2-High')
  await pa.clickOnSearchOffer()
  await pa.validateNoDataFound()
  await pa.clickOnClose()
  await common.logout();

  });
