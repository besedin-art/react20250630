import { Button } from "../Button/Button";
import { useTheme } from "../ThemeContext/useTheme";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>Toggle theme</Button>
  )
};
