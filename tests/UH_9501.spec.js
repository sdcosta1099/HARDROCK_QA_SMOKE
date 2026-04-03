import { test, expect } from '@playwright/test';
test.setTimeout(100000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9501_HALO | Profile Comments | Filters | Priority Field Validations', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")
  await pa.enterPlayerID('807879472')
  await pa.clickOnSearch()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunctions()
  await pa.clickOnViewComment()
  await pa.validateViewCommentPopUp()
  await page.frame({name: 'FramePopUp7'}).locator('#ddlSearchPriority').selectOption('0');
  await page.frame({name: 'FramePopUp7'}).locator('#ddlSearchPriority').selectOption('1');
  await page.frame({name: 'FramePopUp7'}).locator('#ddlSearchPriority').selectOption('3');
  await page.frame({name: 'FramePopUp7'}).locator('#ddlSearchPriority').selectOption('4');
  await page.frame({name: 'FramePopUp7'}).locator('#ddlSearchPriority').selectOption('5');
  await page.frame({name: 'FramePopUp7'}).locator('#ddlSearchPriority').selectOption('2');
  await pa.selectHighComment()
  await pa.validateHighCommentsAreOnlyDisplayed()
  await pa.clickOnClose()
  await common.logout();
  
  

  });
