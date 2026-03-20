import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

type Theme = "light" | "dark";

export function useTheme() {
  const [stored, setStored] = useLocalStorage<Theme>("theme", "light");
  const [theme, setThemeState] = useState<Theme>(stored);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function setTheme(next: Theme) {
    setThemeState(next);
    setStored(next);
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return { theme, setTheme, toggleTheme };
}
