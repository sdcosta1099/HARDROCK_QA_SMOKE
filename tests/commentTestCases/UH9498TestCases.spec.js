import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
//import{baseFunction } from '../../testSteps/baseFunctions'    
 
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-9498 HALO| Patron Dashboard |Player function | Comments | Filters | Search Results Validationsn', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const playerFunctionPage = new playerFunctionsSteps(page)
   // const baseFunction = new baseFunctions(page)
    

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CommentTestAccounts.UH9498)
    await playerFunctionPage.clickPlayerFunctions_Tab()
   

    // await playerFunctionPage.clickViewComment_Tab()
    
    // await playerFunctionPage.clickAddComment_Tab()
    // await playerFunctionPage.clickAddComment_Txt()
    // await playerFunctionPage.clickAddComment_Tab()

    //await playerFunctionPage.validateCommentTab_Elements()

   // await baseFunction.pagination()

    //await playerFunctionPage.validateCommentExpiration()
    console.log('user go throught all pages of comments detailsas expected')

    await  gblFuntSteps.logOut()
    
})

