import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9491_HALO | Patron Dashboard | View Ratings', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879484')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnTripsTab()
  await pa.validateTripHistoryDisplayed()
  await pa.validateLifeToDateTripHistoryDisplayed()
  await pa.validatePlayerTripHistoryDisplayed()
  await pa.validateTripHistoryHasTripNumber()
  await pa.clickOnTripNumberLink()
  await pa.validateRatingIDDataDisplayed()
  await common.logout();
  
  });
