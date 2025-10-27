import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-16788 Add visit Hotel', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.visitAppeasementTestAccounts.UH16788)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickVisitAppeasement_Tab()
    //await page.pause()
    await playerFunctionPage.addVisits()

    
    // await this.page.pause()
    // await playerFunctionPage.addVisitHotel('Test Hotel','2024-06-01','2024-06-05','Business Trip')
    
    
    await gblFuntSteps.logOut()
     
    //await page.pause()
})