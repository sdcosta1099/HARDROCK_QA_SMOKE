import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-16870 Halo | Visit Appeasement | Visit Appeasement Report , visit added in Halo reflected in HAQA SQ REPORT', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH16870)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickVisitAppeasement_Tab()
    
    
    await gblFuntSteps.logOut()
     
    //await page.pause()
})
