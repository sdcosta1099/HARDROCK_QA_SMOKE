import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9465_HALO | Comments | Delete Comments', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")
  await pa.enterPlayerID('807879520')
  await pa.clickOnSearch()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunctions()
  await pa.clickOnViewComment()
  await pa.validateViewCommentPopUp()
  await pa.clickOnAdd()
  await pa.selectAddCommentOption1()
  await pa.clickOnComment()
  await pa.validateReplyEditDeletSettleVoidButtonsDisplayed()
  await pa.clickOnDelete()
  await pa.validateDeletePopupoptions()
  await pa.clickOnCancel()
  await pa.validateCommentPresence()
  await pa.clickOnComment()
  await pa.clickOnDelete()
  await pa.clickOnConfirm()
  await pa.enterAuthorizationDetails('Authorisation provided for the purpose of testing')
  await pa.validateDeleteAcknowledgePopUp()
  await pa.clickOnOk_1()
  await pa.vDelPopUpClosed()
  //await pa.validateNoDataFound()
  await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunctions()
  await pa.clickOnViewComment()
  await pa.validateViewCommentPopUp()
  //await pa.validateNoDataFound()
  await pa.clickOnClose()
  await common.logout();
  
  

  });
