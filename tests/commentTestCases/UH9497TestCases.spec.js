import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9497 HALO | Patron Dashboard | Player Function | Comments | Filters | Page Layout verification', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)
    

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH9497)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await page.pause()
    await playerFunctionPage.clickViewComment_Tab()


    await playerFunctionPage.validateCommentsFilter_Elements()
    await  gblFuntSteps.logOut()
     
    //await page.pause()
})

