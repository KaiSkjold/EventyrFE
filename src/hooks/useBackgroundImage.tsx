import { useEffect } from 'react';

/**
 * Set a CSS custom property on the root element instead of directly
 * manipulating html/body background styles. App.css will read this
 * variable (with a fallback) so there's a single source of truth
 * and we avoid layering two backgrounds.
 */
export const useBackgroundImage = (imageUrl?: string) => {
  useEffect(() => {
    const root = document.documentElement;

    if (imageUrl) {
      // store the whole url(...) value so CSS can use it directly
      // Quote the URL to be safe with spaces/characters
      root.style.setProperty('--bg-image', `url("${imageUrl}")`);
      root.style.setProperty('--bg-height', '100vh');
    } else {
      root.style.removeProperty('--bg-image');
      root.style.removeProperty('--bg-height');
    }

    return () => {
      root.style.removeProperty('--bg-image');
      root.style.removeProperty('--bg-height');
    };
  }, [imageUrl]);
};

export default useBackgroundImage;