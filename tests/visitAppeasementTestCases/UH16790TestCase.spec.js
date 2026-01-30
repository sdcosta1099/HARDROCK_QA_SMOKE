import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-16790 Halo | Visit Appeasement | Add visit Rock Shop', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.visitAppeasementTestAccounts.UH16790)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickVisitAppeasement_Tab()
    await playerFunctionPage.addVisits('Rock Shop','Hard Rock Cafe Hollywood')
    
    await gblFuntSteps.logOut()
     
    //await page.pause()
})
