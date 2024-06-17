const { randomInt } = require("crypto")

exports.baseFunction = class baseFunction{


constructor (page){
    this.page= page
    this.closeCommentPopUp = page.frameLocator('#ifrContent').getByText('Legend', { exact: true })


}
 async readDataFromFile(inputTestCase ){

            try{

                await this.page.locator('#fileToUpoadPath')
                        .setInputFiles(['tests/uploadFile/files1.pdf'])
                        await this.page.waitForTimeOut(1000)
                        expect(await this.page.locator('#fileToUpload')).toHaveText('FIlename.txt')

        }catch(e){
            console.log('File not read')
                
        }

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


   

}