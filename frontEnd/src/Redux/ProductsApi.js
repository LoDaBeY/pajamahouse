// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const ProductsApi = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pijamahouse.onrender.com/" }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
});

export const OneProductsApi = createApi({
  reducerPath: "OneProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pijamahouse.onrender.com/" }),
  endpoints: (builder) => ({
    getOneProductsByName: builder.query({
      query: (name) => `SmallerSliderProductData/${name}`,
    }),
  }),
});

export const OneProductsApiNewItems = createApi({
  reducerPath: "OneProductsApiNewItems",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pijamahouse.onrender.com/" }),
  endpoints: (builder) => ({
    getOneProductsApiNewItemsByName: builder.query({
      query: (name) => `NewItemsProductData/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByNameQuery } = ProductsApi;
export const { useGetOneProductsByNameQuery } = OneProductsApi;
export const { useGetOneProductsApiNewItemsByNameQuery } =
  OneProductsApiNewItems;
