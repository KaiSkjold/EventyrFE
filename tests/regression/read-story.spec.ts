import { ReadStoryPage } from '../pages/read-story-page';
import { StorySelectionPage } from '../pages/story-selection-page';
import test, { expect } from "@playwright/test";


test('Select a choice to navigate to the next page', async ({ page }) => {
  const storySelectionPage = new StorySelectionPage(page);
  await storySelectionPage.goto();
  await expect(storySelectionPage.readStoryButton.first()).toBeVisible();
  await storySelectionPage.readStoryButton.first().click();
  await expect(page).toHaveURL(/\/story\/.+/);
  const readStoryPage = new ReadStoryPage(page);
  await expect(readStoryPage.storyPageActions).toBeVisible();
  const pageTitleBefore = await readStoryPage.pageTitle.textContent() ?? '';
  await readStoryPage.storyActionButtons.first().click();
  await expect(readStoryPage.pageTitle).not.toHaveText(pageTitleBefore);
});