import { ReadStoryPage } from './../pages/read-story-page';
import { StorySelectionPage } from './../pages/story-selection-page';
import test, { expect } from "@playwright/test";


test('Shows story cards', async ({ page }) => {
  const storySelectionPage = new StorySelectionPage(page);
  await storySelectionPage.goto();
  await expect(storySelectionPage.title).toBeVisible();
  expect(await storySelectionPage.title.textContent()).toContain('Vælg en historie at læse');
  await expect(storySelectionPage.card.first()).toBeVisible();
  const count = await storySelectionPage.card.count();
  expect(count).toBeGreaterThan(1);
});

test('Select a story to start playing', async ({ page }) => {
  const storySelectionPage = new StorySelectionPage(page);
  await storySelectionPage.goto();
  await expect(storySelectionPage.readStoryButton.first()).toBeVisible();
  await storySelectionPage.readStoryButton.first().click();
  await expect(page).toHaveURL(/\/story\/.+/);
  const readStoryPage = new ReadStoryPage(page);
  await expect(readStoryPage.title).toBeVisible();
  await expect(readStoryPage.storyPageActions).toBeVisible();
  await expect(readStoryPage.settingsButton).toBeVisible();
});
