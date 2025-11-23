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
    <div className=" flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {!hideHeader && <Header />}
      <main className=" flex-1 pt-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
