import{test, expect} from '@playwright/test';
import{configurationSteps} from '../../testSteps/configurationSteps'
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{Locator} from '@playwright/test'
import { config } from 'process';
 
 
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))


test('UH-9432 HALO Configuration | Events&Offers | Quick Offers | Create Star Tier Quick Offer', async ({ page }) => {
     
    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps= new configurationSteps(page)
    
   
    //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()

    //generate random Offer name
    const offerName = gblFuntSteps.randomName('Quick-Offer-UH9432')
    const invitationFilePath = 'dataFiles/resources/config/CSVs_Uploading/Inviteelist-TestSegment2.csv'
    console.log('Quick Offer Name: ' +offerName)

    await configSteps.goToManageQuickOffer_Page() 
     
    //set up Quick Offer Page
    await configSteps.goToQuickOfferSetUpPage(offerName, 'Star')
    //await page.pause()
    await page.waitForTimeout(5000)
    await configSteps.goToInvitationPage(invitationFilePath)
    await configSteps.goToSummary_QO_Tab()
    await configSteps.goToManageQuickOffer_Page() 
    await page.waitForTimeout(5000)
    await configSteps.search_QO(offerName)
    await page.waitForTimeout(5000)
    await configSteps.clickDeactivate_QO(offerName)
 
    await gblFuntSteps.logOut()
  
  })

