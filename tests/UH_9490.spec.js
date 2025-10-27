import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9490 HALO | Patron Dashoard | Player Functions | View Comment | Delete Comment', async ({ page }) => {
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
  await pa.enterText('UH_9490_Smoke')
  await pa.clickOnSaveViewComment()
  await pa.validateCommentAddedSuccessfullyPopup()
  await pa.clickOnOkMessagePopup()
  await pa.selectComment()
  await pa.validateReplyEditDeletSettleVoidButtonsDisplayed()
  await pa.clickOnDelete()
  await pa.validateConfirmationPopup()
  await pa.clickOnConfirm()
  await pa.validateAuthorizationBox()
  await pa.enterPassword('Password01@$')
  await pa.selectAuthorizationReasonForDelete('User Error')
  await pa.enterAuthorizationComment('Testing')
  await pa.clickOnAutSubmit()
  await pa.validateDeleteAcknowledgePopUp()
  await pa.clickOnOk_1()
  await pa.clickOnCloseComment()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.clickOnClose()
  await common.logout();
  
  

  });




  
  
