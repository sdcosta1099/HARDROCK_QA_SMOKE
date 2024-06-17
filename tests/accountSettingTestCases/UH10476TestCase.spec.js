import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH10476 HALO | Online Account Settings | Reset Password link to an Online Account that is DISABLED', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.AccountSettingTestData.UH10476)
    //await page.pause()
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickAccountSettings_tab()
    // validate account is disable
    await searchPlayerID.validateAccountDisableTextCOntent()
    await searchPlayerID.clickResetPassword_link()
    await searchPlayerID.clickResetPassword_popUpSend()
    await searchPlayerID.clickResetPassword_message()
     
    await gblFuntSteps.logOut()
  })