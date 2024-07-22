export * from '@playwright/test';

import { test as base} from '@playwright/test';
import { InOutPage } from '../pages/loginPage'; 
import { DriversPage } from '../pages/driverPage';
import { Steps } from '../pages/steps';
//import { App } from '../pages/helpers/app';
import { API } from '../pages/helpers/api';

type MyFixtures = {
    loginPage: InOutPage;
    driversPage: DriversPage;
    steps: Steps;
    //app: App;
    api: API;
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({page}, use) => await use(new InOutPage(page)),
    driversPage: async ({page}, use) => await use(new DriversPage(page)),
    steps: async ({}, use) => await use(new Steps),
    api: async({ page }, use) => await use (new API(page.request))
});