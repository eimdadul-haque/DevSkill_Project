import { ActionType } from '../ActionType';
import axios from 'axios';
import { LINK, API_LINK } from '../../API_LINK/API_LINK'

export const getProduts = () => async (dispatch) => {

    try {
        dispatch({
            type: ActionType.GET_PRODUCT_REQUEST
        })
        const { data } = await axios.get(API_LINK+"products/");
        console.log(data,"===DATA");

        dispatch({
            type: ActionType.GET_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ActionType.GET_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }


}

export const getProdutsDetails = (id) => async (dispatch) => {

    try {
        dispatch({
            type: ActionType.GET_PRODUCT_DETAILS_REQUEST
        })
        const { data } = await axios.get(LINK + id);

        dispatch({
            type: ActionType.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ActionType.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }

}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: ActionType.GET_PRODUCT_DETAILS_RESET
    })
}