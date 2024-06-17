import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{administrationSteps}from '../../testSteps/administrationSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-16866 Halo | Visit Appeasement |  Visit Appeasement added in Report search by Date in HAlo  ', async ({ page }) => {
     

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
