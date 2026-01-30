import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-16852 Halo | Visit Appeasement | Add 3 visits to a different LOB', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.visitAppeasementTestAccounts.UH16852)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickVisitAppeasement_Tab()
    // await playerFunctionPage.addVisits('Cafe', 'Hard Rock Cafe Hollywood ')
    await playerFunctionPage.validateVisitAppeasementPage()
    
    
    await gblFuntSteps.logOut()
     
    //await page.pause()
})
