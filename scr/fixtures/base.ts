import { test as base } from '@playwright/test';
import { App } from '../fixtures/app';
import { Steps } from '../pages/helpers/step';
import { API } from '../pages/helpers/api';

type MyFixtures = {
  app: App;
  steps: Steps;
  api: API;
};

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    await use(new App(page));
  },
  steps: async ({ page, request }, use) => {
    await use(new Steps(page, request));
  },
  api: async ({ page }, use) => {
    await use(new API(page.request));
  },
});