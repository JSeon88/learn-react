import { createBrowserRouter } from "react-router-dom";

import { Suspense, lazy } from "react";

const App = lazy(() => import("./App"));
const Coin = lazy(() => import("./routes/Coin"));
const Coins = lazy(() => import("./routes/Coins"));
const Price = lazy(() => import("./routes/Price"));
const Chart = lazy(() => import("./routes/Chart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
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
