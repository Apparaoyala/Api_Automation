import { test, expect } from '@playwright/test';

test('has title', async ({ request }) => {

    const tagResponse = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    const tagResponseJson = await tagResponse.json()
    expect(tagResponse.status())
        .toEqual(200)
    console.log(tagResponseJson)




});

