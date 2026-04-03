import { test, expect } from '@playwright/test';
test.setTimeout(50000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9474_HALO | Patron Dashboard | Player Function | User Transaction Log| Search by date', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  
  await pa.clickOnPlayerFunction()
  await pa.clickOnUserTransactionLog()
  await pa.validateUserTransactionLogPage()
  await pa.enterUserID('TU_LAB_HALO_NIN_ADM')
  await pa.selectDateRangeUTL('Today')
  await pa.clickOnSearchUserTransactionLog()
  await pa.validateTranscationDisplayed()
  await pa.validateTransactionTableInUserTransactionLogPage()
  await common.logout();

  });
