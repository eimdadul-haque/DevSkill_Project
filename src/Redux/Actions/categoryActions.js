import { ActionType } from '../ActionType';
import axios from 'axios';
import { API_LINK } from '../../API_LINK/API_LINK'


export const getCatagoty = () => async (dispatch, getStore) => {
    try {
        const { data } = await axios.get(API_LINK + 'category/');

        dispatch({
            type: ActionType.ADD_CATAGORY,
            payload: data
        })
    } catch (error) {

    }
}


export const getCatagotyDetails = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(API_LINK + 'category/' + id);

        dispatch({
            type: ActionType.ADD_CATAGORY_DETAILS,
            payload: data
        })
    } catch (error) {

    }
}


export const categorytDelete = (id) => async (dispatch) => {
    try {

        const { data } = await axios.delete(API_LINK + "category/" + id, {
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            }
        });

        getCatagoty();

    } catch (error) {
    }
}