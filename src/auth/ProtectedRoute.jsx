import { Route, Redirect, useHistory } from 'react-router-dom'

import React from 'react'
export default function ProtectedRoute(props) {

    const history = useHistory();
    let AdminDash = props.component_Admin;
    let UserDash = props.component_User;

    return (
        <>
            {
                sessionStorage.getItem('token') != null ? <div>
                    {
                        sessionStorage.getItem('role') === "admin" ? <AdminDash /> : <UserDash />
                    }
                </div> : history.push('/login')
            }
        </>
    )
}
