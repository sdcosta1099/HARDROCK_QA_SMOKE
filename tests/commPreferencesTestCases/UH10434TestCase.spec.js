import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10434 HALO|Comm Preferences| Verify Hard Bounce email address', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    console.log('Search for a patron with email address is marked as hard bounce in the supression list')
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10434)
    
    await searchPlayerID.clickBouncedStatusTriagle_icon()
    await searchPlayerID.clickRemoveHardBouncedStatus_Button()
   
    console.log('Confirm that the following happens:'
    +'Patron s email is removed from the Master Suppression List' 
    +'Patron s status is changed from "B" to "S"')

    console.log('Patron can now receive marketing communications. as expected')

    await gblFuntSteps.logOut()
  })