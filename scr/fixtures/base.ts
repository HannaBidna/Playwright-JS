
export * from '@playwright/test';
import { test as base } from '@playwright/test';
import { InOutPage } from '../pages/loginPage';
import { DriversPage } from '../pages/driverPage';
import { TrucksPage } from '../pages/trucksPage';
import { Steps } from '../pages/helpers/step';
import { API } from '../pages/helpers/api';


type MyFixtures = {
    loginPage: InOutPage;
    driverPage: DriversPage;
    truckPage: TrucksPage;
    steps: Steps;
    api: API;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => await use(new InOutPage(page)),
    driverPage: async ({ page }, use) => await use(new DriversPage(page)),
    truckPage: async ({ page }, use) => await use(new TrucksPage(page)),
    steps: async({}, use) => await use(new Steps()),
    api: async({ page }, use) => await use(new API(page.request))
    
  });
