import { useEffect, useState } from 'react'

const useAccentColor = () => {
  const accentOptions = [
    { name: 'Soft Orange', value: '#F4A261' },
    { name: 'Dark Red', value: '#B10E0E' },
    { name: 'Royal Blue', value: '#3967D2' },
    { name: 'Jungle Green', value: '#2A9D8F' },
    { name: 'Stinging Wasabi', value: '#A2E365' },
    { name: 'Soft Pink', value: '#E365C2' },
    { name: 'Cyan Aqua', value: '#22E0D7' },
    { name: 'Dark Steel', value: '#444D51' },
  ];

  const [accent, setAccent] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('accent-color');
      if (saved) return saved;
    } catch {
      // ignore
    }
    // fallback to current CSS variable or first option
    const rootVal = getComputedStyle(document.documentElement).getPropertyValue('--accent-color')?.trim();
    return rootVal || accentOptions[2].value; // default to Royal Blue if nothing else
  });

  useEffect(() => {
    // apply accent color to :root and persist
    document.documentElement.style.setProperty('--accent-color', accent);
    try {
      localStorage.setItem('accent-color', accent);
    } catch {
      // ignore
    }
  }, [accent]);

  return { accent, setAccent, accentOptions };
}

export default useAccentColor