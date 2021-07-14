import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import productReducer from "./productSlice";

// Combine reducers after adding another

// const reducers = combineReducers({
//   productReducer,
// });

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
