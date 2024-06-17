import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import {playerFunctionsSteps } from '../../testSteps/playerFunctionsSteps';  
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH10482 HALO | Online Account Settings | Resend Activation Link email for a Unity Account created online', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const plyFunction = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.AccountSettingTestData.UH10482)
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickAccountSettings_tab()
    await searchPlayerID.validateAccountSettingTextCOntent()
    await searchPlayerID.clickResendActivation_link()
    await plyFunction.clickPlayerFunctions_Tab()
    await plyFunction.clickplayerTransactionLog_Tab()
    
    await gblFuntSteps.logOut()

  });