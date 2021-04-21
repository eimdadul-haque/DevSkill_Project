import { ActionType } from '../ActionType';

export const productmodalReducr = (state = { module: false }, action) => {
    switch (action.type) {

        case ActionType.PRODUCT_MODAL:
            return {
                ...state,
                module: action.payload
            }

        default:
            return state;
    }

}

export const productEditmodalReducr = (state = { edit: false }, action) => {
    switch (action.type) {

        case ActionType.PRODUCTEDIT_MODAL:
            return {
                ...state,
                edit: action.payload
            }

        default:
            return state;
    }

}

export const catagorEditModalReducer = (state = { catagoryModal: false }, action) => {
    switch (action.type) {
        case ActionType.EDIT_CATEGORY_MODAL:
            return { ...state, catagoryModal: action.payload }

        default:
            return state;
    }
}

export const catagorAddModalReducer = (state = { AddcatagoryModal: false }, action) => {
    switch (action.type) {
        case ActionType.ADD_CATEGORY_MODAL:
            return { ...state, AddcatagoryModal: action.payload }

        default:
            return state;
    }
}