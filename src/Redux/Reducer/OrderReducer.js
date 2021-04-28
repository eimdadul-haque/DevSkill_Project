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

export const addOrderReducer = (state = { order: [] }, action) => {
    switch (action.type) {

        case ActionType.ADD_ORDER:
            return {
                ...state,
                order: action.payload
            }

        default:
            return state;
    }

}

export const myOrderReducer = (state = { myOrder: [] }, action) => {
    switch (action.type) {

        case ActionType.MY_ORDER:
            return {
                ...state,
                myOrder: action.payload
            }

        default:
            return state;
    }

}