export const GET_PRODUCTS = "GET_PRODUCTS";

export function getProducts() {
  return function (dispatch) {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_PRODUCTS, payload: json });
      });
  };
}
