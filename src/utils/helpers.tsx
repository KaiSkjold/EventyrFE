// Utility helpers for translation key detection and mapping
export const isLikelyUrl = (s?: string) => {
  if (!s) return false;
  return /^https?:\/\//i.test(s) || s.startsWith('/') || s.startsWith('data:');
};

// Detect if a string is a translation-key-like candidate coming from the DB.
// Conservative rules:
// - No whitespace
// - Starts with "story" or contains "story_" or "story." somewhere
export const isTranslationKeyCandidate = (s?: string) => {
  if (!s) return false;
  const noSpaces = /^[^\s]+$/.test(s);
  const looksLikeStoryKey = /^story(?:[_\-.]|$)/i.test(s) || s.includes('story_') || s.includes('story.');
  return noSpaces && looksLikeStoryKey;
};

// Convert database hyphenated segments into underscore segments used in
// the locale JSON files. Example:
// "story-one.story-cover.description" -> "story_one.story_cover.description"
export const mapDbKeyToLocaleKey = (s?: string) => {
  if (!s) return s || '';
  return s.replace(/-/g, '_');
};

export default {
  isLikelyUrl,
  isTranslationKeyCandidate,
  mapDbKeyToLocaleKey,
};
