import { test, expect } from '@playwright/test';
test.setTimeout(200000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9492_HALO | Configuration | Offer Management | View a Patron Offer on Player Dashboard', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$") 

  await pa.clickOnConfiguration()
  await pa.clickOnOfferManagement()
  await pa.clickOnManagecampaign()
  await pa.clickOnSubmitCampaign()
  await pa.validateCampaignLabel()
  await pa.clickOnViewcampaign()
  await pa.clickOnAddCampaign()
  await pa.validateNewCampaignLabel()
  await common.logout();

});
