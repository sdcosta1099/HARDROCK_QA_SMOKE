const{expect} = require("@playwright/test")
const testData = JSON.parse(JSON.stringify(require("../testData.json")))

exports.administrationSteps = class administrationSteps {


    constructor(page) {

        ///////////////////Administration Page Object Repo ////////////////////////
        this.page= page
        this.administration_tab = page.getByRole('link', { name: 'Administration' })  
        this.reports_tab = page.getByRole('link', { name: 'Reports' });

    }


    ///////////////////Administration Page Functions and methods   ////////////////////////

    async clickAdministration_Tab(){
        try{
            await this.administration_tab.click()

            console.log('Administration page Opens')
        }catch(e){
            console.log('Administration Page not Available ')
        }

    }

    async clickReports_Tab(){
        try{
            await page.setTimeout(3000)
            await this.reports_tab.click()
            await page.setTimeout(5000)
            console.log('Report Tab Opens ')
        }catch(e){
            console.log('Report page NOT Available')
        }
    }

}