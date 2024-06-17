import{test, expect} from '@playwright/test';
import{configurationSteps} from '../../testSteps/configurationSteps'
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{Locator} from '@playwright/test'
import { config } from 'process';


const testData= JSON.parse(JSON.stringify(require("../../testData.json")))


test('UH-10851 HALo|Check-In|Test|Check In - Items: YES | Attendance: NO | Backup: NO - Multiple Items - Booked in Advance - booked item not available', async ({ page }) => {
     
    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps= new configurationSteps(page)
    //generate random Offer name
    const offerName = gblFuntSteps.randomName('UH-10851')
    //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    //go to Add new Offer steps
    await configSteps.goToAddNewOfferPage()
    await configSteps.goToOfferSetUpPage(offerName, 'NO')
    await  configSteps.goToInvitationPage()
     
    await configSteps.goToMasterItemListPage()
    await configSteps.goToAttendeeCapacityPage('NO', 2)

    await configSteps.goToSegmentsPage()
    await configSteps.goToCheckInPage()
    await configSteps.goToInternalAttachmentsPage()
    await configSteps.goToSummaryPafePage(offerName)
    await configSteps.approvedOpenOffer(offerName)
    await configSteps.deactivateOffer(offerName)

    await gblFuntSteps.logOut()
})