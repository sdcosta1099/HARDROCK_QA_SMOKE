import{test, expect} from '@playwright/test';
import{configurationSteps} from '../../testSteps/configurationSteps'
import{globalFUnctionSteps}from '../../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{Locator} from '@playwright/test'
import { config } from 'process';
 
 
const testData= JSON.parse(JSON.stringify(require("../../testData.json")))


test('UH-9436   HALO | Configuration | Events&Offers | Quick Offers | Copy a Quick Offer', async ({ page }) => {
     
  //test staus , failling due to 
  test.setTimeout(120000);
  const gblFuntSteps = new globalFUnctionSteps(page)
  const searchPlayerID= new playerSearchSteps(page)
  const configSteps= new configurationSteps(page)
  
  //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()

    //generate random Offer name
    const quickOfferName = gblFuntSteps.randomName('Quick-Offer-UH9436')
    const invitationFilePath = 'dataFiles/resources/config/CSVs_Uploading/Inviteelist-TestSegment2.csv'
    console.log('Quick Offer Name: ' +quickOfferName)

    await configSteps.goToManageQuickOffer_Page() 
     
    //set up Quick Offer Page
    await configSteps.goToQuickOfferSetUpPage(quickOfferName, 'Legend')
  
    //await page.pause()
    await page.waitForTimeout(5000)
    await configSteps.goToInvitationPage(invitationFilePath)
    await configSteps.goToSummary_QO_Tab()
    await configSteps.clickCopy_QO(quickOfferName)

    await configSteps.clickBackToListing_Btn()
    await configSteps.leaveBackToListing_Btn.click()
    await configSteps.clickCopy_QO(quickOfferName)
    await configSteps.clickSaveAndNext_Btn()
    await configSteps.clickSaveAndNext_Btn()
    await configSteps.goToSummary_QO_Tab()
    await configSteps.clickEdit_QO(quickOfferName)

    await configSteps.quickOfferSetup_Tab.click()

    await configSteps.displayProperty_QO_DropDown.clear()
    await configSteps.displayProperty_QO_DropDown.fill('Hard Rock New York',{timeout:5000})
    await configSteps.displayProperty_QO_DropDown.press('Enter') 
    await configSteps.clickSaveAndNext_Btn()
    await configSteps.clickSaveAndNext_Btn()
    await configSteps.clickEdit_QO(quickOfferName)

    await page.waitForTimeout(5000)
    await configSteps.clickDeactivate_QO(quickOfferName)
  
  
    await gblFuntSteps.logOut()

  })
