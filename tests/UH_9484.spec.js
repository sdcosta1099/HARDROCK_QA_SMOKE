import { test, expect } from '@playwright/test';
test.setTimeout(100000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9484_HALO | Patron Dashboard | View Trips', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('660302931')
  await pa.clickOnSearchForPlayer()
  await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnTripsTab()
  //await page.waitForTimeout(80000000)
  await pa.validatePlayersTripPageDisplayed()
  await pa.validateTripHistoryDisplayed()
  await pa.validateLifeToDateTripHistoryDisplayed()
  await pa.validatePlayerTripHistoryDisplayed()
  await pa.validateTotalTripsInLifeToDateTripHistoryDisplayed()
  await pa.validateTotalPropertiesInLifeToDateTripHistoryDisplayed()
  await pa.validateStartDateInLifeToDateTripHistoryDisplayed()
  await pa.validateEndDateInLifeToDateTripHistoryDisplayed()
  await pa.validateDaysPlayedInLifeToDateTripHistoryDisplayed()
  await pa.validateTheoWinInLifeToDateTripHistoryDisplayed()
  await pa.validateActualWinInLifeToDateTripHistoryDisplayed()
  await pa.validateIssuedInLifeToDateTripHistoryDisplayed()
  await pa.validateRedeemedInLifeToDateTripHistoryDisplayed()
  await pa.validatePointsEarnedInLifeToDateTripHistoryDisplayed()
  await pa.validateTierCreditsEarnedInLifeToDateTripHistoryDisplayed()
  await pa.validateTripNumberInTripHistoryDisplayed()
  await common.logout();

  });
