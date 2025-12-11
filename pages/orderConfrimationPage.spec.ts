import {expect,type Locator,type Page,test} from '@playwright/test';
import { writetocsv } from '../Utility/practice.spec';
import * as path from 'path'

export class OrderConfirmationPage {
    private page: Page;
    private orderConfirmHeader: Locator;



    constructor(page: Page) {
    
        this.page = page;

        this.orderConfirmHeader = page.locator("//h2[@class='complete-header']");
       
    }
    
    async orderConfirmationValidation()
    {
        expect(this.orderConfirmHeader).toBeVisible()
        writetocsv("India","User1")
        await test.step(`Order is Confirmed`, async () => { });
         await test.info().attach('Order Confirmation Page Screenshot', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });
    }

}