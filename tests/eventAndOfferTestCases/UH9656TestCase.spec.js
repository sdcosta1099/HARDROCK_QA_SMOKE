import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import { configurationSteps } from '../../testSteps/configurationSteps';
import { config, off } from 'process';
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9656 HALO | Events and Offers | Edit offer', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps = new configurationSteps(page)

    //generate random Offer name
    const offerName = gblFuntSteps.randomName('UH9656')
    const invitationFilePath = 'dataFiles/resources/config/CSVs_Uploading/Inviteelist-TestSegment2.csv'
    //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    // //go to Add new Offer steps
    await configSteps.goToAddNewOfferPage()
    await configSteps.goToOfferSetUpPage(offerName, 'NO')
    await configSteps.goToInvitationPage(invitationFilePath)
    await configSteps.goToMasterItemListPage(1)
    await configSteps.goToAttendeeCapacityPage('NO', 1)
    await configSteps.goToSegmentsPage(2)
    await configSteps.goToCheckInPage(yes,no)
    await configSteps.goToInternalAttachmentsPage()
    await configSteps.goToSummaryPafePage(offerName)
    // locate existing Offer
    await configSteps.editAttendeeCapacity(offerName)
    await configSteps.goToAttendeeCapacityPage('YES', 2)
    await configSteps.clickSaveAndNext_Btn()
    await configSteps.clickSaveAndNext_Btn()
    await configSteps.clickSaveAndNext_Btn()
    await configSteps.clickSaveAndNext_Btn()
    // validate attendee is modified 
    await configSteps.deactivateOffer(offerName)
    
      
      
    await gblFuntSteps.logOut()
  })