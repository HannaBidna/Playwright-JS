import { Base } from './base'; // 
import { Page } from '@playwright/test';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Footer } from './components/footer';

export abstract class BaseViewPage extends Base {
    readonly header = new Header(this.page);
    readonly sidebar: Sidebar;
    readonly footer: Footer;

    constructor(page: Page) {
        super(page);
        this.header = new Header(page);
        this.sidebar = new Sidebar(page);
        this.footer = new Footer(page);
    }

    protected async navigateTo(url: string) {
        await this.page.goto(url);
    }
}