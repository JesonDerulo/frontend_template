// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";

import { productListReducer } from "./reducers/productReducers";
import { userRegisterReducer } from "./reducers/userReducers";



const reducer = combineReducers({
  productList: productListReducer,


  
  userRegister: userRegisterReducer,
});

// const middleware = [thunk];

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


export default store;
