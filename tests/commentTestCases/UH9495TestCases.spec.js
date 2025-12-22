import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9495 Patron Dashboard | Player Function | Comments | Void Comment', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH9495)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickViewComment_Tab()
    await playerFunctionPage.clickCommentFirstRow_Tab()
    await playerFunctionPage.validateCommentTab_Elements()
    await playerFunctionPage.clickPlayerTransactionsLog_Tab()
    await playerFunctionPage.validateComment_PlayerTransactionLog()  
    await  gblFuntSteps.logOut()
     
    //await page.pause()
})

