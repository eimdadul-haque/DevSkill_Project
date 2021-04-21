import { ActionType } from '../ActionType';
import axios from 'axios';
import { API_LINK } from '../../API_LINK/API_LINK'



export const getallOrder = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(API_LINK + 'order/', {
            headers: {
                authorization: "bearer" + sessionStorage.getItem('token')
            }
        });
        dispatch({
            type: ActionType.GET_ORDER,
            payload: data

        })
    } catch (error) {

    }
}