import {expect,type Locator,type Page,test} from '@playwright/test';
import { decryptData } from '../Utility/commonUtil';

export class LoginPage {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private loginErrorHeader:Locator;


    constructor(page: Page) {
    
        this.page = page;

        this.emailInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator("#login-button");
        this.loginErrorHeader=page.locator("//h3[@data-test='error']")
    }


}