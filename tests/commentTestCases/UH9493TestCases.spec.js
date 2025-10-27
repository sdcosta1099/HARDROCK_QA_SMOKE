import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9493 HALO | Patron Dashboard | Player Function | Comments | Settle Comment', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH9493)
    await playerFunctionPage.validateCommentPopUp_Header_Present()
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickViewComment_Tab()
    //await page.pause()
    
    await playerFunctionPage.clickCommentFirstRow_Tab()
    await playerFunctionPage.clickviewSettledVoided_tab()
    await playerFunctionPage.clickSubmit_SettleVoidComment_Btn()
    await playerFunctionPage.clickConfirm_SettleVoidComment_Btn()

    console.log('last Entry')
    await playerFunctionPage.clickCloseCommentPopUp_Message()
    await playerFunctionPage.clickplayerTransactionLog_Tab()
    await gblFuntSteps.logOut()
})

