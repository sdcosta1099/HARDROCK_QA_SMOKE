import { test, expect } from '@playwright/test';
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('Login to HALO application', async ({ page }) => {
    const common = new commonSteps(page)
    const pa = new playerAction(page)

    await common.goToHALO()
    await common.loginAndSubmit('TU_LAB_HALO_NIN_ADM', 'Password01@$')
    await common.logout()

});

