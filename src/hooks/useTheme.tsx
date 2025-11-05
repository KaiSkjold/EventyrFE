import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  // Default to light so React state and the inline script's fallback match.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Get saved theme from localStorage or default to light
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
}
