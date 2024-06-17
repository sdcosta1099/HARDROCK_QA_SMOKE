import{test, expect} from '@playwright/test';
import{configurationSteps} from '../../testSteps/configurationSteps'
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{Locator} from '@playwright/test'
import { config } from 'process';
 
 
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))


test('UH-9655 HALO | Events and Offers | Create offer with Attendance only', async ({ page }) => {
     
    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps= new configurationSteps(page)
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
    await configSteps.goToMasterItemListPage(1)
    await configSteps.goToAttendeeCapacityPage('NO', 1)
    await configSteps.goToSegmentsPage(2)
    await configSteps.goToCheckInPage(yes,no)
    await configSteps.goToInternalAttachmentsPage()
    await configSteps.goToSummaryPafePage(offerName)
    //await configSteps.checkInEventAndOffer(offerName)
    await configSteps.approvedOpenOffer(offerName)
    await configSteps.deactivateOffer(offerName)

    await gblFuntSteps.logOut()
  
  })

   