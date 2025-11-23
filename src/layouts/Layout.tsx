import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();

  const hideHeaderRoutes = ["/vaga", "/upload", "/analise"];

  const hideHeader = hideHeaderRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      {!hideHeader && <Header />}

      <main className={`flex-1 ${hideHeader ? "" : "pt-4 md:pt-6"}`}>
        <Outlet />
      </main>

      {!hideHeader && <Footer />}
    </div>
  );
}
