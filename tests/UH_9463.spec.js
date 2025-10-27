import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9463_Halo | Player Function | Player Tier with Tier Match| Downgrade Tier', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  //Scenario 1:Downgrade from Icon to Legend
  await pa.enterPlayerID('703039411') 
  await pa.clickOnSearchForPlayer()
  await pa.clickOnCloseConsentPopUp()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTierWithTierMatch()
  await pa.validatePlayerTierWithTierMatchPopUpWindowOpens()
  await pa.selectReason('Other')
  await pa.enterJustification('Test')
  await pa.selectTier('Legend')
  await pa.clickOnAdjustButtonTierMatchWindow()
  await pa.validateAuthorizationBox()
  await pa.enterPassword('Password01@$')
  await pa.selectAuthorizationReason1('Guest Satisfaction')
  await pa.enterAuthorizationComment('Testing')
  await pa.clickOnAutSubmit()
  await common.logout();

  //Scenario 1:Downgrade from Legend to Icon
  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('703039411') 
  await pa.clickOnSearchForPlayer()
  await pa.clickOnCloseComment()
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

  });
