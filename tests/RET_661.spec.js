import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Click to Checkout - Login', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    await pa.hoverOnCategoryPINS()
    await pa.clickOnSubCategoryOnlineExclusivePins()
    await pa.clickOnProductMessiLimitedEditionPin()
    await pa.clickOnAddToBag()
    await pa.clickOnMyBag()
    await pa.clickOnCheckOut()
    await pa.validateCheckOutPageDisplayed()
    //await pa.enterEmailAddress('test@yopmail.com')
    await pa.validateAlreadyUnityMemberDisplayedOnCheckOutPage()
    await pa.validateSignInDisplayedOnCheckOutPage()
    await pa.validateSighUpDisplayedOnCheckOutPage()
    await pa.clickOnSignIn()
    await pa.validateWindowUnityCredentialsIsDisplayed()
    
    
    
   
});