
import { Base } from './base'; 
import * as dotenv from 'dotenv';
import { Navigatable } from './navigatable';

dotenv.config();

export class InOutPage extends Base implements Navigatable {
    goto() {
      throw new Error('Method not implemented.');
    }
    readonly emailField = this.getByType('email');
    readonly passwordField = this.getByType('password');
    readonly loginBtn = this.page.getByRole('button', { name: 'Log in' });
    readonly userDropdown = this.page.getByRole('button', {name: 'Test User'});
    readonly logoutBtn = this.page.getByText('Log out');
    

    url() {
        return 'login';
      }

    async waitForLoadState() {
        await this.page.waitForLoadState('networkidle');
      }
    
    async gotoLogin() {
        console.log('Navigating to login page...');
        await this.page.goto('login');
        console.log('Navigated to login page:', this.page.url());
    }
    

    async login(email: string, password: string) {
        console.log('Filling login form...');
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
        console.log('Clicked login button');
        await this.page.waitForResponse('/api/v1/dispatchers/me?');
    }

    async loginWithValidCredentials() {
        const email = process.env.USER_EMAIL;
        const password = process.env.USER_PASSWORD;
        console.log('Loaded credentials from .env:', { email, password });
        if (!email || !password) {
            throw new Error('Email or password is not defined in .env file');
        }
        await this.login(email, password);
        await this.page.waitForURL('/chats');
       
    }

    async loginWithWrongLogin() {
        const email = process.env.WRONG_EMAIL;
        const password = process.env.USER_PASSWORD;
        console.log('Loaded credentials from .env:', { email, password });
        if (!email || !password) {
            throw new Error('Email or password is not defined in .env file');
        }
        await this.login(email, password);
        
        
    }

    async loginWithWrongPassword() {
        const email = process.env.USER_EMAIL;
        const password = process.env.WRONG_PASSWORD;
        console.log('Loaded credentials from .env:', { email, password });
        if (!email || !password) {
            throw new Error('Email or password is not defined in .env file');
        }
        await this.login(email, password);
       
    }

    async loginWithWrongCredentials() {
        const email = process.env.WRONG_EMAIL;
        const password = process.env.WRONG_PASSWORD;
        console.log('Loaded credentials from .env:', { email, password });
        if (!email || !password) {
            throw new Error('Email or password is not defined in .env file');
        }
        await this.login(email, password);
        
    }

    async logout() {
        console.log('Logging out...');
            await this.userDropdown.isVisible();
            await this.page.waitForTimeout(2000);
            await this.userDropdown.click;
            await this.page.waitForTimeout(2000);
            await this.logoutBtn.click;    
            
        console.log('Logged out');
    }

    
}