import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('16770 CMP | Halo | Create New Comment Priority 1 from CMP', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    console.log("Create Comment Priority 1 on CMP then validate in Halo" )
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH16770)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickViewComment_Tab()
    await playerFunctionPage.addPriorityComments(1)
    await  gblFuntSteps.logOut()
     
    //await page.pause()
})

