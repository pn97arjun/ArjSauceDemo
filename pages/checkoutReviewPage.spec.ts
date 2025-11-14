import {expect,type Locator,type Page,test} from '@playwright/test';


export class CheckoutReviewPage {
    private page: Page;
    private finishBtn: Locator;



    constructor(page: Page) {
    
        this.page = page;

        this.finishBtn = page.locator('#finish');
       
    }
    

}