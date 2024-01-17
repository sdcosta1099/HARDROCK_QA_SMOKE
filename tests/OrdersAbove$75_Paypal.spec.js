import { test, expect } from '@playwright/test';
import { commonSteps } from '../pages/commonSteps.js'
import { playerAction } from '../pages/playerAction.js'

test('Guest User PayPal Buy Now_Orders Under $75', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();

<<<<<<< HEAD
   await pa.
=======
>>>>>>> 22744f9a47181f9ea5286447d0f8d61716ef0e7a
});