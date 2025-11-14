import {expect,type Locator,type Page,test} from '@playwright/test';


export class CartPage {
    private page: Page;
    private checkoutBtn: Locator;



    constructor(page: Page) {
    
        this.page = page;

        this.checkoutBtn = page.locator('#checkout');
       
    }
    

}