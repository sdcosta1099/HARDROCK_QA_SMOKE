import { test, expect } from '@playwright/test';
test.setTimeout(100000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9475_HALO | Patron Dashoard | Player Function | Comments | Edit Comment', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('660302931')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnViewComment()
  await pa.clickOnAddCommentTab()
  await pa.selectPriorityAddComment('3-Medium')
  await pa.selectLimitToDepartment('IT')
  await pa.enterText('UH_9475')
  await pa.clickOnSaveViewComment()
  await pa.validateCommentAddedSuccessfullyPopup()
  await pa.clickOnOkMessagePopup()
  await pa.selectComment()
  await pa.clickOnEditButton()
  await pa.validateCommentInEditModeDisplayed()
  await pa.selectPriorityEditComment('4-Lower')
  await pa.selectLimitToDepartmentEditComment('All')
  await pa.enterTextEditComment('UH_9475_Smoke')
  await pa.clickOnSaveEditComment()
  await pa.validateCommentCommentUpdatedSuccessfully()
  await pa.clickOnCloseComment()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  //await pa.validateCommentTransactionDisplayed()
  await pa.clickOnClose()
  await common.logout();

  });
