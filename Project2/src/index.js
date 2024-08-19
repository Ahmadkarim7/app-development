import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import StarsAndTrees from "./components/StarsAndTrees";
import WalkWithNature from "./components/WalkWithNature";
import BeatutyOfNature from "./components/BeautyOfNature";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stars-and-trees",
        element: <StarsAndTrees />,
      },
      {
        path: "/walk-with-nature",
        element: <WalkWithNature />,
      },
      {
        path: "/beauty-of-nature",
        element: <BeatutyOfNature />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
