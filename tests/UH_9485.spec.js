import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9485_HALO | Patron Dashboard | View Manage Trip definition ( Select Active - Inactive check mark)', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnCoreSystemConfiguration()
  await pa.clickOnManageTripDefinition()
  await pa.validateManageTripDefinitionPageDisplayed()
  await pa.clickOnInActiveTab()
  await pa.selectTrip()
  await pa.validateValueInTripNameDisplayed()
  await pa.validateValueInTripTypeDisplayed()
  await pa.validateValueInTripDescriptionDisplayed()
  await pa.validateValueInPropertyDisplayed()
  await pa.validateMaxOfDaysDisplayed()
  await pa.validateInactivityDaysDisplayed()
  await pa.validateSortOrderDisplayed()
  await pa.validateCompRedemptionInStartsATripDisplayed()
  await pa.validateOfferRedemptionInStartsATripDisplayed()
  await pa.validateRatingInStartsATripDisplayed()
  await pa.clickOnActiveCheckBox()
  await pa.clickOnSave()
  await pa.validateTripUnderActiveListDisplayed()
  await pa.clickOnActiveTab()
  await pa.selectTrip()
  await pa.uncheckActiveCheckBox()
  await pa.clickOnInActiveTab()
  await pa.validateTripUnderInActiveListDisplayed()
  await common.logout();

  });
