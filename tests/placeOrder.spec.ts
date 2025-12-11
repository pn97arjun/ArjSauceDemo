import { test, expect, Locator } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/loginPage.spec';
import { ProdutsPage } from '../pages/productsPage.spec';
import { CartPage } from '../pages/cartPage.spec';
import { CheckoutPage } from '../pages/checkoutPage.spec';
import { CheckoutReviewPage } from '../pages/checkoutReviewPage.spec';
import { OrderConfirmationPage } from '../pages/orderConfrimationPage.spec';


interface TestDataRecord {
    id: string;
    username: string;
    password: string;
    product:string;
    firstname:string;
    lastname:string;
    zipcode:string;
    // add other fields as needed based on your CSV columns
}

const records = parse(fs.readFileSync('testdata/placeorder.csv'), {
    columns: true,
    skip_empty_lines: true,
}) as TestDataRecord[];

test.describe("Place order test",()=>{
for (const recorde of records) {

    test(`${recorde.id} ${recorde.username} ${recorde.product} @smoke @placeorder Place order validation`, async ({ page }) => {

        const loginPage=new LoginPage(page)
        const productPage=new ProdutsPage(page)
        const cartPage=new CartPage(page)
        const checkoutPage=new CheckoutPage(page)
        const checkoutReviewPage=new CheckoutReviewPage(page)
        const orderConfrimationPage=new OrderConfirmationPage(page)
        dotenv.config();
        await loginPage.loginIntoApplication(
        recorde.username,
        recorde.password,
        process.env.ENCRYPTION_KEY as string
    );
        await productPage.selectProduct(recorde.product)
        await cartPage.checkout()
        await checkoutPage.fillCheckoutInfo(recorde.firstname,recorde.lastname,recorde.zipcode)
        await checkoutReviewPage.checkoutReview()
        await orderConfrimationPage.orderConfirmationValidation()

    });

}
})