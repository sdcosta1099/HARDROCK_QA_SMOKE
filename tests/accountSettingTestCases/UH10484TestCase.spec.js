import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH10484  HALO | Online Account Settings | Online account settings for a Patron with an Online account but not yet Activated', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.AccountSettingTestData.UH10484)
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickAccountSettings_tab()
    await searchPlayerID.validateResendActivation_link()
    await gblFuntSteps.logOut()

  });