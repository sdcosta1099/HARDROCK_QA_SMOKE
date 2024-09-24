import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9497_HALO | Patron Dashboard | Player Function | Comments | Filters | Page Layout verification', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879400')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnViewComment()
  await pa.validateViewCommentPopUp()
  await pa.validateNoDataInDateRangeFields()
  await pa.validateValueAllByDefaultDisplayedInSourceDepartmentPropertyPriorityDropdownFields() 
  await pa.clickOnCloseComment()
  await common.logout();

  });
