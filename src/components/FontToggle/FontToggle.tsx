import useFont from "../../hooks/useFont";
import { Font } from "../svgComponents/Font";
import Button from "../ui/buttonComponent/Button";


function FontToggle() {
  const { isDyslexic, toggleFont } = useFont();

  const fontIcon = <Font width={20} height={20} strokeColor="var(--text-color)" />;

  // show the opposite font on the button as a preview
  const previewFont = isDyslexic ? 'var(--font-family-default)' : 'var(--font-family-dyslexic)';

  return (
    <Button
        color="var(--secondary-color)"
        borderStyle="no-border"
        style={{ fontFamily: previewFont }}
        onClick={toggleFont}
        aria-pressed={isDyslexic}
        aria-label={isDyslexic ? "Deaktiver ordblinde font" : "Aktiver ordblinde font"}
    >
      {fontIcon}
      {isDyslexic ? "Brug standard font" : "Brug ordblinde font"}
    </Button>
  );
}

export default FontToggle;