import {expect,type Locator,type Page,test} from '@playwright/test';


export class OrderConfirmationPage {
    private page: Page;
    private orderConfirmHeader: Locator;



    constructor(page: Page) {
    
        this.page = page;

        this.orderConfirmHeader = page.locator("//h2[@class='complete-header']");
       
    }
    

}