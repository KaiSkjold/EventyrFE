import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ReadStoryPage extends BasePage {
    readonly title: Locator;
    readonly storyPageActions: Locator;
    readonly storyActionButtons: Locator;
    readonly settingsButton: Locator;
    readonly pageTitle: Locator;


    constructor(page: Page) {
        super(page);
        this.title = page.locator('.story-page-header');
        this.storyPageActions = page.locator('.page-actions');
        this.storyActionButtons = page.locator('[data-testid="story-action"]');
        this.settingsButton = page.locator('[data-testid="settings-button"]');
        this.pageTitle = page.locator('[data-testid="page-title"]');
    }

    

}