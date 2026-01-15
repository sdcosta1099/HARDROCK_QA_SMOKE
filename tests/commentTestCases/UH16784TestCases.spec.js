import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test(' UH16784CMP | Halo | Create New Comment Global Property from CMP', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH16784)
    console.log( "Validate Global property comment from CMP ")
    await playerFunctionPage.clickPlayerFunctions_Tab()
    await playerFunctionPage.clickViewComment_Tab()
    await playerFunctionPage.validateCommentsDetails()
    await  gblFuntSteps.logOut()
     
    //await page.pause()
})

