import { useMemo } from 'react';
import type { Page, Story } from '../services/api/Types';

type StoryPageState = 
  | { type: 'loading' }
  | { type: 'error'; message: string | null }
  | { type: 'reading'; story: Story; currentPage: Page };

export function useStoryPageStates(
  story: Story | null,
  currentPage: Page | null,
  loading: boolean,
  error: string | null
): StoryPageState {
  return useMemo(() => {
    if (loading) {
      return { type: 'loading' };
    }

    if (error || !story) {
      return { type: 'error', message: error };
    }

    if (!currentPage) {
      return { type: 'error', message: 'No page selected' };
    }

    return { type: 'reading', story, currentPage };
  }, [story, currentPage, loading, error]);
}