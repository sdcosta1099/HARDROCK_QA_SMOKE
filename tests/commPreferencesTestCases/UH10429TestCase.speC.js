import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10429 HALO | Comm Preferences | Verify tooltip for "Unsubscribe from All" Email button', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10429)
     
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()   
    await searchPlayerID.clickToggleUnsubscribeFromAllEmail_Btn()
    await searchPlayerID.clickNoUnsubscribeFromAllEmail_PopUp()
    await searchPlayerID.clickYesUnsubscribeFromAllEmail_PopUp()
    
    await searchPlayerID.clickCloseUnsubscribeFromAllEmail_PopUp()
     
    await gblFuntSteps.logOut()
  })