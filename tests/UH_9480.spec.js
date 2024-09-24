import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9480_Halo| Patron Dash Board | Issue Comp for Discretionary Comps', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$") 
  
  await pa.enterPlayerID('807879400')
  await pa.clickOnSearchForPlayer()
  await pa.clickOnIssueCompButton()
  await pa.validateIssueCompPopUpWindowOpen()
  await pa.validateDiscretionaryCompRadioButtonSelected()
  await pa.selectCompType('Food & Beverage')
  await pa.selectCompItem('HGNIN-Constant Grind')
  await pa.enterCompCount('10')
  await pa.validatTotalCompValueFieldAutoPopulated()
  await pa.validateCompAvailabilityFieldAutoPopulated()
  await pa.validateCompsRemainingFieldAutoPopulated()
  await pa.validateIssuedDateTodaysDate()
  await pa.enterUserNameInAD('TU_LAB_HALO_NIN_ADM')
  await pa.enterPasswordInAD('Password01@$')
  await pa.enterCommentInAD('Test')
  await pa.enterUserNameInAD('TU_LAB_HALO_NIN_ADM')
  await pa.clickOnIssueCompButton1()
  await pa.selectCompType('Food & Beverage')
  await pa.selectCompItem('HGNIN-Constant Grind')
  await pa.enterCompCount('10')
  await pa.validateIssueCompPopUpMessage()
  await pa.clickOnProceedButton()
  await pa.enterCommentInIssueCompField('Smoke Test')
  await pa.clickOnIssueCompButton2()
  //await page.waitForTimeout(80000000);

 // await common.logout();
  });
