import { test, expect } from '@playwright/test';

test("@smoke @apitest API test scenatio",async({request})=>{
const response=await request.get('https://www.saucedemo.com/manifest.json')
const responseObject=await response.json()
console.log(responseObject)
expect(responseObject.name).toEqual('Swag Labs')
expect(responseObject.short_name).toEqual('Swag Labs')

})

test("@smoke @apitest url reponse check",async({request})=>{
const apiUrl='https://www.saucedemo.com/'    
const response=await request.get(apiUrl)
expect((response).status()).toBe(200) 


})