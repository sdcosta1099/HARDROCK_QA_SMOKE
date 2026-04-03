import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9495_HALo | Patron Dashboard | Player Functions | View Comment | Void Comment', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879582')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnViewComment()
  await pa.clickOnAddCommentTab()
  await pa.selectPriorityAddComment('3-Medium')
  await pa.selectLimitToDepartment('IT')
  await pa.enterText('UH_9495')
  await pa.clickOnSaveViewComment()
  await pa.validateCommentAddedSuccessfullyPopup()
  await pa.clickOnOkMessagePopup()
  await pa.selectComment()
  await pa.validateReplyEditDeletSettleVoidButtonsDisplayed()
  await pa.selectSettleVoidButton()
  await pa.validateDialogBoxWithSettleVoidCommentDisplayed()
  await pa.selectVoidRadioButton()
  await pa.enterComment('Testing Settle/Void')
  await pa.clickOnSubmit()
  await pa.validateVoidConfirmationMessage()
  await pa.clickOnConfirm1()
  await pa.validateAuthorizationBox()
  await pa.enterPassword('Password01@$')
  await pa.selectAuthorizationReason('System Testing')
  await pa.enterAuthorizationComment('Testing')
  await pa.clickOnAutSubmit()
  await pa.validateMessageCommentVoidedSuccessfully()
  await pa.clickOnOk_1()
  await pa.clickOnViewSettledVoidedButton()
  await pa.validateviewSettledVoidedCommentsDisplayed()
  await pa.clickOnCloseComment()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.validateCommentTransactionDisplayed()
  await pa.clickOnClose()
  await common.logout();

  });
