import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";


import Home from "../pages/mandatory/Home";
import Developers from "../pages/mandatory/Developers";
import About from "../pages/mandatory/About";
import Sac from "../pages/mandatory/Sac";
import Faq from "../pages/mandatory/Faq";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "developers", element: <Developers /> },
      { path: "faq", element: <Faq /> },
      { path: "sac", element: <Sac /> },
    ],
  },

]);

export default router;
