import{test, expect} from '@playwright/test';
// import{configurationSteps} from '../../testSteps/configurationSteps'
import {globalFUnctionSteps } from '../testSteps/gobalFunctionsSteps';
import { configurationSteps } from '../testSteps/configurationSteps';
//import{playerSearchSteps}from '../../testSteps/playerSearchSteps'
import{Locator} from '@playwright/test'
import { config } from 'process';


//const testData= JSON.parse(JSON.stringify(require("../../testData.json")))


test.skip(' clean Up All Automation Offers ', async ({ page }) => {
     
     const gblFuntSteps = new globalFUnctionSteps(page)
    // const searchPlayerID= new playerSearchSteps(page)
     const configSteps= new configurationSteps(page)
    //generate random Offer name
    
                    
    const offerName ='QA-Automation'

    //login steps
    await gblFuntSteps.gotoQALoginPage()
    await gblFuntSteps.loginAdminQA()
     
  await page.getByRole('link', { name: 'Configuration' }).click();
  await page.getByRole('link', { name: 'Events & Offers' }).click();
  await page.getByRole('link', { name: 'Manage Events And Offers' }).click();

  await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferView').selectOption('3');
  await page.locator('#ctl00_ContentPlaceHolder1_txtEventsOfferDisplayName').click();
  await page.locator('#ctl00_ContentPlaceHolder1_txtEventsOfferDisplayName').fill('QA-Automation');
//   await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#ctl00_ContentPlaceHolder1_ddlEventsOfferPageState').selectOption('0');

  await page.getByRole('button', { name: 'Search' }).click({timeout:2000});
  await page.getByRole('row', { name: 'QA-Automation'}).locator('#imgbtnViewEventsOfferOps').click({timeout:2000});
//   await page.pause()

//   await page.locator('#imgbtnViewEventsOfferOps').click({timeout:20000});

  
  //await page.getByRole('row', { name: 'QA-Automation-UH-10551-9505 Special Event 10/09/2025 10/10/2025 Draft HR Casino, Hollywood TU_LAB_HALO_NIN_ADM', exact: true }).locator('#imgbtnViewEventsOfferOps').click();
  await page.getByRole('button', { name: 'Deactivate' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  console.log('Offer deactivated')

    

})