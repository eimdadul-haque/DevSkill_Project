import { ActionType } from '../ActionType';



export const getCartReducer = (state = { cartNum: [], cart: [] }, action) => {

    switch (action.type) {

        case ActionType.GET_CART:
            console.log(action.payload.products, "==action.payload.products");
            return {
                ...state,
                cartNum: action.payload.products,
                cart: action.payload
            }
        default:
            return state;
    }
}
