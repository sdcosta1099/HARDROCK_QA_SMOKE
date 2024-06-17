import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10420 HALO|Comm Preferences| Verify if Global Line of Business Unity toggles must always show regardless of their status (ON/OFF).', async ({page }) => {
     
   
 
    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
  
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10420)
    //await page.pause()
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab() 
    
    await searchPlayerID.clickToggleUnityByHardRockMail_Btn()
    await searchPlayerID.clickToggleCasinoMail_Btn()
    await searchPlayerID.clickToggleHotelsAndResortMail_Btn()
    await searchPlayerID.clickToggleRockShopMail()
   
    await searchPlayerID.clickSaveGlobalPreferences()
    await gblFuntSteps.logOut()
  })