import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LandingPage from "./Pages/LandingPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../src/Pages/Error/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />,
      <Route path="*" element={<ErrorPage />} />


    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
