import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9496_HALO| Patron Dashboard | Player Function | Comments |Expiration Comment validation', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.enterPlayerID('807879482')
  await pa.clickOnSearchForPlayer()
  await pa.validatePlayerDashboardDisplayed()
  await pa.clickOnPlayerFunction()
  await pa.clickOnViewComment()
  await pa.clickOnAddCommentTab()
  await pa.selectPriorityAddComment('2-High')
  await pa.selectPropertyViewCommentPage('HR Casino, Hollywood')
  await pa.selectLimitToDepartment('IT')
  await pa.selectCommentTypeViewCommentPage('Compliment')
  await pa.enterExpirationDateViewCommentPage('08/23/2027')
  await pa.validateAllSelectedByDefaultInLimitToDepartment()
  await pa.validateGlobalAllPropertiesIsCheckedByDefault()
  await pa.uncheckedGlobalAllPropertiesCheckBox()
  await pa.clickOnLimitToPropertyDropdown()
  await pa.validatePropertyListDisplayed()
  await pa.selectLimitToPropertyViewCommentPage('SG Casino, Brighton')
  await pa.enterExpirationDateViewCommentPage('08/23/2027')
  await pa.validateNeverCheckboxIsNextToExpirationDate()
  await pa.enterText('UH_9496')
  await pa.clickOnSaveViewComment()
  await pa.validateCommentAddedSuccessfullyPopup()
  await pa.clickOnOkMessagePopup()
  await pa.clickOnCloseComment()
  await pa.clickOnPlayerFunction()
  await pa.clickOnPlayerTransactionLog()
  await pa.validatePlayerTransactionLogPopUp()
  await pa.clickOnLeftArrow()
  await pa.validateCommentTransactionDisplayed()
  await pa.clickOnClose()
  await common.logout();

  });
