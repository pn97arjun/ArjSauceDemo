import {expect,type Locator,type Page,test} from '@playwright/test';


export class ProdutsPage {
    private page: Page;
    private productSort: Locator;
    public cartBtn:Locator;


    constructor(page: Page) {
    
        this.page = page;
        this.productSort = page.locator("//select[@class='product_sort_container']");
        this.cartBtn=page.locator("//a[@class='shopping_cart_link']");

       
    }
    

}