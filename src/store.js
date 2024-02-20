// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";

import { productListReducer } from "./reducers/productReducers";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducers";



const reducer = combineReducers({
  productList: productListReducer,

  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

// const middleware = [thunk];


const userInfoFromStorage = localStorage.getItem('userInfo') ?
JSON.stringify(localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}


const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


export default store;
