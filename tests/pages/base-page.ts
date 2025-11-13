import { Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly url: string;

    constructor(page: Page) {
        this.page = page;
        this.url = 'http://localhost:5173';
    }


    async goto(): Promise<void> {
        await this.page.goto(`${this.url}`);
    }

}