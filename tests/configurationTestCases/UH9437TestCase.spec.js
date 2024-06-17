import{test, expect} from '@playwright/test';
import{configurationSteps} from '../../testSteps/configurationSteps'
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{Locator} from '@playwright/test'
import { config } from 'process';
 
 
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))


test('UH-9437 HALO | Configuration | Events&Offers | Quick Offers | Filter Quick Offers by property', async ({ page }) => {
     //Test Status = completed
    
  const gblFuntSteps = new globalFUnctionSteps(page)
  const searchPlayerID= new playerSearchSteps(page)
  const configSteps= new configurationSteps(page)
  
  //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()

    //generate random Offer name
    const quickOfferName = gblFuntSteps.randomName('Quick-Offer-UH9437')
    const invitationFilePath = 'dataFiles/resources/config/CSVs_Uploading/Inviteelist-TestSegment2.csv'
    console.log('Quick Offer Name: ' +quickOfferName)
    const sortedByProperty =   page.locator('#ctl00_ContentPlaceHolder1_wdgQuickOffersList').getByRole('cell', { name: 'Property', exact: true }) 

    await configSteps.goToManageQuickOffer_Page() 
    await configSteps.clickQuickOfferSortOption(sortedByProperty, 'Property')


    await gblFuntSteps.logOut()
  
  })
