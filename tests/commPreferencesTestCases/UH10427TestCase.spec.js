import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10427 HALO|Comm Preferences| Verify Patron no selections on Push notifications', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10427)
    //await page.pause()
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab() 
    
    const element = page.frameLocator('#ifrContent').getByRole('button', { name: 'Save' })
    await gblFuntSteps.scrollDownPage_toVisibleButton(element)
    await searchPlayerID.clickMessageTypesPushNotifications_popUp()
     
    await gblFuntSteps.logOut()
  })