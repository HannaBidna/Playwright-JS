
import { test as base } from '@playwright/test';
import { API } from '../pages/helpers/api'; 
import goto from '../pages/navigatable';

type TestFixtures = {
  api: API;
  token: string;
};

export const test = base.extend<TestFixtures>({
  api: async ({ request }, use) => {
    const api = new API(request);

    
    const loginResponse = await api.get('siginin', ''); 
    const token = loginResponse.token;

   
    await use(new API(request));
  },
  token: async ({ api }, use) => {
    const loginResponse = await api.get('siginin', '');
    await use(loginResponse.token);
  }
});

export { expect } from '@playwright/test';
