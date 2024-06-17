import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH9599 Halo | Player Function | Player Tier with Tier Match | Adjust Player Tier Level (Tier Match)  ', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const plFunction = new playerFunctionsSteps(page)
    
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.PlayerFunctionTestAccounts.UH9599)
    await plFunction.clickPlayerFunctions_Tab()
     
    
    //await gblFuntSteps.logOut()
  });