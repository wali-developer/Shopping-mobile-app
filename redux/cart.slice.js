import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state?.find((item) => item?.id == action?.payload?.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action?.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item?.id == action?.payload);
      item.quantity++;
    },
    incrementMultiple: (state, action) => {
      const item = state.find((item) => item?.id == action?.payload?.id);
      item?.quantity + action?.payload?.quantity;
      return state;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item?.id == action?.payload);
      if (item?.quantity == 1) {
        const index = state.findIndex((item) => item?.id == action?.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item?.id == action?.payload);
      state.splice(index, 1);
    },
    clearCart: () => initialState,
    addMutiple: (state, action) => {
      let temp = [];
      let temp1 = state;
      action.payload?.forEach((element) => {
        let alreadyExistedItem = temp1.filter((e) => e?.id == element?.id);
        if (alreadyExistedItem?.length > 0) {
          let itemWithUpdatedQauntaty = {
            ...alreadyExistedItem[0],
            quantity: alreadyExistedItem[0].quantity + 1,
          };
          temp = [...temp, itemWithUpdatedQauntaty];
        } else {
          temp = [...temp, { ...element, quantity: 1 }];
        }
      });
      let temp2 = temp1.filter((element1) => !temp.some((e2) => e2?.id == element1?.id));
      state = [...temp2, ...temp];
      return state;
    },
  },
});

export const cartReducer = cartSlice?.reducer;

export const {
  addToCart,
  incrementQuantity,
  incrementMultiple,
  decrementQuantity,
  removeFromCart,
  addMutiple,
  clearCart,
} = cartSlice?.actions;
