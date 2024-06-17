import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10418 HALO|Comm Preferences| Verify Property Communication Preferences', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10418)
    
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()  
    //await page.pause()
    
    await searchPlayerID.clickToggleGlobalEmailDirectMail_Btn()
    await searchPlayerID.clickYesConfirm_PopUp()
    await searchPlayerID.clickClocseConfirm_PopUp()
    await searchPlayerID.clickSaveGlobalPreferences()
     
    await gblFuntSteps.logOut()
  })