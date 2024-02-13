const {test, expect} = require("@playwright/test")

test.beforeEach(async ({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Add/Remove Elements', () => {
    test('Add a new element', async ({ page }) => {
        await page.goto('/add-remove-elements')
        await page.getByRole('button', {name: 'Add Element'}).click()
        await expect(page.getByRole('button', {name: 'Delete'})).toBeVisible()
        await page.getByRole('button', {name: 'Delete'}).click()
    })
    test('Add multiple elements', async ({ page }) => {
        await page.goto('/add-remove-elements')
        await page.getByRole('button', {name: 'Add Element'}).click()
        await page.getByRole('button', {name: 'Add Element'}).click()
        const count = page.getByRole('button', {name: 'Delete'}).count()
        expect(count).toEqual(2)
        await expect(page.getByRole('button', {name: 'Delete'})).toBeVisible()
        await page.getByRole('button', {name: 'Delete'}).click()
    })
    
})
