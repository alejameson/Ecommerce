import { ADD_CART_PRODUCT, GET_PRODUCTS } from "../actions";

const initialState = {
    products: [],
    cartProducts: [],
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }

        case ADD_CART_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.filter((p) => p.id === action.payload.id).length ? state.cartProducts : state.cartProducts.concat(action.payload),
            }

        default:
            return state;
    }
}

export default rootReducer;