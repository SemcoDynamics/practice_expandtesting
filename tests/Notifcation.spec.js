const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('/')
})

test.describe('Notification', () => {
    test('Success message', async ({ page }) => {
        await page.goto('/notification-message-rendered')
        await page.locator('a[href="/notification-message"]').click()
        const successAlert = page.getByRole('alert', {hasText: 'Action successful'})
        await expect(successAlert).toHaveText('Action successful')
    })
    
})

