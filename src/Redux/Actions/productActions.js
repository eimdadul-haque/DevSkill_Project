import { ActionType } from '../ActionType';
import axios from 'axios';
import {  API_LINK } from '../../API_LINK/API_LINK'

export const getProduts = () => async (dispatch) => {

    try {
        dispatch({
            type: ActionType.GET_PRODUCT_REQUEST
        })
        const { data } = await axios.get(API_LINK + "products/");
        dispatch({
            type: ActionType.GET_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {

    }


}

export const getProdutsDetails = (id) => async (dispatch) => {

    try {
        dispatch({
            type: ActionType.GET_PRODUCT_DETAILS_REQUEST
        })

        axios.get(API_LINK + "products/" + id)
            .then(res => {
                dispatch({
                    type: ActionType.GET_PRODUCT_DETAILS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(res => res)


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

export const productDelete = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ActionType.GET_PRODUCT_REQUEST
        })
        const { data } = await axios.delete(API_LINK + "products/" + id, {
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            }
        });
        console.log(data, "==data");

        getProdutsDetails();

    } catch (error) {
    }
}



