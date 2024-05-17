import { createBrowserRouter } from "react-router-dom";

import { Suspense, lazy } from "react";
import App from "./App";

const Coin = lazy(() => import("./pages/Coin"));
const Coins = lazy(() => import("./pages/Coins"));
const Price = lazy(() => import("./pages/Price"));
const Chart = lazy(() => import("./pages/Chart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Coins />
          </Suspense>
        ),
      },
      {
        path: ":coinId",
        element: (
          <Suspense>
            <Coin />
          </Suspense>
        ),
        children: [
          {
            path: "price",
            element: (
              <Suspense>
                <Price />
              </Suspense>
            ),
          },
          {
            path: "chart",
            element: (
              <Suspense>
                <Chart />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
export default router;
