import { ActionType } from '../ActionType';
import axios from 'axios';
import {  API_LINK } from '../../API_LINK/API_LINK'

export const addToCart = (id, qty) => (dispatch, getState) => {

    try {
        axios.post(API_LINK + "cart/", {
            product: [{
                quantity: parseInt(qty)
            }
            ]
        },
            {
                headers: {
                    authorization: "bearer" + sessionStorage.getItem('token')
                }
            }

        )
            .then(res => console.log(res))
            .catch(res => res)
    } catch (error) {

    }

}



export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: ActionType.REMOVE_CART,
        payload: id
    })

    localStorage.setItem("cart", JSON.stringify(getState().cartStore.cartList))
}

export const clearCart = (id) => (dispatch, getState) => {
    dispatch({
        type: ActionType.CLEAR_CART
    })

    localStorage.setItem("cart", JSON.stringify(getState().cartStore.cartList))

}


export const cartAction = (title, price, description, image, stock, category) => async (dispatch, getState) => {
    try {
        fetch(API_LINK + "products/", {
            method: "POST",
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({
                title: title,
                price: price,
                description: description,
                image: image,
                stock: stock,
                category: category
            }),
        })
            .then((res) => res.json())
            .then((json) => console.log(json));
    } catch (error) {

    }


}

// export const addToCart = (id, qty) => async (dispatch, getState) => {
//     const { data } = await axios.get(LINK + id);
//     dispatch({
//         type: ActionType.ADD_CART,
//         payload: {
//             id: data.id,
//             name: data.title,
//             img: data.image,
//             price: data.price,
//             stock: data.stock,
//             qty: parseInt(qty)
//         }
//     })

//     localStorage.setItem("cart", JSON.stringify(getState().cartStore.cartList));
// }