import CryptoJS from 'crypto-js'
import * as fs from 'fs'

export function encryptdata(data:string,secretKey:string):string{
    const ciphertext=CryptoJS.AES.encrypt(data,secretKey).toString()
    return ciphertext;
}

export function decryptdata(ciphertext:string,secretKey:string):string{
    
    const decryptpassword=CryptoJS.AES.decrypt(ciphertext,secretKey);

    return decryptpassword.toString(CryptoJS.enc.Utf8);
}

export function writetocsv(country:string,users:string)
{
    const csvfilepath='testoutput/users.csv'
    const timestamp=new Date().toISOString();
    let datatowrite:string

    if(!fs.existsSync(csvfilepath))
    {
        const header='Timestamp,Country,Users\n'
        fs.writeFileSync(csvfilepath,header,{encoding:'utf8'})
    }
    datatowrite=`${timestamp},${country},${users}\n`

    fs.appendFile(csvfilepath,datatowrite,{encoding:'utf8'},(err)=>{
        if(err)
       {
        console.log('Error writng to file',err)
       }
       else
       {
        console.log(`Data appended to ${csvfilepath}`)
       }
    });
}