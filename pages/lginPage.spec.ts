import { expect, type Locator, type Page, test } from '@playwright/test';
import { decryptData } from '../Utility/commonUtil';
import { ProdutsPage } from './productsPage.spec';

export class LoginPage {
    private page: Page;
    private productPage: ProdutsPage;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private loginErrorHeader: Locator;


    constructor(page: Page) {

        this.page = page;
        this.productPage = new ProdutsPage(page)
        this.emailInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator("#login-button");
        this.loginErrorHeader = page.locator("//h3[@data-test='error']")
    }
    async loginIntoApplication(username: string, password: string, encryptionKey: string) {

        await this.page.goto('/')
        await this.emailInput.fill(username);
        const decryptPassword = decryptData(password, encryptionKey);
        console.log("Password: ", decryptPassword)
        await test.step('Fill password input (masked)', async () => {
            await this.passwordInput.fill(decryptPassword);
            // Optionally, attach a masked value for reporting
            await test.info().attach('Password Input (masked)', {
                body: Buffer.from('********'),
                contentType: 'text/plain'
            });
        });
        await test.info().attach('Login Page Screenshot', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });
        await this.loginButton.click();
        await this.page.waitForTimeout(2000)

        if (await this.loginErrorHeader.isVisible()) {
            console.log("user is locked out")

            await expect(this.loginErrorHeader).toBeVisible()
            await test.step("user is locked out", async () => { });
        }
        else {

            await expect(this.productPage.cartBtn).toBeVisible()
            await test.step("user is logged in succesfully", async () => { });
            console.log("User is logged in succesfully")
        }
    }

}
