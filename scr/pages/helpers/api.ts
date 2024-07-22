import { APIRequestContext } from '@playwright/test';
import { expect } from '@playwright/test';

const endpoints = {
  me: '/api/v1/dispatchers/me?',
  drivers: '/api/v1/drivers?page=1',
  trucks: '/api/v1/trucks?page=1',
  siginin: 'api/v1/sign-in'
} as const;

export class API {
  constructor(readonly request: APIRequestContext) {}

  async get(name: keyof typeof endpoints, token: string) {
    const res = await this.request.get(endpoints[name], {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    await expect(res).toBeOK();
    return res.json();
  }
}
