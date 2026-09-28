import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "./pages/MainPage.tsx";

const router = createBrowserRouter([{ path: "/", Component: MainPage }]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
