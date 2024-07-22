import { test, expect } from '@playwright/test';
import { InOutPage } from '../scr/pages/loginPage'; 
import { goto } from '../Playwright/navigatable';

test.describe('Login Tests', () => {
    test('With valid credentials', async ({ page }) => {
        const loginPage = new InOutPage(page);
        await goto(loginPage);
        //await page.waitForTimeout(2000)
        await loginPage.loginWithValidCredentials();
        
    });

    test ('Return to login', async({page}) => {
        const logoutPage = new InOutPage(page);
      
        await logoutPage.logout();
    })
      

    test('With invalid login but valid password', async ({page}) => {

        const loginPage = new InOutPage(page);
        await goto(loginPage);
        await loginPage.loginWithWrongLogin();

        const errorMessage = page.getByText('Wrong Email or password'); 
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Wrong Email or password');
        
    })

    test('With valid login but invalid password', async ({page}) => {
        
        const loginPage = new InOutPage(page);
        await goto(loginPage);
        await loginPage.loginWithWrongPassword();

        const errorMessage = page.getByText('Wrong Email or password'); 
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Wrong Email or password'); 
        

    })

    test('with invalid credentials', async ({page}) => {

        const loginPage = new InOutPage(page);
        await goto(loginPage);
        await loginPage.loginWithWrongCredentials();

        const errorMessage = page.getByText('Wrong Email or password'); 
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Wrong Email or password'); 
        
    })
})