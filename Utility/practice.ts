import CryptoJS from 'crypto-js'
import * as fs from 'fs'
export function encryptData(data:string,secretkey:string)
{
    const ciphertext=CryptoJS.AES.encrypt(data,secretkey).toString()
    return ciphertext;
}

export function decryptData(ciphertext:string,secretKey:string)
{
    const encrptdata=CryptoJS.AES.decrypt(ciphertext,secretKey)
    return encrptdata.toString(CryptoJS.enc.Utf8)
}

export function writetocsv(country:string,users:string){
const timestamp=new Date().toISOString()
const csvfilepath="../testdata/users.csv"
let datatowrite:string

if(!(fs.existsSync(csvfilepath)))
{
   const header='Timestamp,country,Users\n'
   fs.writeFileSync(csvfilepath,header,{encoding:'utf-8'})
}

datatowrite=`${timestamp},${country},${users}\n`

fs.appendFile(csvfilepath,datatowrite,{encoding:'utf-8'},(err)=>{

if(err)
{console.log("date not writtern")}
    
else
{console.log("date  writtern")}
 
})


}

