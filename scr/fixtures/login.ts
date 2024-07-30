import { test as base } from '@playwright/test';
import { InOutPage } from '../pages/loginPage';
import { App } from '../pages/helpers/app';

import { DotenvConfigOptions } from 'dotenv';

type LoginFixtures = {
  app: App;
};

export const test = base.extend<LoginFixtures>({
  app: async ({ page }, use }) => {
    const app = new App(page);
    await app.loginPage.goto();
    await app.loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await use(app);
    await app.loginPage.logout();
  },
});

function use(app: App) {
  throw new Error('Function not implemented.');
}
