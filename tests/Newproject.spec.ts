import { test, expect} from '@playwright/test';


test('search for T-shirts and verify the product appears in the results', async ({ page }) => {

await page.goto("https://www.amazon.in/")
page.waitForTimeout(6000)

//await expect(page).toHaveTitle(/Amazon.in/)

await page.locator('input[name="site-search"]').fill("T-shirts") 
await page.waitForTimeout(60000)
await page.locator('input[name="site-search"]').press("Enter")
await page.waitForLoadState("domcontentloaded")
await expect(page.locator('span.a-size-medium.a-color-base.a-text-normal')).toContainText(/T-shirts/i)
await page.screenshot({ path: 'screenshot.png' })


}  )