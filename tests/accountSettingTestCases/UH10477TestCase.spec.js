import{test, expect} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10477 HALO | Online Account Settings | Locked an Online Account', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.AccountSettingTestData.UH10477)
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickAccountSettings_tab()
    //await page.pause()
    await searchPlayerID.validateAccountNOTLocked_Status()
     //steps to lock an account find an account that is unlock to lock 
    // Lock account in CMP and validate in Halo

    //await searchPlayerID.lockAccount()
   
    //await expect.soft(searchPlayerID.accountSettings_tab).toHaveText('Account Locked');
   // await searchPlayerID.validateAccountLocked_Status()
    await gblFuntSteps.logOut()
  });