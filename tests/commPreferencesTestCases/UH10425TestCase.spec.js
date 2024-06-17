import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10425 HALO|Comm Preferences| Create additional communication channels and select the number of toggle states and the corresponding colors.', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10425)
    //await page.pause()
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()
    await searchPlayerID.clickCloseResendVerificationEmail_popUp()
     
    await searchPlayerID.clickToggleUnityByHardRockMail_Btn()
    await searchPlayerID.clickToggleCasinoMail_Btn() 
    await searchPlayerID.clickToggleCafeMail_Btn()
    await searchPlayerID.clickToggleHotelsAndResortMail_Btn()
    await searchPlayerID.clickToggleRockShopMail_Btn()
    await searchPlayerID.clickSaveGlobalPreferences()
    await searchPlayerID.clickClocseConfirm_PopUp()
     
    await gblFuntSteps.logOut()
  })