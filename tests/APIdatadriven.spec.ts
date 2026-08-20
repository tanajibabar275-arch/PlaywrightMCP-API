
import { test, expect } from "@playwright/test";
// Require JSON at runtime to avoid TypeScript "Cannot find module" errors
// when JSON module resolution isn't enabled in tsconfig.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const testData: any = require("./testData.json");

for (const data of testData) {
  test(`Check user ${data.userId}`, async ({ request }) => {
    const response = await request.get(
      `https://jsonplaceholder.typicode.com/users/${data.userId}`
    );

    expect(response.status()).toBe(data.expectedStatus);

    const json = await response.json();

    expect(json.name).toBe(data.expectedName);
  });
}