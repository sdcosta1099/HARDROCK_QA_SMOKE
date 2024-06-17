import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH9779| Halo| Patron Dash Board | Void Comp for Discretionary Comps', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CompValidationTestAccounts.UH9779)
    await searchPlayerID.clickDiscrationaryComp_Tab()
    // await page.pause()
    await searchPlayerID.clickVoidableDComp_Btn()
    await searchPlayerID.clickVoid_Btn()
    await searchPlayerID.enterPassword_text()
    await searchPlayerID.addValidationComment_text()
    await searchPlayerID.enterPassword_text()
    await searchPlayerID.clickValidationDiscVoidedOK_Btn()
    await searchPlayerID.clickViewCompDetail_Btn()
    await searchPlayerID.clickCompStatus_Btn()
    
    await gblFuntSteps.logOut()
  });