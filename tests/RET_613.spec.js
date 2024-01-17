import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('View Preview of Item Names and Images', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

    
    await pa.clickOnItemToSearchBox()
    await pa.enterItemKeyWordToSearch('Guitar Sha')
    await pa.validateDoYouMeanSuggestion()
    await pa.selectProductUnderDoYouMeanSuggestion()
    await pa.validateSearchResultDisplayed()
    await pa.validateResultBasedOnKeywordResultFor()
    await pa.validateProductTitle()
    await pa.clickOnGuitarShapedGrillSpatulaDisplaycaseUnderProductTitle()
    await pa.validateProductDetailPageDisplayed()
    await pa.validateContainCategoryBrandDisplayedWithImage() 
    await pa.clickOnSearchResultUnderCategory_PINS()
    await pa.validateProductListingPageDisplayed()
   
});