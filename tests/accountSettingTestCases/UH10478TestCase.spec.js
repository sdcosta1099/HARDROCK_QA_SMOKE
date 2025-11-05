import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH10478 HALO | Online Account Settings | Unlock an Online Account', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const plyFunction = new playerFunctionsSteps(page)
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.AccountSettingTestData.UH10478)
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickAccountSettings_tab()
    await searchPlayerID.validateAccountSettingTextCOntent()
    await searchPlayerID.validateUnlockAccount_link()
   // await page.pause()
    await searchPlayerID.clickUnlockAccount_link()
    await searchPlayerID.clickCloseUnlockAccount_MessagePopUp()
    //validate account is unlocaked
    await plyFunction.clickPlayerFunctions_Tab()
    await plyFunction.clickplayerTransactionLog_Tab()
    await plyFunction.clickPlayerTransactionLog_FisrtEntry('account Locked')
    await gblFuntSteps.logOut()
  });