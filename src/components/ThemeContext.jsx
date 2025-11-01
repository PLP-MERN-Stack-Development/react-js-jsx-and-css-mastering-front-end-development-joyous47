/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

// Create context
const ThemeContext = createContext();

// Main provider
export function ThemeProvider({ children }) {
  // Load saved theme or detect system preference
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Define colors for both themes
  const colors = {
    background: dark ? "#0f172a" : "#f8fafc", // slate-900 / slate-50
    text: dark ? "#f8fafc" : "#0f172a",
    accent: dark ? "#38bdf8" : "#3b82f6", // sky-400 / blue-500
    card: dark ? "#1e293b" : "#ffffff", // slate-800 / white
  };

  // Sync theme with <html> and localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");

    // Also apply body background color for smooth transitions
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}
