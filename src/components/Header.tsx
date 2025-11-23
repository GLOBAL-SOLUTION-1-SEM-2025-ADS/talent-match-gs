import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-40 h-16 backdrop-blur-md bg-white/30 dark:bg-indigo-950/75 border-b border-gray-200 dark:border-indigo-800 shadow-sm transition-colors">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div
            className="flex items-center gap-2 cursor-pointer text-blue-900 dark:text-indigo-100 transition-colors"
            onClick={() => navigate("/")}
          >
            <span className="text-lg sm:text-xl font-bold">
              TalentMatch
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-800 dark:text-indigo-100 transition-colors">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 dark:text-indigo-50 font-semibold"
                  : "hover:text-blue-700 dark:hover:text-indigo-200 font-medium"
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 dark:text-indigo-50 font-semibold"
                  : "hover:text-blue-700 dark:hover:text-indigo-200 font-medium"
              }
            >
              Sobre
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 dark:text-indigo-50 font-semibold"
                  : "hover:text-blue-700 dark:hover:text-indigo-200 font-medium"
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/sac"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 dark:text-indigo-50 font-semibold"
                  : "hover:text-blue-700 dark:hover:text-indigo-200 font-medium"
              }
            >
              SAC
            </NavLink>
            <NavLink
              to="/developers"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 dark:text-indigo-50 font-semibold"
                  : "hover:text-blue-700 dark:hover:text-indigo-200 font-medium"
              }
            >
              Desenvolvedores
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="primary"
              className="text-sm"
              onClick={() => navigate("/vaga")}
            >
              Realizar analise
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-xl rounded-md text-blue-900 hover:text-blue-700 dark:text-gray-100 dark:hover:text-gray-300 transition"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <nav
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6
        backdrop-blur-md bg-white/80 dark:bg-gray-950/90 transition-all duration-300 ease-out
        md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium text-blue-900 hover:text-blue-700 dark:text-gray-50 dark:hover:text-indigo-200"
        >
          Início
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-700 dark:text-gray-50 dark:hover:text-indigo-200"
        >
          Sobre
        </NavLink>
        <NavLink
          to="/faq"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-700 dark:text-gray-50 dark:hover:text-indigo-200"
        >
          FAQ
        </NavLink>
        <NavLink
          to="/sac"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-700 dark:text-gray-50 dark:hover:text-indigo-200"
        >
          SAC
        </NavLink>
        <NavLink
          to="/developers"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-medium hover:text-blue-700 dark:text-gray-50 dark:hover:text-indigo-200"
        >
          Desenvolvedores
        </NavLink>

        <div className="flex flex-col items-center gap-4">
          <ThemeToggle />
          <Button
            variant="primary"
            className="mt-2"
            onClick={() => {
              setMenuOpen(false);
              navigate("/vaga");
            }}
          >
            Realizar análise
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-2xl text-blue-900 hover:text-blue-700 transition"
          aria-label="Fechar menu"
        >
          ✕
        </button>
      </nav>
    </>
  );
}
