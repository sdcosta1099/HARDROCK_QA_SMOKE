import { test, expect } from '@playwright/test';
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';
test.setTimeout(120000);

test('Guest User PayPal Buy Now | Bag | Tax exempt |', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.enterItemToSearch('Hard Rock Plush Bear')
    await pa.ClickOnProductSearched()
    await pa.clickOnPDPAddToBag()
    await pa.clickOnMyBag()
    //await pa.clickOnPayPal()
    //await pa.switchToPayPalFrame();
    const [newPage] = await Promise.all([
        //page.waitForEvent('page'),
        page.frameLocator('(//iframe[@title="PayPal"])[1]').getByLabel('Pay with PayPal').click(),
        await page.waitForLoadState(),
        await page.locator("//*[@id='btnNext']").click()
    ]);
    
    //await newWindow.click("//button[@id='btnNext']");
    
    await page.bringToFront();

});
