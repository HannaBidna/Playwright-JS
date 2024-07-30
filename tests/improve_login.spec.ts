import { test } from '../scr/fixtures/base';
import { goto } from '../scr/pages/navigatable';

test('Login page is shown after opening base url', async ({ app, steps }) => {
  await goto(app.loginPage);
  await steps.checkLoginPage();
});