import { BaseViewPage } from './base-viewPage';
import { Page } from '@playwright/test';
import { Navigatable } from './navigatable';
import { Locator } from '@playwright/test';
import { Header } from './components/header';

export class DriversPage extends BaseViewPage implements Navigatable {
    

    readonly table = this.locator('tbody');
    readonly tableRows = this.table.locator('tr');
    readonly header = new Header(this.page);
    readonly userButton = this.page.locator('[aria-hespopup = "menu"]').first();

    url() {
        return 'users/drivers';
      }

    async waitForLoadState() {
        await this.page.waitForLoadState('networkidle');
      }

      getTableRow(rowNumber: number): Locator {
        return this.tableRows.nth(rowNumber);
      }
    
      getTableRowCells(rowNumber: number): Locator {
        return this.getTableRow(rowNumber).locator('td');
      }
    
      getTableCell(rowNumber: number, columnNumber: number): Locator {
        return this.getTableRowCells(rowNumber).nth(columnNumber);
      }
    }