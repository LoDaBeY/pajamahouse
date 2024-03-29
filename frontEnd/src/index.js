import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LandingPage from "./Pages/LandingPage";
import { store } from "./Redux/store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../src/Components/Error/ErrorPage.jsx";
import SignUp from "../src/Components/Sign/SignUp/SignUp";
import Favori from "../src/Components/Favori/Favori";
import Cart from "../src/Components/Cart/Cart";
import SingleProductDetails from "../src/Components/SingleProductDetails/SingleProductDetails";
import SingleProductDetailsForNewItems from "../src/Components/SingleProductDetailsForNewItems/SingleProductDetailsForNewItems.jsx";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />,
      <Route path="*" element={<ErrorPage />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Favori" element={<Favori />} />
      <Route path="Cart" element={<Cart />} />
      <Route
        path="SingleProductDetails/:id"
        element={<SingleProductDetails />}
      />
      <Route
        path="SingleProductDetailsForNewItems/:id"
        element={<SingleProductDetailsForNewItems />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
