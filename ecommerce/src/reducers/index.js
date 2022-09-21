import { GET_PRODUCTS } from "../actions";

const initialState = {
    products: [],
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_PRODUCTS:
            return {
                products: action.payload,
                ...state
            }

        default:
            return state;
    }
}

export default rootReducer;