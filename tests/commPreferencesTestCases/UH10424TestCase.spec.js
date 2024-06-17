import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10424 HALO|Comm Preferences| Email and Mail Communication switch/toggle states', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10424)
     
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab() 
    //await page.pause()
    await searchPlayerID.validateResendAllVerificationEmailVerbiage_Link()
    await searchPlayerID.clickResendAllVerificationEmail_Link()   
    await searchPlayerID.clickConfirmResendVerificationEmail_Btn()
    await searchPlayerID.clickCloseResendVerificationEmail_Btn()
    //  const yellowToggleColor=  "#008000"
    // await searchPlayerID.validateToggleColor(yellowToggleColor)
     
    await gblFuntSteps.logOut()
  })