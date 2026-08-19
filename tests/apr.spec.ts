import {expect,Locator,request,test} from '@playwright/test';

test('api request ', async ({ request }) => {
  
    const response= await request.post('https://dummy.restapiexample.com/api/v1/create',

{
    data: {
        
    "name":"test",
    "salary":"123",
    "age":"23"
}
    }
)

expect(response.status()).toBe(200);
const jsonresponse= await response.json();
console.log(jsonresponse)

}



    )

