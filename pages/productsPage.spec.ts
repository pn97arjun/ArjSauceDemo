import {expect,type Locator,type Page,test} from '@playwright/test';


export class ProdutsPage {
    private page: Page;
    private productSortSelect: Locator;
    public cartBtn:Locator;


    constructor(page: Page) {
    
        this.page = page;
        this.productSortSelect = page.locator("//select[@class='product_sort_container']");
        this.cartBtn=page.locator("//a[@class='shopping_cart_link']");

       
    }
    
    async selectProduct(productName:string)
    {
        await this.productSortSelect.selectOption({value:'lohi'})
        const productAddtoCart=this.page.locator(`//div[text()='${productName}']//following::button[1]`)
        await productAddtoCart.click()
        await this.cartBtn.click()
        await test.step(`${productName} is added`, async () => { });
         await test.info().attach('Product Page Screenshot', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });

    }

}