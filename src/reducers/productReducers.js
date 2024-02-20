import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

// productListReducer.js

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, error: null, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload, error: null };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};
