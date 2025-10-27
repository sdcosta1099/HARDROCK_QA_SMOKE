import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9513_HALo | Quick Offers | Quick Offers are displayed properly - Invitee List', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")

  await pa.clickOnConfiguration()
  await pa.clickOnManageQuickOffers()
  await pa.validateQuickOfferSetupPageWithActiveQuickOffersDisplayed()
  await pa.clickOnAddNewQuickOffer()
  await pa.validateNewQuickOfferSetupPageDisplayed()
  await pa.validateInLobCasinoOptionSelectedByDefault()
  await pa.clickOnRegionDropdownInQuickOfferPage()
  await pa.clickOnOfferTypeDropdownWhenCasinoIsSelectedInQuickOfferPage()
  await pa.selectOfferTypeQuickOfferPage()
  await pa.clickOnDisplayPropertyDropdownQuickOfferSetupPage()
  await pa.checkOptionDisplayPropertyQuickOffer()
  await pa.clickOnDisplayLocationDropdown()
  await pa.checkOptionOfDisplayLocationQuickOfferSetupPage()
  await pa.enterDisplayName('UH_9513_Test')
  await pa.clickOnCardTierRestrictionDropdownQuickOfferSetupPage()
  // await pa.selecCardTierRestrictionStarQuickOfferPage('Star')
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await pa.enterDisplayDescriptionInQuickOfferPage('Smoke Test')
  await pa.enterDisclaimerInQuickOfferPage('Smoke Test1')
  await pa.clickOnSaveAndNextStepQuickOfferPage()
  await pa.validateSelectAFileButtonDisplayedInInviteeListSection()
  await pa.SelectAFile()
  await page.getByText('Invitations processed successfully!').click();
  await page.getByRole('cell', { name: 'HALo_7Acct_Automation.csv', exact: true }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await pa.clickOnSaveAndNextInvitationDetailsPage()
  await pa.clickOnSubmitButton()
  await pa.validateOfferSuccessfullySubmittedMessage()
  await pa.clickOnCloseSuccessPopUp()
  await pa.enterOfferNameInSearchBox('UH_9513_Test')
  await pa.clickOnSearchForQuickOffer()
  await page.locator('#ctl00_ContentPlaceHolder1_wdgQuickOffersList_it7_0_btnUpdate').click();
  await pa.validateOfferInEditModeDisplayed()
  await page.getByRole('link', { name: 'Invitation Details' }).click();
  await page.locator("//span[contains(text(),'0 Total Invitees')]").click();
  await common.logout();
 

  });


  
  