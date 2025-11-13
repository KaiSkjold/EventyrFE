import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class StorySelectionPage extends BasePage {
    readonly title: Locator;
    readonly card: Locator;
    readonly readStoryButton: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('.story-selection-title');
        this.card = page.locator('[data-testid="story-card"]');
        this.readStoryButton = page.locator('[data-testid="read-story-button"]');
    }

    

}