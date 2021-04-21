import { ActionType } from '../ActionType';

export const getOrderReducer = (state = { orderList: [] }, action) => {
    switch (action.type) {

        case ActionType.GET_ORDER:
            return {
                ...state,
                orderList: action.payload
            }

        default:
            return state;
    }

}