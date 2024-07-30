import { App } from '../helpers/app';
import { API } from '../helpers/api';
import { Page, APIRequestContext } from '@playwright/test';

export class BaseSteps {
  app: App;
  api: API;

  constructor(page: Page, request: APIRequestContext) {
    this.app = new App(page);
    this.api = new API(request);
  }
}