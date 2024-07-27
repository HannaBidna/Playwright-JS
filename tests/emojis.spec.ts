import { test, expect, APIRequestContext } from '@playwright/test';
import { API } from '../scr/pages/helpers/api';
import { InOutPage } from '../scr/pages/loginPage';
import { goto } from '../Playwright/navigatable';

test.describe('Emojis', () => {
  let token: string;

  test.beforeEach(async ({ page, context }) => {
    const loginPage = new InOutPage(page);
        await goto(loginPage);
        await loginPage.loginWithValidCredentials();
        const cookies = await context.cookies();
    token = cookies.find(e => e.name == 'tms_token')!.value;
  });

  test('Api trucks', async ({ request }) => {
    const api = new API(request);
    const data = await api.get('trucks', token);
    console.log(data);
  });
  