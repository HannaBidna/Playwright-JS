import { test as base } from '@playwright/test';
import { App } from '../pages/helpers/app';

type MyFixtures = {
  app: App;
};

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    await use(new App(page));
  },
});

export { App };
