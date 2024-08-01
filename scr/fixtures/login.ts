import { test as base, expect } from '@playwright/test';
import { App } from '../pages/helpers/app';
import { User } from '../pages/helpers/users';

type LoginFixtures = {
  app: App;
  user: User;
};

export const test = base.extend<LoginFixtures>({
  user: async ({}, use, testInfo) => {
    const user = testInfo.project.use as User;
    await use(user);
  },
  app: async ({ page, user }, use) => {
    const app = new App(page);
    await app.loginPage.goto();
    await app.loginPage.login(user.email, user.password);
    await use(app);
    await app.loginPage.logout();
  },
});

test.beforeEach(async ({ app }) => {
  await app.loginPage.waitForLoadState();
});

test.afterEach(async ({ app }) => {
  await app.loginPage.logout();
});