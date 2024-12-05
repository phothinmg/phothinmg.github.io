"use client";
import * as React from "react";
import { useTheme } from "@/components/ThemeProvider";
import DarkLight from "@/components/DarkLight";
const storageKey = "theme-preference";

const ThemeSwitch: React.FC = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">(
    "light",
  );
  /**
   * Get the user's preferred color scheme from either:
   *   1. Local Storage if it has been set
   *   2. The prefers-color-scheme media query if it is supported
   *   3. Default to "light" if neither of the above is available (Server-side rendering)
   * @returns "light" or "dark"
   */
  const getColorPreference = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      const storedPreference = localStorage.getItem(storageKey);
      if (storedPreference) {
        return storedPreference as "light" | "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };
  const reflectPreference = React.useCallback(
    (theme: "light" | "dark") => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(`${theme}`);
      setCurrentTheme(theme);
      setTheme(theme);
    },
    [setTheme],
  );
  React.useEffect(() => {
    setMounted(true);
    const initTheme = getColorPreference();
    reflectPreference(initTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme, reflectPreference]);
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  if (!mounted) {
    return <DarkLight theme="light" />;
  }
  return (
    <button
      id="theme-toggle"
      aria-label={`${currentTheme} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
    >
      <DarkLight theme={currentTheme} />
    </button>
  );
};

export default ThemeSwitch;
