import { ActionType } from '../ActionType';


export const cartReducer = (state = { cartList: [] }, action) => {

    switch (action.type) {

        case ActionType.ADD_CART:
            const item = action.payload;
            const existItem = state.cartList.find((data) => data.id === item.id);

            if (existItem) {
                return {
                    ...state,
                    cartList: state.cartList.map((data) => data.id === existItem.id ? item : data)
                }
            } else {
                return {
                    ...state,
                    cartList: [...state.cartList, item]
                }
            }

        case ActionType.REMOVE_CART:
            return {
                ...state,
                cartList: state.cartList.filter((data) => data.id !== action.payload)
            }
        case ActionType.CLEAR_CART:
            return {
                ...state,
                cartList: []
            }
            
        default:
            return state;
    }
}