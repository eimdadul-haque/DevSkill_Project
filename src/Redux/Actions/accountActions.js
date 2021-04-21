import { ActionType } from '../ActionType';
import axios from 'axios';
import { API_LINK } from '../../API_LINK/API_LINK'


export const login = (email, password) => (dispatch, getState) => {
    try {
        axios.post(API_LINK + 'signin/', {

            "email": email,
            "password": password
        })
            .then(function (response) {
                console.log(response);
                sessionStorage.setItem('token', response.data.userInfo.token);
                sessionStorage.setItem('expire_at', response.data.userInfo.expire_at);

                dispatch({
                    type: ActionType.LOGIN,
                    payload: {
                        token: response.data.userInfo.token,
                        expire_at: response.data.userInfo.expire_at
                    }
                })
            })
            .catch(function (error) {

            });



    } catch (error) {

    }

}

export const signupAction = (firstname, lastname, email, phone, username, password) => (dispatch, getState) => {
    try {
        axios.post(API_LINK + 'signup/', {
            "email": email,
            "username": username,
            "password": password,
            "firstname": firstname,
            "lastname": lastname,
            "phone": phone
        }).then(res => {
            console.log(res);
            dispatch({
                type: ActionType.SIGNUP,
                payload: {
                    statusCode: res.status,
                    statusText: res.statusText
                }
            })
        }).catch(err => err)
    } catch (error) {

    }
}