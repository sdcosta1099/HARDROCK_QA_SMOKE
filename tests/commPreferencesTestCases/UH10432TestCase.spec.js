import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10432 HALO | Comm Preferences | Verify selecting "Global Email and Direct Mail Unsubscribe" toggle', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10432)
    //await page.pause()
    await searchPlayerID.clickCommPreferences_btn()
    await searchPlayerID.clickGloblaPreferences_Tab()  

    await searchPlayerID.clickToggleGlobalEmailDirectMail_Btn()
    await searchPlayerID.clickNoConfirm_PopUp()
    await searchPlayerID.clickToggleGlobalEmailDirectMail_Btn()
    await searchPlayerID.clickYesConfirm_PopUp()
    await searchPlayerID.clickClocseConfirm_PopUp()
     
    const element = page.frameLocator('#ifrContent').getByRole('button', { name: 'Save' })
    await gblFuntSteps.scrollDownPage_toVisibleButton(element)
    await searchPlayerID.clickSaveGlobalPreferences()
     
    console.log('Validate the following 2 steps in Unity')
    console.log('1: Confirm that the following happens:'
    +'Patrons email status changes from "S" to "U".'
    +'Patrons email is added to the Master Suppression List.')
    console.log('2: Patron no longer receives Marketing Communications emails.')

    await gblFuntSteps.logOut()
  })