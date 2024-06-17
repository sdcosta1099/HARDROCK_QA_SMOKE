import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9758 View Discretionary Comps', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.patronDashboardTestAccounts.UH9758)
    await searchPlayerID.clickDiscrationaryComp_Tab()
    await searchPlayerID.clickVoidableDComp_Btn()
    await searchPlayerID.clickCancel_Btn()
    await searchPlayerID.clickViewCompDetail_Btn()
    
    await  gblFuntSteps.logOut()
     
    //await page.pause()
})

