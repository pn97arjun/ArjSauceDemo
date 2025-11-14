import {expect,type Locator,type Page,test} from '@playwright/test';


export class CartPage {
    private page: Page;
    private checkoutBtn: Locator;
    private cartPresence:Locator;


    constructor(page: Page) {
    
        this.page = page;
        this.cartPresence=page.locator("//div[@class='cart_item_label']")
        this.checkoutBtn = page.locator('#checkout');
       
    }

    async checkout()
    {
        await expect(this.cartPresence).toBeVisible()
        await this.checkoutBtn.click()
         await test.step(`Checkout is clicked`, async () => { });
         await test.info().attach('Checkout Page Screenshot', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });
    }
    

}