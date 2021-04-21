import React from 'react';
import style from './UserDash.module.css';
import Navigation from '../.././components/Navigation/Navigation';
import Footer from '../.././components/Footer/Footer';

export default function UserDash() {
    return (

        <>
            <Navigation />
            <div className={style.main}>
            User Dashboard 
            </div>
            <Footer />
        </>

    )
}
