import { Link } from 'react-router-dom'
import React from 'react'
import Navigation from './Navigation'
import style from './NotFound.module.css'

export default function NotFound() {
    return (
        <>
            <Navigation />
            <div className={style.main}>
                <div className={style.code}>
                    404
                </div>
                <div className={style.text}>
                    OOPS... THE PAGE YOU LOOKING FOR CLOCKED OUT!
                </div>
                <div className={style.btn}>
                    <Link to='/' className='btn btn-outline-dark'>RETURN TO STORE</Link>
                </div>
            </div>
        </>
    )
}
