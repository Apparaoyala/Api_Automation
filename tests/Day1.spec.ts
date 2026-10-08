import{test,expect} from '@playwright/test'

test('Get test tags',async({request})=>{

const tagsResponse=await request.get('https://conduit-api.bondaracademy.com/api/tags')
const tagsResponceJson=await tagsResponse.json()
expect(tagsResponse.status()).toEqual(200);
 expect(tagsResponceJson.tags[0]).toEqual('Test')
 expect(tagsResponceJson.tags.length).toBeLessThanOrEqual(10)
console.log(tagsResponceJson)
console.log(tagsResponse.status())

//post request
const T1Response=await request.post('https://conduit-api.bondaracademy.com/api/users/login',
{
    data:{"user":{"email":"pwapiuser@test.com","password":"Welcome"}}
})


const tokenResponseJson=await T1Response.json()

const AuthToken=tokenResponseJson.user.token

console.log(AuthToken)
});