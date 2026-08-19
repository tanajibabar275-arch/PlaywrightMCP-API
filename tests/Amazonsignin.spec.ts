import { test, expect } from '@playwright/test';

test('Amazon sign-in test', async ({ page }) => {
 /* const environment = (globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }).process?.env;
  const email = environment?.AMAZON_EMAIL;
  const password = environment?.AMAZON_PASSWORD;

  if (!email || !password) {
    throw new Error('Set AMAZON_EMAIL and AMAZON_PASSWORD before running this test.');
  }*/

  await page.goto('https://www.amazon.in');

  await page.getByRole('link', { name: /Hello, sign in Account & Lists/i }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

await page
  .getByRole('textbox', { name: 'Enter mobile number or email' })
  .fill('tanajibabar275@gmail.com');

await page.getByRole('button', { name: 'Continue' }).click();

  //await page.locator('#ap_password').fill(Tanaji@123);


  //await page.locator('input[name="signInSubmit"]').click();

  await expect(page).toHaveTitle(/Amazon Sign In/);
});