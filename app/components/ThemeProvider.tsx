"use client";
import { type ReactNode, createContext, useState, useEffect } from "react";

const ThemeContext = createContext<"light" | "dark">("light");
export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    setTheme(theme);
  }, [theme]);
  return { theme, setTheme };
};
export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
