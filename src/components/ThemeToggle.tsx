import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-xl border 
      bg-gray-200 dark:bg-gray-800 
      text-gray-900 dark:text-gray-100
      hover:bg-gray-300 dark:hover:bg-gray-700 
      transition shadow"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
