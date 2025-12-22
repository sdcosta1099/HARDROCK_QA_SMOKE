import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9498 HALO| Patron Dashboard |Player function | Comments | Filters | Search Results Validationsn', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH9498)
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickViewComment_Tab()
    
    await playerFunctionPage.clickAddComment_Tab()
    await playerFunctionPage.clickAddComment_Txt()
    await playerFunctionPage.clickAddComment_Tab()

    await playerFunctionPage.validateCommentTab_Elements()

    //await playerFunctionPage.validateCommentExpiration()

    await  gblFuntSteps.logOut()
    
})

