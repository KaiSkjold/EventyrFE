import { useTheme } from "../../hooks/useTheme";
import Moon from "../svgComponents/Moon";
import Sun from "../svgComponents/Sun";
import Button from "../ui/buttonComponent/Button";


const ChangeTheme = () => {

    const { theme, toggleTheme } = useTheme();
    const sunIcon = <Sun width={20} height={20} strokeColor="var(--text-color)" />;
    const moonIcon = <Moon width={20} height={20} strokeColor="var(--text-color)" />;

  return (
    <Button onClick={toggleTheme} color="var(--secondary-color)" borderStyle="no-border" >
      {theme === 'light' ? moonIcon : sunIcon} <span className="theme-toggle-text">{theme === 'light' ? 'Mørkt' : 'Lyst'} tema</span>
    </Button>
  )
}

export default ChangeTheme