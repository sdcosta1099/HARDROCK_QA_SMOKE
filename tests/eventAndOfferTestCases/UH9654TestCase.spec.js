import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import { configurationSteps } from '../../testSteps/configurationSteps';
 
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9654 HALO | Events and Offers | Create offer with Prize and Attendance', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps = new configurationSteps(page)

       //generate random Offer name
    const offerName = gblFuntSteps.randomName('UH9655')
    const invitationFilePath = 'dataFiles/resources/config/CSVs_Uploading/Inviteelist-TestSegment2.csv'
    //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    
  
    // //go to Add new Offer steps
    await configSteps.goToAddNewOfferPage()
    await configSteps.goToOfferSetUpPage(offerName, 'NO')
    await configSteps.goToInvitationPage(invitationFilePath)
    await configSteps.goToMasterItemListPage(0)
    await configSteps.goToAttendeeCapacityPage('NO', 5)
    await configSteps.goToSegmentsPage(2)
    await configSteps.goToCheckInPage('YES', 'NO')
    await configSteps.goToInternalAttachmentsPage()
    await configSteps.goToSummaryPafePage(offerName)
    //await configSteps.checkInEventAndOffer(offerName)
    await configSteps.approvedOpenOffer(offerName)
    await configSteps.deactivateOffer(offerName)

    
    
    await page.close()
  })