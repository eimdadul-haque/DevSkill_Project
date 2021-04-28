import React, { useState } from 'react'
import { Modal, Container, Row, Col, Form, Button } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import { signupAction } from '../../Redux/Actions/accountActions'
import { useHistory } from 'react-router-dom'

export default function SignUp(props) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.signupStore)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    const signup = () => {
        if (email && password && password.length >= 8) {
            dispatch(signupAction(firstname, lastname, email, phone, username, password))
            window.location.reload()
        }

        history.push('/login')
    }

    return (
        <div>
            <Container>
                <Modal {...props} size='md' centered aria-labelledby="contained-model-title-vcenter">

                    <Row>
                        <Col xs={6} lg={6}>
                            <div style={{ marginLeft: '10%' }}>
                                <Modal.Title id='contained-model-title-vcenter'>
                                    SignUp
                                </Modal.Title>
                            </div>
                        </Col>
                        <Col xs={6} lg={6}>
                            <div className='d-flex justify-content-end mr-3'>
                                <Modal.Title id='contained-model-title-vcenter'>
                                    <div onClick={props.onHide}>
                                        <CloseIcon />
                                    </div>
                                </Modal.Title>
                            </div>
                        </Col>

                    </Row>

                    <Modal.Body>
                        <Form >
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId='firstname'>
                                        <Form.Control placeholder="firstname" name="firstname" type="text" onChange={(e) => setFirstname(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId='lastname'>
                                        <Form.Control placeholder="lastname" name="lastname" type="text" onChange={(e) => setLastname(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Form.Group controlId='email'>
                                        <Form.Control placeholder="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId='phone'>
                                        <Form.Control placeholder="phone" name="phone" type="phone" onChange={(e) => setPhone(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId='username'>
                                        <Form.Control placeholder="username" name="username" type="username" onChange={(e) => setUsername(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId='password'>
                                        <Form.Control placeholder="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer className='d-flex justify-content-center '>
                        <Button variant='outline-dark' onClick={() => signup()}>
                            Sign Up
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>

    )
}






