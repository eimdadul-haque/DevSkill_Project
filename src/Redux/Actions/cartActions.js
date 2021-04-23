import { ActionType } from '../ActionType';
import axios from 'axios';
import { API_LINK } from '../../API_LINK/API_LINK'



export const getCart = () => async (dispatch, getState) => {

    try {
        axios.get(API_LINK + "cart/",
            {
                headers: {
                    authorization: "bearer " + sessionStorage.getItem('token')
                }
            }

        )
            .then(res => {
                console.log();
                if (res.data.products) {
                    dispatch({
                        type: ActionType.GET_CART,
                        payload: res.data.products
                    })
                } else {
                    dispatch({
                        type: ActionType.GET_CART,
                        payload: []
                    })
                }
            })
            .catch(res => res)
    } catch (error) {

    }

}


