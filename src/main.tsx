import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeToggle />
  </React.StrictMode>
  </ThemeProvider>
  
);
