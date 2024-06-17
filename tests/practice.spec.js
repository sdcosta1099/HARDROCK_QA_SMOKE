import{test, expect} from '@playwright/test'
import{globalFUnctionSteps}from '../testSteps/gobalFunctionsSteps'
import{playerSearchSteps}from '../testSteps/playerSearchSteps'
import {configurationSteps } from '../testSteps/configurationSteps';
import { config } from 'process';
import { promises } from 'dns';

 
const testData= JSON.parse(JSON.stringify(require("../testData.json")))
test('Functions Test', async ({ page }) => {
     //  test.slow();

    const gblFuntSteps = new globalFUnctionSteps(page)
    const searchPlayerID= new playerSearchSteps(page)
    const configSteps = new configurationSteps(page)

    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()


    const offerName = 'QA-Automation-UH9670-3432'

     await configSteps.editOpenOffer(offerName)
    // await page.getByRole('button', { name: 'Save & Next Step' }).click({timeout:5000});
     //await configSteps.goToInternalAttachmentsPage({timeout:5000})
    //await configSteps.viewOpenOffer(offerName)
   // await configSteps.goToSummaryPafePage({timeout:10000})
    await configSteps.approvedOpenOffer(offerName)
   //await configSteps.checkInEventAndOffer(offerName)
   // await configSteps.deactivateOffer(offerName)
    
/*

    const offerName = 'QA-Automation-UH9655-2775'

    await page.getByRole('button', { name: 'Events & Offers Search' }).click();
     await page.locator('#ctl00_txtEventsOfferName').fill(offerName);
     await page.locator('#ctl00_ddlEventsOfferStatus').selectOption('3');
     await page.getByRole('button', { name: 'Search', exact: true }).click();
     await page.locator('#imgbtnViewEventsOfferOps').first().click();
     await page.getByRole('button', { name: 'Edit' }).click();
      await page.waitForTimeout(3000)
 
 
   await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_1_lnkConfigure').click();
   await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_btnAddAllPrimaryPrize').click();
   await page.getByRole('button', { name: 'Update' }).click();

   
   await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_2_lnkConfigure').click();
   await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_btnAddAllPrimaryPrize').click();
   await page.getByRole('button', { name: 'Update' }).click();
   await page.getByRole('button', { name: 'Save & Next Step' }).click();
   await page.getByRole('button', { name: 'Save & Next Step' }).click();
   await page.getByRole('button', { name: 'Save & Next Step' }).click();
   await page.getByRole('button', { name: 'Submit for Review' }).click();
   await page.getByRole('button', { name: 'Close' }).click();

   console.log(' segment done ')



   await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferPageState').selectOption('0');
   await page.locator('#ctl00_ContentPlaceHolder1_txtEventsOfferDisplayName').click();
   await page.locator('#ctl00_ContentPlaceHolder1_txtEventsOfferDisplayName').fill('offerName');
   await page.getByRole('button', { name: 'Search' }).click();
   await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferPageState').selectOption('3');
   await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferView').selectOption('3');
   await page.getByRole('button', { name: 'Search' }).click();
   await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferPageState').selectOption('0');
   await page.getByRole('button', { name: 'Search' }).click();
   await page.locator('#imgbtnViewEventsOfferOps').click();
   await page.getByRole('button', { name: 'View' }).click();
   await page.getByRole('button', { name: 'Approve Offer' }).click();
   await page.getByRole('button', { name: 'Close' }).click();
   await page.locator('#ctl00_ContentPlaceHolder1_txtEventsOfferDisplayName').click();
   await page.locator('#ctl00_ContentPlaceHolder1_txtEventsOfferDisplayName').fill('QA-Automation-UH9655-4702');
   await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferView').selectOption('3');
   await page.getByRole('button', { name: 'Search' }).click();
   await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferPageState').selectOption('0');
   await page.getByRole('button', { name: 'Search' }).click();
   await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferPageState').selectOption('3');
   await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferView').selectOption('0');
   await page.getByRole('button', { name: 'Search' }).click();
   await page.locator('#imgbtnViewEventsOfferOps').click();
   await page.getByRole('button', { name: 'Deactivate' }).click();
   await page.getByRole('button', { name: 'Confirm' }).click();
   await page.getByRole('button', { name: 'OK' }).click();
   await page.getByRole('link', { name: 'Go To Employee Dashboard' }).click();
 
















    /*
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
   //await page.pause()
    const offerName = 'QA-Automation-UH9655-4702'
    await page.getByRole('button', { name: 'Events & Offers Search' }).click();
    await page.locator('#ctl00_txtEventsOfferName').fill(offerName);
    await page.locator('#ctl00_ddlEventsOfferStatus').selectOption('3');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.locator('#imgbtnViewEventsOfferOps').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
     await page.waitForTimeout(3000)





     
 /*
 
     //GO To Segments Section  for above offer
   
     await page.getByRole('button', { name: 'Events & Offers Search' }).click();
    await page.locator('#ctl00_txtEventsOfferName').fill(offerName);
    await page.locator('#ctl00_ddlEventsOfferStatus').selectOption('3');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.locator('#imgbtnViewEventsOfferOps').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
     await page.waitForTimeout(3000)
     // segmnet 1 item
    await page.pause();
      configSteps.goToSegmentsPage(1)
   
     await page.waitForTimeout(3000)
     await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_1_lnkConfigure').click();
       await page.waitForTimeout(5000)
      await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_btnAddAllPrimaryPrize').click();
      await page.waitForTimeout(3000)
      await page.getByRole('button', { name: 'Update' }).click();
      await page.waitForTimeout(8000)

      //await page.getByRole('button', { name: 'Save & Next Step' }).click();   or 
      // or configure 2 item 
      await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_wdgManageOfferSegment_it7_2_lnkConfigure').click();
      await page.waitForTimeout(3000)
      await page.locator('#ctl00_ContentPlaceHolder1_ctrlSegments_btnAddAllPrimaryPrize').click();
      await page.waitForTimeout(5000)
      await page.getByRole('button', { name: 'Update' }).click();
      await page.waitForTimeout(8000)
     await page.getByRole('button', { name: 'Save & Next Step' }).click();
    

    await page.waitForTimeout(10000)
    await page.getByRole('button', { name: 'Save & Next Step' }).click();
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Save & Next Step' }).click();
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Save & Next Step' }).click();
    await page.waitForTimeout(3000)
    //await page.locator('#ctl00_ContentPlaceHolder1_ctrlSummary_lblOfferDisplayName').click();
    await page.getByRole('button', { name: 'Submit for Review' }).click();
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Close' }).click();
   // await page.waitForTimeout(3000)
/*

 /*
    /////////////////////Check In  offer///////////////////////////////
  
  await page.getByRole('link', { name: 'Go To Employee Dashboard' }).click();
  await page.getByRole('button', { name: 'Events & Offers Search' }).click();
  await page.locator('#ctl00_txtEventsOfferName').click();
  await page.locator('#ctl00_txtEventsOfferName').fill(offerName);
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('#imgbtnViewEventsOfferOps').click();
  await page.getByRole('button', { name: 'Deactivate' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Go To Employee Dashboard' }).click();
   
*/


 /*
    /////////////////////Approve offer///////////////////////////////
  
  await page.getByRole('link', { name: 'Go To Employee Dashboard' }).click();
  await page.getByRole('button', { name: 'Events & Offers Search' }).click();
  await page.locator('#ctl00_txtEventsOfferName').click();
  await page.locator('#ctl00_txtEventsOfferName').fill(offerName);
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('#imgbtnViewEventsOfferOps').click();
  await page.getByRole('button', { name: 'Deactivate' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Go To Employee Dashboard' }).click();
   
*/


 
  /*
    /////////////////////deactivate offer///////////////////////////////
  
  await page.getByRole('link', { name: 'Go To Employee Dashboard' }).click();
  await page.getByRole('button', { name: 'Events & Offers Search' }).click();
  await page.locator('#ctl00_txtEventsOfferName').click();
  await page.locator('#ctl00_txtEventsOfferName').fill(offerName);
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('#imgbtnViewEventsOfferOps').click();
  await page.getByRole('button', { name: 'Deactivate' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Go To Employee Dashboard' }).click();
   
*/
  
 


})