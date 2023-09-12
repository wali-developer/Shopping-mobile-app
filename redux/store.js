import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { purchasesReducer } from "./purchase.slice";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
  cart: cartReducer,
  purchases: purchasesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
