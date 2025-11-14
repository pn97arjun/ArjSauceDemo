import { expect, type Locator, type Page, test } from '@playwright/test';


export class CheckoutPage {
    private page: Page;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private zipCodeInput: Locator;
    private continueBtn: Locator;


    constructor(page: Page) {

        this.page = page;
        this.firstNameInput = page.locator("#first-name")
        this.lastNameInput = page.locator("#last-name")
        this.zipCodeInput = page.locator("#postal-code")
        this.continueBtn = page.locator("#continue")

    }


}