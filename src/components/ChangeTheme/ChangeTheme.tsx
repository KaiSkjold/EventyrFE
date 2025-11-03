import { useTheme } from "../../hooks/useTheme";
import Moon from "../Svg/Moon";
import Sun from "../Svg/Sun";
import Button from "../ui/Button/Button";


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