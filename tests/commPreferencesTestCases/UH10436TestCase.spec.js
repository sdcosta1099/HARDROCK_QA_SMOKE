import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10436 HALo | Comm Preferences | Users with Limited Access/ Manager +', async ({ page }) => {
     
    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginNonAdminUser()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10436)
    
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()   
     
    await gblFuntSteps.logOut()
  })