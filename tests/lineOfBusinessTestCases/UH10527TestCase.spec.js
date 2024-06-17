import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{playerFunctionsSteps}from '../../testSteps/playerFunctionsSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH10527 Change LOB and Validate Player transaction in Halo', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const plFunction = new playerFunctionsSteps(page)
    
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.LineOfBusinessTestAccounts.UH10527)
    await plFunction.clickPlayerFunctions_Tab()
    await plFunction.clickLineOfBusiness_Tab()
    
    //await gblFuntSteps.logOut()
  });