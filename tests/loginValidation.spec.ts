import { test, expect, Locator } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/loginPage.spec';
interface TestDataRecord {
    id: string;
    username: string;
    password: string;
    // add other fields as needed based on your CSV columns
}

const records = parse(fs.readFileSync('testdata/login.csv'), {
    columns: true,
    skip_empty_lines: true,
}) as TestDataRecord[];

test.describe("Login test",()=>{
for (const recorde of records) {

    test(`${recorde.id} ${recorde.username} @smoke @Loginvalidation Login validation Test`, async ({ page }) => {

        const loginPage=new LoginPage(page)
        dotenv.config();
        await loginPage.loginIntoApplication(
        recorde.username,
        recorde.password,
        process.env.ENCRYPTION_KEY as string
    );

    });

}
})





