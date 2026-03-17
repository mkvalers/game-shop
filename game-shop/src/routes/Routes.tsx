import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import GameGridPage from "../pages/GameGridPage";
import GameInfoPage from "../pages/GameInfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
