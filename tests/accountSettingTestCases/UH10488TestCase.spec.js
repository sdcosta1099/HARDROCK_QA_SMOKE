import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH10488 HALO | Online Account Settings | Online account settings displayed in Comm Preferences', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.AccountSettingTestData.UH10488)
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickAccountSettings_tab()
    await searchPlayerID.validateAccountSettingTextCOntent()
    await gblFuntSteps.logOut()
  });