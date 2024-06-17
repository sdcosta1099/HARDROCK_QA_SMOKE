import{test, expect} from '@playwright/test';
import{configurationSteps} from '../../testSteps/configurationSteps'
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{Locator} from '@playwright/test'
import { config } from 'process';
 
 
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))


test('UH-9430  HALo | Configuration | Events & Offers | Quick Offers | Validate Active Quick Offer', async ({ page }) => {
     
    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps= new configurationSteps(page)
    //generate random Offer name
    // const offerName = gblFuntSteps.randomName('UH9655')
    // const invitationFilePath = 'dataFiles/resources/config/CSVs_Uploading/Inviteelist-TestSegment2.csv'
   
    //login steps
  await gblFuntSteps.gotoQALoginPage()
  await gblFuntSteps.loginAdminQA()

  // set up quick Offer 
   const sortedByStatus =   page.getByRole('cell', { name: 'Status', exact: true }) 
   const QOElement = page.locator('[id="x\\:1698345930\\.28\\:adr\\:0\\:tag\\:"] > td:nth-child(6)')
   await configSteps.goToManageQuickOffer_Page() 
   await configSteps.validateQuickOffer_Header ()
   await configSteps.clickQuickOfferSortOption(sortedByStatus, 'Satus')
   // await configSteps.validateQOAStatus()
   await expect(page.locator('[id="x\\:1698345930\\.28\\:adr\\:0\\:tag\\:"] > td:nth-child(6)')).toHaveText('Active')
   await gblFuntSteps.logOut()
  
  })
