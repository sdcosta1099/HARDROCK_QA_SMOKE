import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9499_Halo | Patron Dashboard | Offers Tab Validation', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('660302931')
  await pa.clickOnSearchForPlayer()
  await pa.clickOnClose()
  await pa.validatePlayerDashboardDisplayed()
  await pa.validateOffersTabDisplayed()
  await pa.clickOnOffersTab()
  await pa.validateByDefaultActiveRedeemedVoidedExpiredReservedCheckBoxesIsCheckedNextToThePageName()
  await pa.validateOffersInTheListDisplayed()
  await pa.validateViewOfferDetailsRedeemOfferDeletePlayerOfferScanBarCodeCheckForUpdatesButtonsDisplayed()
  await pa.selectOfferFromTheAssignedList()
  await pa.clickOnViewOfferDetailsButton()
  //await page.waitForTimeout(8000000)
  await pa.validateViewOfferDetailsWindowDisplayed()
  await pa.closeOfferDetailsWindow()
  await pa.selectOfferFromTheAssignedList()
  await pa.clickOnCheckForUpdatesButton()
  await pa.validateOfferSyncPopUpWindowWithCloseAndOkButtons()
  await pa.clickOnOkOfferSyncPopUpWindow()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.validateTableDisplayed()
  await pa.clickOnClose()
  await common.logout();

  });
