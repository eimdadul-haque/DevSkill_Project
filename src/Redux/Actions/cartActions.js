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
                        payload: res.data
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


export const addCart = (_id, qty) => async (dispatch, getState) => {

    try {
        axios.post(API_LINK + "cart/", {
            product: {
                id: _id,
                quantity: qty
            }
        },
            {
                headers: {
                    authorization: "bearer " + sessionStorage.getItem('token')
                }
            }

        )
            .then(res => {
                getCart();
            })
            .catch(res => res)
    } catch (error) {

    }

}

export const remove = (_id) => async (dispatch, getState) => {

    try {
        axios.delete(API_LINK + "cart/" + _id, {
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            }
        }

        )
            .then(res => {
                getCart();
            })
            .catch(res => res)
    } catch (error) {

    }

}