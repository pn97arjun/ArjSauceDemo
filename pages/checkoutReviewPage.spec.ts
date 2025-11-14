import {expect,type Locator,type Page,test} from '@playwright/test';


export class CheckoutReviewPage {
    private page: Page;
    private finishBtn: Locator;
    private paymentInfoLabel:Locator
    private shippinginfoLabel:Locator
    private priceTotalLabel:Locator



    constructor(page: Page) {
    
        this.page = page;

        this.finishBtn = page.locator('#finish');
        this.paymentInfoLabel=page.getByTestId('payment-info-value')
        this.shippinginfoLabel=page.getByTestId('shipping-info-value')
        this.priceTotalLabel=page.getByTestId('subtotal-label')
       
    }
    async checkoutReview()
    {
        await this.paymentInfoLabel.isVisible()
        await this.shippinginfoLabel.isVisible()
        await this.priceTotalLabel.isVisible()
        await this.finishBtn.click()
         await test.step(`Checkout review is finished`, async () => { });
         await test.info().attach('Checkout Review Page Screenshot', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });
    }
    

}