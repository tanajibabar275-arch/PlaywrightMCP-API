import { test, expect } from '@playwright/test';

test('search for T-shirts and verify the product appears in the results', async ({ page }) => {
  await page.goto('https://automationpractice.techwithjatin.com/', { waitUntil: 'domcontentloaded' });

  const searchInput = page.locator('input[name="search_query"]').first();
  await expect(searchInput).toBeVisible();
  await searchInput.fill('T-shirts');

  const searchButton = page.locator('button[type="submit"]').filter({ hasText: /Search|submit/i }).first();
  await searchButton.click();

  const result = page.getByText(/Faded Short Sleeves T-shirt/i).first();
  await expect(result).toBeVisible();
  await expect(page.locator('body')).toContainText(/Faded Short Sleeves T-shirt/i);
});
