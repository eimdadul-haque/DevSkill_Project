import React, { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import { Container, Row, Col, Button } from "react-bootstrap"
import axios from 'axios'
import { API_LINK } from '../../API_LINK/API_LINK';
import { Edit } from '@material-ui/icons';
import ProfileImg from '../../Const/profile.png'
import { useHistory } from 'react-router-dom'


export default function Profile() {

    const history = useHistory();
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

    const edit = () => {
        history.push("/edit_profile");
    }
    return (
        <>
            <Navigation />
            {
                wait === true ? <>Loding...</> :
                    <>
                        <Container style={{ height: '100vh' }}>
                            <Row className='d-flex justify-content-center text-center'>
                                <Col lg={6}>
                                    <div>
                                        <h1 className=' display-4 text-dark'>Profile Info</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='shadow m-lg-5'>
                                <Col lg={4}>
                                    <div className='p-1'>
                                        <img height={'300px'} src={ProfileImg} width={"300px"} />
                                    </div>
                                </Col>
                                <Col lg={8} >
                                    <div className='d-flex justify-content-end mt-2'>
                                        <div>
                                            <Button onClick={() => edit()} variant='outline-dark'><Edit /></Button>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=''>
                                            <span className="h6">Name:</span> <span className='h5'> {state.firstname} {state.lastname} </span>
                                        </div>
                                        <div className='p-1'>
                                            <span className="h6">Role: </span><span className='h5'>{state.role}</span>
                                        </div>
                                        <div className='p-1'>
                                            <span className="h6">User Name: </span >  <span className='h5'>{state.username}</span>
                                        </div>
                                        <div className='p-1'>
                                            <span className="h6">Email: </span> <span className='h5'>{state.email}</span>
                                        </div>
                                        <div className='p-1'>
                                            <span className="h6">Phone:  </span> <span className='h5'>{state.phone}</span>
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
