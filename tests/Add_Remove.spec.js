const {test, expect} = require("@playwright/test")

test.beforeEach(async ({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Add/Remove Elements', () => {
    test('Input: number', async ({ page }) => {
        
    })
})
