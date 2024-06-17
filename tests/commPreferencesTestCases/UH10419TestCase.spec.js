import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import { playerFunctionsSteps } from '../../testSteps/playerFunctionsSteps';
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10419 HALO|Comm Preferences| Verify Communication Preferences Transactions', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunction = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10419)
     
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()   

    await searchPlayerID.clickToggleGlobalEmailDirectMail_Btn()
    await searchPlayerID.clickYesConfirm_PopUp()
    await searchPlayerID.clickClocseConfirm_PopUp()
    await searchPlayerID.clickSaveGlobalPreferences()

    await playerFunction.clickPlayerFunctions_Tab()
    await playerFunction.clickplayerTransactionLog_Tab()
    await playerFunction.clickPlayerTransactionLog_FisrtEntryDataValidation('Email Unsubscribed from ALL marketing emails')
    
    await gblFuntSteps.logOut()
  })