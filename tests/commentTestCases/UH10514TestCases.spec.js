import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10514 CMP | Halo | Settle Comment from CMP and Validate Player transaction in Halo', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    console.log("Settle Comment on CMP then run test to validate comment on Halo")

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH10514)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickViewComment_Tab()
    await playerFunctionPage.clickCloseCommentPopUp_Message()
    console.log("Comment Settled on CMP Validated on Halo as expected")
    await  gblFuntSteps.logOut()
     
    //await page.pause()
})

