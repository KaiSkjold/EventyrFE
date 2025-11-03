import { useEffect, useState } from 'react';

export function useFont() {
  const [isDyslexic, setIsDyslexic] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('font-dyslexic');
      if (saved !== null) setIsDyslexic(saved === 'true');
    } catch {
      // TODO: ignore?
    }
  }, []);

  useEffect(() => {
    if (isDyslexic) {
      document.documentElement.setAttribute('data-font', 'dyslexic');
    } else {
      document.documentElement.removeAttribute('data-font');
    }

    try {
      localStorage.setItem('font-dyslexic', isDyslexic ? 'true' : 'false');
    } catch {
      // TODO: ignore?
    }
  }, [isDyslexic]);

  const toggleFont = () => setIsDyslexic((v) => !v);

  return {
    isDyslexic,
    setIsDyslexic,
    toggleFont,
  } as const;
}

export default useFont;
