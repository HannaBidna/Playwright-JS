import { expect } from  '@playwright/test';
import { DriversPage } from '../../pages/driverPage';
import { InOutPage} from '../../pages/loginPage';
import { goto } from '../../pages/navigatable';
import { step } from '../helpers/step';
import { Base } from '../base';

export class LoginSteps{
    @step('Login user')
    async login(loginPage: InOutPage, driversPage: DriversPage){
    
        await goto(loginPage)
  
        await loginPage.login;
  
        await goto(driversPage);
        await expect(driversPage.userButton).toBeVisible();
};
}