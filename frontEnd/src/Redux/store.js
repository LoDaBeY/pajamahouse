import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  OneProductsApi,
  OneProductsApiNewItems,
  ProductsApi,
} from "./ProductsApi";
import CartReducer from "./CartcounterSlice";

export const store = configureStore({
  reducer: {
    CartShopName: CartReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [OneProductsApi.reducerPath]: OneProductsApi.reducer,
    [OneProductsApiNewItems.reducerPath]: OneProductsApiNewItems.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductsApi.middleware)
      .concat(OneProductsApi.middleware)
      .concat(OneProductsApiNewItems.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
