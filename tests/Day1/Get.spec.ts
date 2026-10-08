import{test,expect}from '@playwright/test'
test('post request',async({request})=>{


    const BASE_URl ='https://restful-booker.herokuapp.com';

    // const response=await request.get(`${BASE_URl}booking`);
    // const body=await response.json;
    // console.log(body)


const response = await request.post(`${BASE_URl}/booking`,{

data:{
    "firstname": "Rock",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-10-07",
        "checkout": "2026-10-07"
    },
    "additionalneeds": "Breakfast"
}




});
 const rbody= await response.json();

console.log(rbody)




})


 

    const response =await request.get('https://restful-booker.herokuapp.com/booking/14');

    const body=await response.json();
    console.log(body);

})


test('post request',async({request})=>{


    const BASE_URL = 'https://restful-booker.herokuapp.com';

    const 
})