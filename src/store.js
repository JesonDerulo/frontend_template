// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer
} from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,

  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

// const middleware = [thunk];

// Covert the userInfo from string to object 
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
