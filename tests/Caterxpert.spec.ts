import { test, expect } from "@playwright/test";

test("login", async ({ request }) => {


    //const response=await request.get('https://testapps.aquilasoftware.com/');


    const login = await request.post('https://testapps.aquilasoftware.com/loginaction.action',
        {
            data: { "user": { "caterid": "caterxperttest", "userid": "superadmin", "password": "Test2025#" } }
        })
    //const tagsResponceJson=await login.json()
    expect(login.status()).toEqual(200);
    console.log(login)

    //console.log(tagsResponceJson)

})