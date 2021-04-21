import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import style from './Footer.module.css'
import { Facebook, Instagram, Twitter, YouTube, Phone, Email } from '@material-ui/icons'

export default function Footer() {

    return (
        <div className='bg-dark'>
            <Container>
                <Row className={style.row}>
                    <Col className={style.main} xs={6} sm={6} md={3} lg={3}>
                        <div className={style.title}>
                            ABOUT
                        </div>
                        <div className={style.link}>
                            About Us
                        </div>
                        <div className={style.link}>
                            Privacy Policy
                        </div>
                        <div className={style.link}>
                            Cookie Policy
                        </div>
                        <div className={style.link}>
                            Terms & Conditions
                        </div>
                    </Col >
                    <Col className={style.main} xs={6} sm={6} md={3} lg={3}>
                        <div className={style.title}>
                            SERVICES
                        </div>
                        <div className={style.link}>
                            Online Shopping
                        </div>
                        <div className={style.link}>
                            Online Services
                        </div>
                    </Col >
                    <Col className={style.main} xs={6} sm={6} md={3} lg={3}>
                        <div className={style.title}>
                            CONTACT
                        </div>
                        <div className={style.link}>
                            <Phone /> 01XXXXXXXXX
                        </div>
                        <div className={style.link}>
                            <Email /> eimdadulhaque@gmail.com
                        </div>
                    </Col >
                    <Col className={style.main} xs={6} sm={6} md={3} lg={3}>
                        <div className={style.title}>
                            SOCIAL
                        </div>
                        <div className={style.link}>
                            <Facebook /> facebook
                        </div>
                        <div className={style.link}>
                            <Instagram /> instagram
                        </div>
                        <div className={style.link}>
                            <Twitter /> twitter
                        </div>
                        <div className={style.link}>
                            <YouTube /> youtube
                        </div>
                    </Col >
                </Row >
            </Container >
        </div>
    )
}
