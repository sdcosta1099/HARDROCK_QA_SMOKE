import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10428 HALO|Comm Preferences| Verify Read only view for push notification preference selection', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10428)
    //await page.pause()
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab() 

    const element = page.frameLocator('#ifrContent').getByRole('button', { name: 'Save' })
    await gblFuntSteps.scrollDownPage_toVisibleButton(element)  
     
    await searchPlayerID.validatePushNotificationPreferences_Verbiage()
     
    await gblFuntSteps.logOut()
  })