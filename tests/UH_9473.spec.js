import { test, expect } from '@playwright/test';
test.setTimeout(100000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9473_HALO | Patron Dashoard | Player Function | User Transaction Log | Search by UserID and CorpProp', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  
  await pa.clickOnPlayerFunction()
  await pa.clickOnUserTransactionLog()
  await pa.validateUserTransactionLogPage()
  await pa.enterUserID('TU_LAB_HALO_NIN_ADM')
  await pa.clickOnSearchUserTransactionLog()
  await pa.validateTranscationDisplayed()
  await pa.clickOnLeftArrowUTL()
  await pa.validateTableDisplayedUTL()
  await pa.clickOnClearButton()
  await pa.enterUserID('TU_LAB_HALO_NIN_ADM')
  await pa.enterCorpProp('31')
  await pa.clickOnSearchUserTransactionLog()
  await pa.validateTranscationDisplayed()
  await common.logout();

  });
