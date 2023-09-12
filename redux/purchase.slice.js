import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const purchsesSlice = createSlice({
  name: "purchases",
  initialState: initialState,
  reducers: {
    addMultiplePurchases: (state, action) => {
      let temp = [];
      let temp1 = state;
      action.payload?.forEach((element) => {
        let alreadyExistedItem = temp1.filter((e) => e?.id == element?.id);
        if (alreadyExistedItem?.length > 0) {
          let itemWithUpdatedQauntaty = {
            ...alreadyExistedItem[0],
            quantity: alreadyExistedItem[0].quantity + element?.quantity,
            orderNo: Math.floor(Math.random * 4376598 - 20),
            date: new Date().toDateString(),
          };
          temp = [...temp, itemWithUpdatedQauntaty];
        } else {
          temp = [
            ...temp,
            {
              ...element,
              orderNo: Math.floor(Math.random * 4376598 - 20),
              date: new Date().toDateString(),
            },
          ];
        }
      });
      let temp2 = temp1.filter((element1) => !temp.some((e2) => e2?.id == element1?.id));
      state = [...temp2, ...temp];
      return state;
    },
    returnProduct: (state, action) => {
      const index = state.findIndex((item) => item?.id == action?.payload);
      state.splice(index, 1);
    },
  },
});

export const purchasesReducer = purchsesSlice?.reducer;

export const { addMultiplePurchases, returnProduct } = purchsesSlice?.actions;
