import { expect } from '@playwright/test';
import { BaseSteps } from '../steps/base-steps';

export class Steps extends BaseSteps {
  async checkLoginPage() {
    await expect(this.app.loginPage.emailField).toBeVisible();
    await expect(this.app.loginPage.passwordField).toBeVisible();
    await expect(this.app.loginPage.loginBtn).toBeVisible();
  }
}