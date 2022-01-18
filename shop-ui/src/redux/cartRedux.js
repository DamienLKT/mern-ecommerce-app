import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
    // products: [],
    quantity: localStorage.getItem("products")
      ? JSON.parse(localStorage.products).length
      : 0,
    total: localStorage.getItem("total")
      ? JSON.parse(localStorage.getItem("total"))
      : 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; //cart quantity
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity; //* product quantity
      localStorage.setItem("products", JSON.stringify(state.products));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    removeProduct: (state, action) => {
      state.products.splice(
        state.products.findIndex(
          (product) => product._id === action.payload.product._id
        ),
        1
      );
      state.quantity -= 1;
      state.total = state.products?.map(
        (product) => product.quantity * product.price
      );
      state.total = state.total.reduce((a, b) => a + b, 0);
      localStorage.setItem("products", JSON.stringify(state.products));
      localStorage.setItem("total", JSON.stringify(state.total));
    },    
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
