import {test,expect} from "@playwright/test";

test('putrequest',async({request})=>{
const Base_Url="https://restful-booker.herokuapp.com/booking";

    const responce=await request.get('${Base_Url}');

    const body=await responce.json();

    console.log(body);

})