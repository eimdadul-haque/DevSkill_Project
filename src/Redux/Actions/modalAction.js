import { ActionType } from '../ActionType';


export const productModaloff = () => (dispatch) => {

    dispatch({
        type: ActionType.PRODUCT_MODAL,
        payload: false
    })
}


export const productModalon = () => (dispatch) => {

    dispatch({
        type: ActionType.PRODUCT_MODAL,
        payload: true
    })
}

export const EditproductModaloff = () => (dispatch) => {

    dispatch({
        type: ActionType.PRODUCTEDIT_MODAL,
        payload: false
    })


}


export const EditproductModalon = (id) => (dispatch) => {

    dispatch({
        type: ActionType.PRODUCTEDIT_MODAL,
        payload: true
    })
    dispatch({
        type: ActionType.EDIT_ID,
        payload: id
    })
}


export const EditcategoryModaloff = () => (dispatch) => {

    dispatch({
        type: ActionType.EDIT_CATEGORY_MODAL,
        payload: false
    })


}


export const EditcategoryModalon = (id) => (dispatch) => {

    dispatch({
        type: ActionType.EDIT_CATEGORY_MODAL,
        payload: true
    })
    dispatch({
        type: ActionType.EDIT_CATEGORY_ID,
        payload: id
    })
}

export const AddcategoryModaloff = () => (dispatch) => {

    dispatch({
        type: ActionType.ADD_CATEGORY_MODAL,
        payload: false
    })


}


export const AddcategoryModalon = () => (dispatch) => {

    dispatch({
        type: ActionType.ADD_CATEGORY_MODAL,
        payload: true
    })
}