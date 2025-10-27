  
const {expect } = require("@playwright/test")
const exp = require("constants")
const testData= JSON.parse(JSON.stringify(require("../testData.json")))

 exports.globalFUnctionSteps= class globalFUnctionSteps{

    constructor(page){
        this.page=page
        
        // Halo Login page 
        this.userID_textBox = page.locator('#txtUserame')
        this.password_textBox =  page.locator('#txtPassword')
        this.domainName_textBox = page.locator('#ddlDomain')
        this.submit_Btn = page.getByRole('button', { name: 'Submit' })
        this.cancel_Btn = page.getByRole('button', { name: 'Cancel' })
        this.logOut_Btn= page.getByRole('link', { name: 'Logout' }) 
        this.dashboard_Btn =page.locator('#dashboard')
        this.closeCommentPopUp= page.getByRole('button', { name: 'Close' })
        this.loginHeader_Txt= page.locator('text=LOG IN')
        
        // this.context=  context.close();
        // this.browser=  browser.close();
         
    }
 // Halo QA ENvironmets
    async 
    gotoQALoginPage(){
       
        const envSelection = testData.Environment.EnvSelection
        this.environmentSelection(envSelection)

    }


// Halo PROD ENvironmets
    async gotoPRODLoginPage(){

        const envSelection = testData.Environment.EnvSelection
        this.environmentSelection(envSelection)

}

    // validate Environment selection 

            async environmentSelection(env){
                try{

                    if(env =='QA'){
                        console.log('------------------BEGIN OF QA AUTOMATION TEST EXECUTION-------------------------------')
                        //await this.page.goto('https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/Login.aspx');
                         await this.page.goto(testData.Environment.QA)
                        // await expect(this.page).toHaveTitle('HALO');
                         console.log('Environment selected =  ' +env)
                         console.log('Using QA Environment URL:https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/Login.aspx ')
                       

                    }else 
                    if(env =='PROD'){
                        console.log('------------------BEGIN OF QA AUTOMATION TEST EXECUTION-------------------------------')
                    //await this.page.goto('https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/Login.aspx');
                        await this.page.goto(testData.Environment.PROD)
                    // await expect(this.page).toHaveTitle('HALO');
                        console.log('Environment selected =  ' +env)
                        console.log('Using PROD Environment URL:https://sg24-hawbapp-1.seminolehardrock.fl.local/HaloWebApp/Login.aspx  ')
                       
                    }else

                        if(env =='UAT'){
                            console.log('------------------BEGIN OF UAT AUTOMATION TEST EXECUTION-------------------------------')
                        //await this.page.goto('https://haqasga-wbapp-1.seminolehardrock.fl.local/HaloWebApp/Login.aspx');
                           await this.page.goto(testData.Environment.UAT)
                        // await expect(this.page).toHaveTitle('HALO');
                            console.log('Environment selected =  ' +env)
                            console.log('Using UAT Environment URL: NOT AVAILABLE ')
                           
                    } else( 

                        console.log('NO Environment is selected,   '),
                        console.log('Select a Proper Environment QA, PROD, OR UAT from the TestData Json file ')

                    )
                   
                }catch(e){
                   
                    console.log('test Data Json FIle is not Available')

            }
        }

async softAssertions(webElement, expectedText){
    try{
        await expect(webElement).toContainText(expectedText)
        console.log('Soft Assertion Passed:  ' +expectedText + ' is available as expected ')

    }catch(e){
        console.log('Soft Assertion Failed:  ' +expectedText + ' is NOT available ')
    }

}
    


async hardAssertions(webElement, expectedText){
    try{
        await expect(webElement).toHaveText(expectedText)
        console.log('Hard Assertion Passed:  ' +expectedText + ' is available as expected ')

    }catch(e){
        console.log('Hard Assertion Failed:  ' +expectedText + ' is NOT available ')
        throw new Error('Hard Assertion Failed:  ' +expectedText + ' is NOT available ')
    }
}


    async loginAdminQA(){
        try{
        await this.userID_textBox.click();
        await this.userID_textBox.fill(testData.Credentials.QAuserName);   
        await this.password_textBox.click();
        await this.password_textBox.fill(testData.Credentials.QApassword); 
        await this.domainName_textBox.selectOption('40190');
        await this.submit_Btn.click();
       // await expect(this.page).toHaveText('PLAYER SEARCH');
       await expect(this.page).toHaveTitle('HALO Web Management Application')
        console.log('User is log to Halo QA ADMIN Env')
        }catch (e){
            console.log('Halo Admin login QA Failed')
        }


    }


    async loginAdminPROD(){
        try{
        await this.userID_textBox.click();
        await this.userID_textBox.fill(testData.Credentials.PRODuserName);   
        await this.password_textBox.click();
        await this.password_textBox.fill(testData.Credentials.PRODpassword); 
        await this.domainName_textBox.selectOption('40190');
        await this.submit_Btn.click();
        //await expect(this.page).toHaveText('PLAYER SEARCH');
        await expect(this.page).toHaveTitle('HALO Web Management Application')
        console.log('User is log to Halo PROD ADMIN Env')
        }catch (e){
            console.log('Halo Admin login PROD Failed')
        }


    }



///////////////////////////////////Global Functions and Method////////////////////////////////////////
///////////////All functions and method that are not directly involve with a feature files///////////////
    async loginNonAdminUser(){
        try{
        await this.userID_textBox.click();
        await this.userID_textBox.fill(testData.Credentials.NonAdminUserName);   
        await this.password_textBox.click();
        await this.password_textBox.fill(testData.Credentials.QApassword); 
        await this.domainName_textBox.selectOption('40190');
        await this.submit_Btn.click();
        //await expect(this.page).toHaveText('PLAYER SEARCH');
        await expect(this.page).toHaveTitle('HALO Web Management Application')
        console.log('NON ADMIN User with View Only Permission is log to Halo QA Env')
        }catch (e){
            console.log('NON ADMIN USER login Failed')
        }
    }


    async logOut(){
        try{
            await this.logOut_Btn.click()
            console.log('User logs out as expected')
            console.log('-------------------------END OF QA AUTOMATION TEST EXECUTION -----------------------------------------')
        }catch(e){
            console.log('log Out Btn not available')
        }
    }


    async goToDashboard(){
        try{
            await this.dashboard_Btn.click()
            console.log('User Return to Dashboard')

        }catch(e){
            console.log('Dashboard Btn not available')
        }
    }

        async validatePageHeading(pageRole, pageHeading){
            try{
                await expect(page.getByRole(pageRole, { name: pageHeading })).toBeVisible();
                console.log('Page Header Validated as Expected')
            }catch(e){
            console.log('Page Header not Present')
            }
        }


    async clickCloseCommentPopUp(){
        try{
            this.page.wait(3000)
            if(await this.closeCommentPopUp.isVisible()){ 
                await this.closeCommentPopUp.click()
            console.log('Comment Pop Up Closed as expected')
            
            } 
            
        }catch(e){
            console.log('Comment Pop Up is not Displayed')
        }
    }

    async scrollDownPageBar( ){
        await this.page.evaluate(() => {
            window.scrollBy(0,25)
        });
    }

    async scrollDownPage_toVisibleButton(element){
        try{
           await element.scrollIntoViewIfNeeded()
           //await element.scrollDownPage_toVisibleButton()  
            
            console.log('Scroll to visible Element on the page ')
        }catch(e){
            console.log('Scroll element not visible')
        }
        
    }

          randomName(offerName){
        try{
                let start =10000
                //let finish =9999zzx
                let randomNumber = Math.floor((Math.random() * start))
               // console.log('QA-Automation-' +offerType +'-' +randomNumber)
                let  randomString = ('QA-Automation-' +offerName +'-' +randomNumber)
                console.log('OfferName = ' +randomString)
                return randomString
        }catch(e){
            console.log('Random Offer Name not Created')
        }
        
    }

    async selectFromDropDownVisibleText(elementToLocate, visibleText){
      try {
       
      await  elementToLocate.selectOption({label:visibleText})
       console.log( visibleText +': Selected from DropDown')
       
        }catch(e){
            console.log('DropDown Element not available')
        }
    }

    async selectFromDropDownOptionValue(elementToLocate, value ){
        try {
           
            await  elementToLocate.selectOption({index:value})
            
            console.log( 'Value: ' +value +' Selected Value from DropDown  ')
             
        }catch(e){
                console.log('DropDown Element Value not available')
         }
    }


    async clearFields(locator){
        try{
           await  locator.click()
           await  locator.clear()
            console.log('Field cleared as expected')
        }catch(e){
            console.log('Field to cleared NOT Present')

        }
    }

    async  validatePageHeaders(pageLocator, pageTitle){
         console.log(pageLocator)
       if(pageLocator.isVisible()){
        await expect(pageLocator).toHaveTitle(pageTitle)
        
        
       // .toHaveText(pageTitle) 
            console.log('User navigating page:  ' +pageTitle)
       }else {
            console.log('Page Header '+ pageTitle +' is NOT Available')
            }
    }

    getCurrentDate(){
                     
        try{
            var date = new Date()
            var dateToUse= date.toLocaleDateString() 
        
            console.log('Current date Displays: '+dateToUse)

        return dateToUse

        }catch{
            console.log('Current date is not available')
        }
    }

    getNextDate(day){
        try{
            var d = new Date()

                d.setDate(d.getDate() + day) 
            
            console.log('Next date Displays: '+d)

        return d.toLocaleDateString()

        }catch{
            console.log('Next date is not available')
        }
    }

// this date picker does not include Leap year calculation 

      datePicker(){

            const date = new Date()
            console.log('Date Format:  ' +date)
            var yearDate =    date.getFullYear()
            console.log('year:  ' +yearDate)
            var monthDate = date.getMonth() + 1
            console.log('Month:  ' +monthDate)
            var dayDate = date.getDate()
            console.log('Day:  ' +dayDate)
             

            const fulldatesBefore =  (+monthDate+'/'+dayDate+'/'+yearDate)
            console.log('full Date Before manupulation: ' +fulldatesBefore)
            // case of  December 31 
            if((monthDate == 12) && (dayDate == 31 )){
                dayDate =  1
                monthDate =  1
                yearDate = yearDate + 1
                
                //case of month with 30 days 
            }else if(((monthDate == 4) || (monthDate==6) || (monthDate ==9) || (monthDate==11)) && (dayDate == 30 )){
                      monthDate = monthDate + 1
                      dayDate = 1
                      console.log('print July 1 ')
                      //case of month with 31 days 
            }else if(((monthDate ==1) ||(monthDate ==3) || (monthDate ==5) || (monthDate ==7) || (monthDate ==8) || (monthDate ==10)) && (dayDate ==31 )){
                     monthDate = (monthDate + 1)
                     dayDate = 1
                        console.log('print june 1 ')
                     //case of February 28 ignore lip year
                 } else if((monthDate == 2) && (dayDate == 28 )) {
                     monthDate = monthDate + 1 
                     dayDate = 1
                  }else
                  
                  
                     yearDate = yearDate
                     monthDate = monthDate
                     dayDate =dayDate
                    
                     var  Normaldates =  (+monthDate+'/'+dayDate+'/'+yearDate)

                  
                     console.log('Final Date Manupulation: ' +Normaldates)
                     
                      return Normaldates
                 
                     
                    //console.log('Full Dates After Manupulation: ' +fulldates)
                      
            console.log('Date entered as expected')

          
          

    }

                async readDataFromFile(){

                    //try{
                                console.log('User is uploading file to system')
                            // await page.waitForTimeout(3000)           
                                await  page.locator('#ctl00_ContentPlaceHolder1_ctrlInvitationDetails_flUpload').setInputFiles('dataFiles\resources\config\CSVs_Uploading\Inviteelist-TestSegment1.csv')
                            // await page.waitForTimeout(5000) 
                            // expect(await page.locator('#ctl00_ContentPlaceHolder1_ctrlInvitationDetails_flUpload')).toHaveText('Inviteelist-TestSegment2.1.csv')
                                console.log('File Uploaded as expeted')
                                await this.page.waitForTimeOut(5000)
                // }catch(e){
                // console.log('File NOT Uploaded  ')
                        
                //}

            }


    async removeUploadedFiles(inputFile){
        try{
        await this.page.locator('filePathToremove').setInputFiles([])
        await this.page.waitForTimeOut(3000)
        expect(await this.page.locator('#filetoRemove')).toHaveText('No FIle Found')
        console.log('File removed as expected')
        }catch(e){
            console.log('No file to remove')
        }

    }   

    async getPageTitle(pageTitle){

        //try{
            const getPageTitle = await this.page.title()
            expect(getPageTitle).toHaveTitle(pageTitle)
            console.log('Page Title Display as expected: ' +getPageTitle)

        //}catch(e){
          //  console.log('Page Title not available ')
        //}
    }

    async  masterlistofItems(master, rows, path) {
        try {
          if (master.toLowerCase() === "yes") {
            hardWait(3);
            let listitem = getData3(rows, path);
            click(bySaveAndNextButton);
            return listitem;
          }
          hardWait(3);
          click(bySaveAndNextButton);
          return null;
        } catch (error) {
          throw error;
        }
      }


      async  getData3(count, filePath) {
        const csvFile = filePath;
        let br = null;
        let line = "";
        const csvSplitBy = ",";
      
        // create an array for each column
        const column1 = [];
        const column2 = [];
        const column3 = [];
        const column4 = [];
        const column5 = [];
      
        try {
          br = await new Promise((resolve, reject) => {
            const reader = require('fs').createReadStream(csvFile, 'utf8');
            reader.on('error', reject);
            resolve(reader);
          });
      
          let rowCount = 0; // variable to track the number of rows read
          for await (let line of br) {
            if (rowCount > count) break;
      
            // split the line by the comma separator
            const data = line.split(csvSplitBy);
            await hardWait(3);
      
            // add the values to the corresponding arrays
            column1.push(data[0]);
            column2.push(data[1]);
            column3.push(data[2]);
            column4.push(data[3]);
            column5.push(data[4]);
      
            rowCount++;
          }
      
          await hardWait(3);
          await processData(column1, column2, column3, column4, column5);
          await hardWait(3);
        } catch (e) {
          console.error(e);
        } finally {
          if (br !== null) {
            await new Promise((resolve, reject) => {
              br.on('error', reject);
              br.on('close', resolve);
              br.destroy();
            });
          }
        }
      
        return column1;
      }
      
      async hardWait(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
      }
      
      async   processData(column1, column2, column3, column4, column5) {
        // Process the data as needed
      }
      
 }

    
     
