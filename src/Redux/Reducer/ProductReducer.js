import { ActionType } from '../ActionType';

export const getProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_SUCCESS:
            return {
                loding: false,
                products: action.payload
            }
        default:
            return state;
    }
}

export const getProductDetails = (state = { product: [] }, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loding: true
            }
        case ActionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loding: false,
                product: action.payload
            }
        case ActionType.GET_PRODUCT_DETAILS_FAIL:
            return {
                loding: false,
                error: action.payload
            }
        case ActionType.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {}
            }

        default:
            return state;
    }
}