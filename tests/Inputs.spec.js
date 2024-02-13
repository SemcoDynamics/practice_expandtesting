const {test, expect} = require("@playwright/test")

test.beforeEach(async ({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Web inputs', () => {
    test('Input: number', async ({ page }) => {
        const numValue = "100"
        await page.goto("/inputs")
        await page.locator('#input-number').fill(numValue)
        //Clicks Display inputs button
        await page.getByRole("button", {name: "Display Inputs"}).click()
        await expect(page.locator('#output-number')).toHaveText(numValue)
        await page.getByRole("button", {name: "Clear Inputs"}).click()
        const outputVisible =  await page.getByLabel('Output: Number').isVisible()
        expect(outputVisible).toBe(false)
    })
    test('Input: Text', async ({ page }) => {
        const textValue = "My Name Jeffery"
        await page.goto("/inputs")
        await page.locator('#input-text').fill(textValue)
        //Clicks Display inputs button
        await page.getByRole("button", {name: "Display Inputs"}).click()
        await expect(page.locator('#output-text')).toHaveText(textValue)
        await page.getByRole("button", {name: "Clear Inputs"}).click()
        const outputVisible =  await page.getByLabel('Output: Text').isVisible()
        expect(outputVisible).toBe(false)
})
    test('Input: Password', async ({ page }) => {
        const passValue = "ABC!@#123"
        await page.goto("/inputs")
        await page.locator('#input-password').fill(passValue)
        //Clicks Display inputs button
        await page.getByRole("button", {name: "Display Inputs"}).click()
        await expect(page.locator('#output-password')).toHaveText(passValue)
        await page.getByRole("button", {name: "Clear Inputs"}).click()
        const outputVisible =  await page.getByLabel('Output: Password').isVisible()
        expect(outputVisible).toBe(false)
    })
})
