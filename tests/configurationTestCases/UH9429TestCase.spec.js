import{test, expect} from '@playwright/test';
import{configurationSteps} from '../../testSteps/configurationSteps'
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{Locator} from '@playwright/test'
import { config } from 'process';
 
 
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))


test('UH-9429 HALO | Configuration | Events&Offers | Quick Offers | Validate Active Quick Offer', async ({ page }) => {
     
    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps= new configurationSteps(page)

    //generate random Offer name
    // const offerName = gblFuntSteps.randomName('UH9655')
    // const invitationFilePath = 'dataFiles/resources/config/CSVs_Uploading/Inviteelist-TestSegment2.csv'

    const sortedBySartDate =  page.getByRole('cell', { name: 'Start DateAscending', exact: true }) 
    const sortedByEndDate =    page.getByRole('cell', { name: 'End Date', exact: true }) 
    const sortedByDisplayDate =     page.getByRole('cell', { name: 'Display Date', exact: true }) 
    const sortedByName =   page.getByRole('cell', { name: 'Name', exact: true }) 
    const sortedByDescription =    page.getByRole('cell', { name: 'Description', exact: true }) 
    const sortedByStatus =   page.getByRole('cell', { name: 'Status', exact: true }) 
    const sortedByProperty =   page.locator('#ctl00_ContentPlaceHolder1_wdgQuickOffersList').getByRole('cell', { name: 'Property', exact: true }) 

    //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    // set up quick Offer 
   await configSteps.goToManageQuickOffer_Page()  
   
   await configSteps.clickQuickOfferSortOption(sortedBySartDate, 'Start_date')
   await configSteps.clickQuickOfferSortOption(sortedByEndDate, 'End_date')
   await configSteps.clickQuickOfferSortOption(sortedByDisplayDate, 'Display_date')
   await configSteps.clickQuickOfferSortOption(sortedByName, 'Name')
   await configSteps.clickQuickOfferSortOption(sortedByDescription, 'Description')
   await configSteps.clickQuickOfferSortOption(sortedByStatus, 'Status')
   await configSteps.clickQuickOfferSortOption(sortedByProperty, 'Property')
    
   await gblFuntSteps.logOut()
  
  })
