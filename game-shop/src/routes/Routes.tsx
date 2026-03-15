import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import GamePage from "../pages/GamePage";
import CheckoutPage from "../pages/CheckoutPage";
import GameInfoPage from "../pages/GameInfoPage";
import CartPage from "../pages/CartPage";
import PaymentPage from "../pages/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <GamePage />,
      },
      {
        path: "/game/:id",
        element: <GameInfoPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
