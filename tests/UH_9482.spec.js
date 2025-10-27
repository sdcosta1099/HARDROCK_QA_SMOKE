import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9482_Halo| Patron Dash Board | View Club Info', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879484')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.selectClubInfoFromDropdown()
  await pa.validateCurrentTierCreditCardPic()
  //await page.waitForTimeout(8000000)
  await pa.validateCurrentTier()
  await pa.validateCurrentTireCredits()
  await pa.validateNextTier()
  await pa.validateTierCreditsRequired() 
  await pa.validateRequiredToNextTierCredits()
  await common.logout();

  });
