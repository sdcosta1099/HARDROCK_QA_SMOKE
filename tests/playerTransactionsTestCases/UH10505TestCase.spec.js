import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test.skip('UH-10505 CMP| Halo |  Update Player Type from CMP and Validate Player transaction in Halo ', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.playerTransactionsTestAccounts.UH10505)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickplayerTransactionLog_Tab()
     

    await playerFunctionPage.ClickClosePopUpPlayerTransactionLog()
    await gblFuntSteps.logOut()
     
    //await page.pause()
})
