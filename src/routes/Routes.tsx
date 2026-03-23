import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import AsideBar from "@/features/genre-filter/components/AsideBar";

const GameGridPage = lazy(() => import("@/pages/GameGridPage"));
const GameInfoPage = lazy(() => import("@/pages/GameInfoPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout aside={<AsideBar />} />,
    children: [
      {
        index: true,
        element: <GameGridPage />,
      },
      {
        path: "game/:id",
        element: <GameInfoPage />,
      },
    ],
  },
]);

export default router;
