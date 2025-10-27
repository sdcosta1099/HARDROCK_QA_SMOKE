import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9460_HALo | Patron Dash Board | Tier Match Star to Icon', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807651715 ') 
  await pa.clickOnSearchForPlayer()
  //await pa.clickOnCloseConsentPopUp()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTierWithTierMatch()
  await pa.validatePlayerTierWithTierMatchPopUpWindowOpens()
  await pa.selectReason('Other')
  await pa.enterJustification('Test')
  await pa.selectTier('Icon')
  await pa.clickOnAdjustButtonTierMatchWindow()
  await pa.validateAuthorizationBox()
  await pa.enterPassword('Password01@$')
  await pa.selectAuthorizationReason1('Guest Satisfaction')
  await pa.enterAuthorizationComment('Testing')
  await pa.clickOnAutSubmit()
  await common.logout();

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807651715') 
  await pa.clickOnSearchForPlayer()
  //await pa.clickOnCloseConsentPopUp()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTierWithTierMatch()
  await pa.validatePlayerTierWithTierMatchPopUpWindowOpens()
  await pa.selectReason('Other')
  await pa.enterJustification('Test')
  await pa.selectTier('Star')
  await pa.clickOnAdjustButtonTierMatchWindow()
  await pa.validateAuthorizationBox()
  await pa.enterPassword('Password01@$')
  await pa.selectAuthorizationReason1('Guest Satisfaction')
  await pa.enterAuthorizationComment('Testing')
  await pa.clickOnAutSubmit()
  await common.logout();

  });
