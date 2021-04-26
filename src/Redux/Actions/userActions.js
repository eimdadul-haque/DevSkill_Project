import { ActionType } from '../ActionType';
import axios from 'axios';
import { LINK } from '../../API_LINK/API_LINK'


const getUser = (id) => async (dispatch, getState) => {

}

export const userIdAction = (id) => (dispatch, state) => {
    dispatch({
        type: ActionType.USE_ID,
        payload: id
    })
}