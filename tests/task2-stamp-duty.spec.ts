import { test } from '@playwright/test'
import { StampDutyPage } from '../pages/stampDuty.page'

test.describe('Motor Vehicle Stamp Duty', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/transaction/check-motor-vehicle-stamp-duty')
  })

  test('should calculate stamp duty and show result modal', async ({ page }) => {
    const stampDuty = new StampDutyPage(page)
    await stampDuty.openCalculator()
    await stampDuty.calculateDuty('50000')
    await stampDuty.assertResultVisible()
  })
})
