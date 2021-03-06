import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SignUp from './SignUp'
import { Container, Card, Col, Row, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import { API_LINK } from '../../API_LINK/API_LINK'
import { ActionType } from '../../Redux/ActionType'
import { getallOrder } from '../../Redux/Actions/orderActions'
import axios from 'axios'

export default function Login() {

    const [modal, setmodal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            history.push('/dashboard')
        }
    }, [history])



    const Login = () => {
        try {
            axios.post(API_LINK + 'signin/', {

                "email": email,
                "password": password
            })
                .then(function (response) {
                    sessionStorage.setItem('token', response.data.userInfo.token);
                    sessionStorage.setItem('expire_at', response.data.userInfo.expire_at);
                    sessionStorage.setItem('role', response.data.userInfo.role);

                    if (response.data.userInfo.token) {
                       window.location.reload()
                        history.push('/dashboard')
                        
                    }

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

    return (<> <Navigation />
        <div style={{ height: '100vh' }}>
            <Container >
                <Row>
                    <Col xs={12} sm={12} md={6} lg={8}>
                        <div style={{ marginTop: '30%' }}>
                            <h1>fakecommerce</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Ipsam sint perspiciatis repellat quos qui voluptates animi aliquam?</p>
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <Form style={{ marginTop: '35%' }}>
                            <Card className="shadow" style={{ borderRadius: '5px' }}>
                                <Card.Body>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>
                                    <Button style={{ width: '100%' }} variant="dark" onClick={() => Login()}>
                                        Sign in
                                    </Button>
                                </Card.Body>
                                <Card.Footer className="text-muted ">
                                    <Button variant='outline-dark' style={{ width: '100%' }} onClick={() => setmodal(true)}>
                                        Sign up
                                    </Button>
                                    <SignUp show={modal} onHide={() => setmodal(false)} />
                                </Card.Footer>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div></>
    )
}

