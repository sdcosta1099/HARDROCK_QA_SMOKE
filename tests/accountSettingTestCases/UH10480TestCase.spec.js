import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH10480 HALO | Online Account Settings | Enable an Online Account', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.AccountSettingTestData.UH10480)
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickAccountSettings_tab()
    await searchPlayerID.validateAccountDisable_link()
    await searchPlayerID.clickAccountDisable_link()
    await searchPlayerID.clickAnableAccount_Link()
    await gblFuntSteps.logOut()

  });