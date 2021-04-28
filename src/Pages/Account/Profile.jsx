import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import { Container, Row, Col } from "react-bootstrap"
import axios from 'axios'
import { API_LINK } from '../../API_LINK/API_LINK';
import { useEffect } from 'react'

export default function Profile() {

    const [state, setstate] = useState([])
    const [wait, setwait] = useState(true)

    useEffect(() => {
        try {
            axios.get(API_LINK + "my-detail/", {
                headers: {
                    authorization: "bearer " + sessionStorage.getItem('token')
                }
            })
                .then(res => {
                    setstate(res.data);
                    setwait(false);
                })
                .catch()
        } catch (error) {

        }
    }, [])


    return (
        <>
            <Navigation />
            {
                wait === true ? <>Loding...</> :
                    <>
                        <Container style={{height:'100vh'}}>
                            <Row className='d-flex justify-content-center text-center'>
                                <Col lg={6}>
                                    <div>
                                        <h1 className=' display-4 text-dark'>Profile Info</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col lg={12} className='mt-5'>
                                    <div className=' p-5 shadow h3 text-info'>
                                        <div>
                                            <p>Name: {state.firstname} {state.lastname} </p>
                                        </div>
                                        <div>
                                            <p>Role: {state.role} </p>
                                        </div>
                                        <div>
                                            <p>User Name: {state.username} </p>
                                        </div>
                                        <div>
                                            <p>Email: {state.email} </p>
                                        </div>
                                        <div>
                                            <p>Phone: {state.phone} </p>
                                        </div>
                                        <div>
                                            <p>City: {state.city} </p>
                                        </div>
                                        <div>
                                            <p>zipcode: {state.zipcode} </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </>
            }
            <Footer />
        </>
    )
}
