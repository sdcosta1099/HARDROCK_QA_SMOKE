import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH10487 HALO | Online Account Settings | Reset Password link to an Online Account that is LOCKED', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.AccountSettingTestData.UH10480)
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickAccountSettings_tab()
    await searchPlayerID.validateAccountSettingTextCOntent()
    await searchPlayerID.clickResetPassword_link()
    await gblFuntSteps.logOut()

  });