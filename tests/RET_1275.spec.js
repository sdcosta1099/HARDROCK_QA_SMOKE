import { test, expect } from '@playwright/test';
test.setTimeout(8000000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Validate Live Chat', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

await pa.hoverOnCategoryPINS()
await pa.clickOnSubCategoryOnlineExclusivePins()
await pa.open_live_chat()
await pa.select_livechat_option_from_dropdown()
await pa.type_message_in_live_chat_textbox("Testing Live Chat")
await pa.submit_chat_message()
await pa.hoverOnCategoryPINS()
await pa.clickOnSubCategoryOnlineExclusivePins()
await page.waitForTimeout(10000);
await pa.validate_LiveChat_is_Active()
await page.waitForTimeout(5000);
await pa.end_livechat_and_close()

});
