import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import { configurationSteps } from '../../testSteps/configurationSteps';
import { config } from 'process';
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9670 HALO | Events & Offers | Offer Creation: Create offer with single attendee & multiple items with max qty greater than 1', async ({ page }) => {
     
    test.setTimeout(120000);
  
    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps = new configurationSteps(page)

      //generate random Offer name
    const offerName = gblFuntSteps.randomName('UH9670')
    const invitationFilePath = 'dataFiles/resources/config/CSVs_Uploading/Inviteelist-TestSegment1.csv'
    //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
   
    
     // //go to Add new Offer steps
     await configSteps.goToAddNewOfferPage()
     await configSteps.goToOfferSetUpPage(offerName, 'NO')
     await configSteps.goToInvitationPage(invitationFilePath)
     await configSteps.goToMasterItemListPage(1)
     await configSteps.goToAttendeeCapacityPage('NO', 1)
     
     // await page.pause()
    // await configSteps.goToSegmentsPage(1,2,3)
    await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_1_lnkConfigure').click();
    await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_txtDefaultPrizeQuantity').fill('1')
    await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_txtMaxPrizeQuantity').fill('2')
    await page.waitForTimeout(3000)
    const btnAddAllPrimaryPrize =   page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_btnAddAllPrimaryPrize') 
    await btnAddAllPrimaryPrize.click()
    await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Update' }).click();
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Save & Next Step' }).click();


     await configSteps.goToCheckInPage('YES','NO')
    // await configSteps.goToInternalAttachmentsPage()
    await page.getByRole('button', { name: 'Save & Next Step' }).click({timeout:3000});
    await configSteps.goToSummaryPafePage()
    await page.getByRole('button', { name: 'Submit for Review' }).click()
      // expect(  this.validateSuccessOfferSubmited_PopUp).toHaveText('The offer has been submitted successfully!')
      page.getByRole('button', { name: 'Close' })
     
     
     
     
     await configSteps.checkInEventAndOffer(offerName)
     await configSteps.approvedOpenOffer(offerName)
     await configSteps.deactivateOffer(offerName)

    await gblFuntSteps.logOut()
  })