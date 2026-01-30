import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test(' UH-10437 HALO|Comm Preferences|Contact Information Tab|Player Information|Verify Dropdown list for Address Type', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10416)
    //await page.pause()
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()   
     
    await gblFuntSteps.logOut()
  })