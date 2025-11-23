import DarkMode from "../assets/icons/dark_mode.svg";
import LightMode from "../assets/icons/light_mode.svg";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={handleClick}
      aria-label="Alternar tema"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300/80 dark:border-gray-700/70
      bg-white/90 dark:bg-gray-900/80 backdrop-blur
      text-gray-700 dark:text-gray-200 shadow-sm
      hover:-translate-y-0.5 hover:shadow-md
      transition-all duration-200"
    >
      {theme === "light" ? (
        <img src={LightMode} alt="Tema claro" className="h-5 w-5" />
      ) : (
        <img src={DarkMode} alt="Tema escuro" className="h-5 w-5" />
      )}
    </button>
  );
}
