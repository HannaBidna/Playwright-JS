import { InOutPage } from '../loginPage';
import { DriversPage } from '../driverPage';
import { TruckPage } from '../trucksPage';
import { Page } from '@playwright/test';

export class App {
  loginPage: InOutPage;
  driverPage: DriversPage;
  truckPage: TruckPage;

  constructor(page: Page) {
    this.loginPage = new InOutPage(page);
    this.driverPage = new DriversPage(page);
    this.truckPage = new TruckPage(page);
  }
}