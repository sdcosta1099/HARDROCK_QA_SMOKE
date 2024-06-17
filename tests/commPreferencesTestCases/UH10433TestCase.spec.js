import{test, expert} from '@playwright/test';
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))

test('UH-10433 HALO | Comm Preferences | Verify de-selecting "Global Email and Direct Mail Unsubscribe" toggle ', async ({ page }) => {
     

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
    await searchPlayerID.searchPlayerID(testData.commPreferencesTestAccounts.UH10433)
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
    
    console.log('Confirm that the following happens:'
    +'Patron s email is removed from the Master Suppression List' 
    +'Patron has an opt-in value for the preference selected above')

    console.log('Patron can now receive marketing communications in accordance with the re-subscribed selections. as expected')

    await gblFuntSteps.logOut()
  })