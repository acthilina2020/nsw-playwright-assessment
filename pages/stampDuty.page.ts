import { Page, Locator, expect } from '@playwright/test'

export class StampDutyPage {
    readonly page: Page
    readonly checkOnlineBtn: Locator
    readonly yesRadioLabel: Locator
    readonly yesRadioInput: Locator
    readonly vehicleValueInput: Locator
    readonly calculateBtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.checkOnlineBtn = page.getByRole('button', { name: /check online/i })
        this.yesRadioLabel = page.locator('label[for="passenger_Y"]')
        this.yesRadioInput = page.locator('#passenger_Y')
        this.vehicleValueInput = page.locator('#purchasePrice')
        this.calculateBtn = page.getByRole('button', { name: 'Calculate' })
    }

    async openCalculator() {
        await this.checkOnlineBtn.click()
        await expect(this.page).toHaveURL(/apps09\.revenue\.nsw\.gov\.au\/erevenue\/calculators\/motorsimple\.php/)
        await expect(this.calculateBtn).toBeVisible()
    }

    async calculateDuty(amount: string) {
        await this.yesRadioLabel.click()
        await expect(this.yesRadioInput).toBeChecked()
        await this.vehicleValueInput.fill(amount)
        await this.calculateBtn.click()
    }

    async assertResultVisible() {
        const modal = this.page.locator('.modal-dialog')
        // Modal container visible
        await expect(modal).toBeVisible()
        // Title assertion
        await expect(modal.locator('.modal-title')).toHaveText('Calculation')
        // Body heading assertion
        await expect(modal.getByRole('heading', { name: /motor vehicle registration/i })).toBeVisible()
        // alert section is visible
        await expect(modal.locator('[role="alert"]')).toBeVisible()
        // value is present
        await expect(modal).toContainText(/\$[0-9,]+(\.\d{2})?/)
    }
}
