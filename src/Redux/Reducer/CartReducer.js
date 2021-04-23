import { ActionType } from '../ActionType';



export const getCartReducer = (state = { cartNum: [] }, action) => {

    switch (action.type) {

        case ActionType.GET_CART:
            console.log(action.payload,"===action.payload");
            return{
                ...state,
                cartNum: action.payload
            }
        default:
            return state;
    }
}
