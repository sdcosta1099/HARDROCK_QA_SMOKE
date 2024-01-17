import { test, expect } from '@playwright/test';
test.setTimeout(120000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('View Category Tiles', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)
    await common.goToHALOShop();
    await common.closeHolidayDealsPopup()

  await page.locator('(//a[@id="men"])[1]').hover();
  await page.getByRole('img', { name: 'Men image' }).isVisible();
  await page.getByRole('menu').locator('#men_jackets').click();
  await page.locator('(//a[@id="women"])[1]').hover();
  await page.getByRole('img', { name: 'Women image' }).isVisible();
  await page.getByRole('menu').getByText('Winter Essentials For Women').click();

       
});