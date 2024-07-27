import { BaseViewPage } from './base-viewPage';

import { Navigatable } from './navigatable';

export class TrucksPage extends BaseViewPage implements Navigatable {
    
    
    
    url() {
        return 'fleet/trucks';
      }

    async goto() {
        await this.page.goto('/fleet/trucks');
    }

    async waitForLoadState() {
        await this.page.waitForLoadState('networkidle');
      }
      

    async getTruckName(row: number) {
        return await this.page.locator(`.table-row:nth-child(${row}) .truck-name`).innerText();
    }
}