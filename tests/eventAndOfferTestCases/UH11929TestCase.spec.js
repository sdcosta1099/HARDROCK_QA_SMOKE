import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import { configurationSteps } from '../../testSteps/configurationSteps';
import { config } from 'process';
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test(' UH-11929 EO | File Upload: Change Segment using an Invitee list with pre-uploaded accounts but different Segment', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps = new configurationSteps(page)

      //generate random Offer name
    const offerName = gblFuntSteps.randomName('UH11929')
    //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
   
     // //go to Add new Offer steps
     await configSteps.goToAddNewOfferPage()
     await configSteps.goToOfferSetUpPage(offerName, 'NO')
     await configSteps.goToInvitationPage()
     await configSteps.goToMasterItemListPage(1)
     await configSteps.goToAttendeeCapacityPage('NO', 0)
     await configSteps.goToSegmentsPage(2)
     await configSteps.goToCheckInPage()
     await configSteps.goToInternalAttachmentsPage()
     await configSteps.goToSummaryPafePage(offerName)
     //await configSteps.checkInEventAndOffer(offerName)
     await configSteps.approvedOpenOffer(offerName)
     await configSteps.deactivateOffer(offerName)

    await gblFuntSteps.logOut()
  })