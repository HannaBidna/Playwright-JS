import { test as base } from '@playwright/test';
import { InOutPage } from '../pages/loginPage';
import { DriverPage } from '../pages/driverPage';
import { TruckPage } from '../pages/trucksPage';
import { Steps } from '../pages/helpers/step';
import { API } from '../pages/helpers/api';


type MyFixtures = {
    loginPage: InOutPage;
    driverPage: DriverPage;
    truckPage: TruckPage;
    steps: Steps;
    api: API;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => await use(new InOutPage(page)),
    driverPage: async ({ page }, use) => await use(new DriverPage(page)),
    truckPage: async ({ page }, use) => await use(new TruckPage(page)),
    steps: async({}, use) => await use(new Steps()),
    api: async({ page }, use) => await use(new API(page.request))
    
  });
