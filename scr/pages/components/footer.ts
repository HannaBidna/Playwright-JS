import { Base } from "../base";


export class Footer extends Base{
    

    async setRowsPerPage(rows: number) {
        await this.page.selectOption('select[aria-label="Rows per page"]', rows.toString());
    }
}