import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH16767 - Halo | Create/Add New Comment and Validate Player transaction in Halo', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH16767)
    await playerFunctionPage.clickPlayerFunctions_Tab()
   // await playerFunctionPage.clickViewComment_Tab()
    await playerFunctionPage.addCommentDetails()
    await playerFunctionPage.clickPlayerTransactionsLog_Tab()
    console.log("Comment Voided on CMP Validated on Halo as expected")
    //await playerFunctionPage.clickCloseCommentPopUp_Message()
    await  gblFuntSteps.logOut()
     
})

