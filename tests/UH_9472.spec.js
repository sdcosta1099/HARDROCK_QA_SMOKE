import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9472_HALO | Patron DashBoard | Player Function | Comments | Create/Add Comment', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")
  await pa.enterPlayerID('550296941')
  await pa.clickOnSearch()
  await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunctions()
  await pa.validatePlayerFunctionList()
  await pa.clickOnViewComment()
  await pa.validateViewCommentPopUp()
  await pa.clickOnAdd()
  await pa.validateCommentSection()
  await pa.validateDefault()
  await pa.CommentText('Automation testing')
  await pa.SelectAllPriority()
  await pa.SelectDepartment()
  await pa.selectCommentType()
  await pa.selectAddCommentOption()
  await pa.clickOnClose()
  await pa.clickOnPlayerFunctions()
  await pa.clickOnViewComment()
  await pa.validateViewCommentPopUp()
  await pa.validateCommentAdded()
  await pa.clickOnClose()
  await common.logout();
  
  

  });