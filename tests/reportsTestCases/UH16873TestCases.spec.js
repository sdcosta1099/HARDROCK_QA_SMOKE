import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{administrationSteps}from '../../testSteps/administrationSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-16873 Halo | Visit Appeasement | Report search by All Properties', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const admPage = new administrationSteps(page)
    

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await admPage.clickAdministration_Tab()
    //await page.pause()
    await admPage.clickReports_Tab()

    await gblFuntSteps.logOut()
     
    //await page.pause()
})
