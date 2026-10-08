import { test, expect } from "@playwright/test";

test("login", async ({ request }) => {


    //const response=await request.get('https://testapps.aquilasoftware.com/');


    const login = await request.post('https://testapps.aquilasoftware.com/loginaction.action',
        {
            form: {
                "userBean.catererId": "caterxperttest",
                "userBean.userName": "superadmin",
                "userBean.password": "Test2025#"
            }
        })
    //const tagsResponceJson=await login.json()
    expect(login.status()).toEqual(200);
    console.log(login)

   console.log("Status:", login.status());

    const responseBody = await login.text();

 console.log(responseBody);
    
    expect(login.status()).toBe(200);

    const match1 = responseBody.match(
        /name="SessionID"\s+value="([^"]*)"/
    );

    const sessionId = match1?.[1];

    console.log("Session ID:", sessionId);

    expect(sessionId).toBeTruthy();


const match = responseBody.match(
  /document\.forms\[0\]\.action\s*=\s*"([^"]+)"/
);

const authUrl = match?.[1];

console.log("Auth URL:", authUrl);


const auth = await request.post(authUrl!, {
  form: {
    "CatererID": "caterxperttest",
    "SessionID": sessionId!,
    // ...
  }
});

})