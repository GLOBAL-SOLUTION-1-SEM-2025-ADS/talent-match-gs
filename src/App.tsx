import MainLayout from "./layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";

export default function App() {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
}
