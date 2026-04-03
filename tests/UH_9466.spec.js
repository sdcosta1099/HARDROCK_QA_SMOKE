import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9466_HALO | Comments | Add Comments | Different User', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

//Scenario1
await pa.enterPlayerID('807879748')
await pa.clickOnSearchForPlayer()
await pa.validatePlayerDashboardDisplayed()
await pa.clickOnClose()
await pa.clickOnPlayerFunction()
await pa.clickOnViewComment()
await pa.validateViewCommentPopUp()
await pa.clickOnAddCommentTab()
await pa.selectPriorityAddComment('1-Highest')
await pa.selectLimitToDepartment('All')
await pa.selectCommentTypeViewCommentPage('User Comment')
await pa.enterExpirationDate1ViewCommentPage('08/26/2024')
await pa.enterText('apple0291^&%@_+')
await pa.clickOnCancelAddCommentOption()
await pa.clickOnAddCommentTab()
await pa.selectPriorityAddComment('1-Highest')
await pa.selectLimitToDepartment('All')
await pa.selectCommentTypeViewCommentPage('User Comment')
await pa.enterExpirationDate1ViewCommentPage('08/26/2024')
await pa.enterText('apple0291^&%@_+')
await pa.clickOnSaveViewComment()
await pa.validateCommentAddedSuccessfullyPopup()
await pa.clickOnOkMessagePopup()
await pa.validateNewCommentAddedToCommentsTable()
await pa.validateCommentDetailsSectionDisabled()
await pa.clickOnAddCommentTab()
await pa.validateCommentDetailsSectionEnabled()
await pa.selectPriorityAddComment('2-High')
await pa.selectLimitToDepartment('IT')
await pa.uncheckedGlobalAllPropertiesCheckBox()
await pa.clickOnLimitToPropertyDropdown()
await pa.selectLimitToPropertyHardRockCincinnatiViewCommentPage('Hard Rock Cincinnati')
await pa.selectCommentTypeViewCommentPage('Customer Request')
await pa.selectNeverCheckboxIsNextToExpirationDate()
await pa.enterText('Watermelon23154@#{}')
await pa.clickOnSaveViewComment()
await pa.validateCommentAddedSuccessfullyPopup()
await pa.clickOnOkMessagePopup()
await pa.validateNewCommentAddedToCommentsTable()
await pa.validateCommentDetailsSectionDisabled()
await pa.clickOnCloseComment()
await pa.clickOnPlayerFunction()
await pa.clickOnViewComment()
await pa.validateNewCommentAddedToCommentsTable()
await pa.clickOnCloseComment()
await common.logout();


//Scenario2
await common.goToHALOWebApplication()
await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

await pa.enterPlayerID('807879748')
await pa.clickOnSearchForPlayer()
await pa.validatePlayerDashboardDisplayed()
await pa.clickOnClose()
await pa.clickOnPlayerFunction()
await pa.clickOnViewComment()
await pa.validateViewCommentPopUp()
await pa.clickOnAddCommentTab()
await pa.selectPriorityAddComment('1-Highest')
await pa.selectLimitToDepartment('All')
await pa.selectCommentTypeViewCommentPage('User Comment')
await pa.enterExpirationDate1ViewCommentPage('08/26/2024')
await pa.clickOnSaveViewComment()
await pa.validateAlertPopUpMessageToEnterCommentDisplayed()
await pa.clickOnOkMessagePopup()
await pa.clickOnCloseComment()
await common.logout();


//Scenario3
await common.goToHALOWebApplication()
await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

await pa.enterPlayerID('807879748')
await pa.clickOnSearchForPlayer()
await pa.validatePlayerDashboardDisplayed()
await pa.clickOnClose()
await pa.clickOnPlayerFunction()
await pa.clickOnViewComment()
await pa.validateViewCommentPopUp()
await pa.clickOnAddCommentTab()
await pa.validateAddTabDisabled()
await pa.clickOnCloseComment()
await common.logout();

 });
