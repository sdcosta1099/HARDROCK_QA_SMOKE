import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9494_HALO | Patron Dashboard | Player Functions | View Comment | Reply Comment', async ({ page }) => {
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
  await pa.selectLimitToDepartment('All')
  await pa.enterText('UH_9494')
  await pa.clickOnSaveViewComment()
  await pa.validateCommentAddedSuccessfullyPopup()
  await pa.clickOnOkMessagePopup()
  await pa.selectComment()
  await pa.validateReplyEditDeletSettleVoidButtonsDisplayed()
  await pa.clickOnReplyTab()
  await pa.enterText('Reply Comment')
  await pa.clickOnSaveViewComment()
  await pa.validateReplyAddedSuccessfullyPopup()
  await pa.clickOnOkMessagePopup()
  await pa.clickOnLeftArrowViewComment()
  await pa.validateTableDisplayedViewComment()
  await pa.clickOnClose()
  await common.logout();

  });
