const axios = require("axios").default;
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_CART_PRODUCT = "ADD_CART_PRODUCT";

export function getProducts() {
  return async function (dispatch) {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  };
}

export function addCartProduct(payload) {
  return { 
      type: ADD_CART_PRODUCT, payload 
  };
}
