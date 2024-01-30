import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedProducts: JSON.parse(localStorage.getItem("SelectedProducts"))
    ? JSON.parse(localStorage.getItem("SelectedProducts"))
    : [],
  CartProducts: JSON.parse(localStorage.getItem("CartProducts"))
    ? JSON.parse(localStorage.getItem("CartProducts"))
    : [],
  CartProductsTitle: JSON.parse(localStorage.getItem("CartProductsTitle"))
    ? JSON.parse(localStorage.getItem("CartProductsTitle"))
    : [],
};

export const counterSlice = createSlice({
  name: "CartShop",
  initialState,
  reducers: {
    AddToCartFavori: (state, action) => {
      const ProductwithQ = { ...action.payload, Quantity: 1 };
      state.CartProducts.push(ProductwithQ);
      state.CartProductsTitle.push(action.payload.Title);
      localStorage.setItem("CartProducts", JSON.stringify(state.CartProducts));
    },
    AddToCart: (state, action) => {
      const ProductwithQ = { ...action.payload, Quantity: 1 };
      const productIndex = state.SelectedProducts.findIndex(
        (item) => item.Title === ProductwithQ.Title
      );

      if (productIndex !== -1) {
        state.SelectedProducts[productIndex].Quantity += 1;
      } else {
        state.SelectedProducts.push(ProductwithQ);
      }

      state.CartProductsTitle.push(action.payload.Title);
      // @ts-ignore
      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
      // @ts-ignore
      localStorage.setItem(
        "CartProductsTitle",
        JSON.stringify(state.CartProductsTitle)
      );
    },

    Increase: (state, action) => {
      let IncreasedProducts = state.SelectedProducts.find((item) => {
        return item.Title === action.payload.Title;
      });
      IncreasedProducts.Quantity += 1;

      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
    },
    Decrease: (state, action) => {
      const IncreasedProducts = state.SelectedProducts.find((item) => {
        return item.Title === action.payload.Title;
      });
      IncreasedProducts.Quantity -= 1;
      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );

      if (IncreasedProducts.Quantity === 0) {
        const NewProductArry = state.SelectedProducts.filter((item) => {
          return item.Title !== action.payload.Title;
        });

        const NewProductArryForTitle = state.CartProductsTitle.filter(
          (item) => {
            return item !== action.payload.Title;
          }
        );

        const NewProductArryForFavori = state.CartProducts.filter((item) => {
          return item.Title !== action.payload.Title;
        });

        state.SelectedProducts = NewProductArry;
        state.CartProductsTitle = NewProductArryForTitle;
        state.CartProducts = NewProductArryForFavori;
        localStorage.setItem(
          "SelectedProducts",
          JSON.stringify(state.SelectedProducts)
        );
        localStorage.setItem(
          "CartProductsTitle",
          JSON.stringify(state.CartProductsTitle)
        );
        localStorage.setItem(
          "CartProducts",
          JSON.stringify(state.CartProducts)
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, AddToCartFavori, Decrease, Increase } =
  counterSlice.actions;

export default counterSlice.reducer;
