import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH 10422 HALO | Comm Preferences | Verify de-selecting "Global Email and Direct Mail Unsubscribe" toggle', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10422)
    //await page.pause()
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()  
    await searchPlayerID.clickToggleGlobalEmailDirectMail_Btn() 
    await searchPlayerID.clickDeSelectToggleGlobalEmailDirectMail_Btn() 
     
    await gblFuntSteps.logOut()
  })