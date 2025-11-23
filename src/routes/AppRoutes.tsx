import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/mandatory/Home";
import Developers from "../pages/mandatory/Developers";
import About from "../pages/mandatory/About";
import Sac from "../pages/mandatory/Sac";
import Faq from "../pages/mandatory/Faq";
import Job from "../pages/app/Job";
import Upload from "../pages/app/Upload";
import History from "../pages/app/History";
import Result from "../pages/app/Result";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "developers", element: <Developers /> },
      { path: "faq", element: <Faq /> },
      { path: "sac", element: <Sac /> },
      { path: "vaga", element: <Job /> },
      { path: "upload", element: <Upload /> },
      { path: "historico", element: <History /> },
      { path: "analise/:id", element: <Result /> },
    ],
  },

]);

export default router;
