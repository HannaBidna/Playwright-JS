import { expect } from  '@playwright/test';
import { DriversPage } from '../../pages/driverPage';
import { InOutPage} from '../../pages/loginPage';
import { goto } from '../../pages/navigatable';
import { step } from '../helpers/step';

export class Steps {
  @step('Login user')
  async login(loginPage: InOutPage, driversPage: DriversPage){
    
      await goto(loginPage)

      await loginPage.login;

      await goto(driversPage);
      await expect(driversPage.header.userButton).toBeVisible();
  
    
  }
}