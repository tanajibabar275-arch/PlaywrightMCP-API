import { test, expect } from '@playwright/test';
import users from './users.json';

for (const user of users) {
  test(`Create user ${user.name}`, async ({ request }) => {
    const response = await request.post(
      'https://dummy.restapiexample.com/api/v1/create',
      {
        data: user
      }
    );

    expect(response.status()).toBe(200);

 const apiresonse= await response.json()
 console.log(apiresonse)
 
  });
}