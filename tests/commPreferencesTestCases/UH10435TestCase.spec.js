
import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10435 HALo | Comm Preferences | Verify Global Unity Communication Preferences', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10435)
    
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()

    await searchPlayerID.clickToggleUnityByHardRockMail_Btn()
    await searchPlayerID.clickToggleCasinoMail_Btn()
    await searchPlayerID.clickToggleHotelsAndResortMail_Btn()
    await searchPlayerID.clickToggleRockShopMail_Btn()

    const element = page.frameLocator('#ifrContent').getByRole('button', { name: 'Save' })
    await gblFuntSteps.scrollDownPage_toVisibleButton(element)
    await searchPlayerID.clickSaveGlobalPreferences()

     
    await gblFuntSteps.logOut()
  })