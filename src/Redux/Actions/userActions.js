import { ActionType } from '../ActionType';
import axios from 'axios';
import { API_LINK, LINK } from '../../API_LINK/API_LINK'
import { DialerSip } from '@material-ui/icons';


export const getAllUser = () => async (dispatch, getState) => {
    try {
        axios.get(API_LINK+"user/",{
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            }
        })
        .then((res)=>{
            dispatch({
                type : ActionType.GET_ALL_USER,
                payload: res.data
            })
        })
        .catch()
    } catch (error) {
        
    }

}

export const userIdAction = (id) => (dispatch, state) => {
    dispatch({
        type: ActionType.USE_ID,
        payload: id
    })
}

