import { useHistory } from 'react-router-dom'

import React from 'react'
export default function ProtectedRouteCart(props) {

    const history = useHistory();
    let Component = props.component;

    return (
        <>
            {
                sessionStorage.getItem('token')  ? <Component /> : history.push('/login')
            }
        </>
    )
}