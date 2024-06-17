import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH9779_A| Halo| Patron Dash Board | Assign Comp for Discretionary Comps', async ({ page }) => {

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.CompValidationTestAccounts.UH9779)
    await searchPlayerID.assignCompValidation()    
    await gblFuntSteps.logOut()
} ); 
   