import { test, expect } from '@playwright/test';
import { commonSteps } from '../pages/commonSteps.js'
import { playerAction } from '../pages/playerAction.js'

test('Guest User PayPal Buy Now_Orders Under $75', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();

});