import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { API_LINK } from '../../API_LINK/API_LINK';

export default function UpdateUser(props) {

    const dispatch = useDispatch();
    const { id } = useSelector(state => state.UserIdStore)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [city, setcity] = useState('')
    const [street, setstreet] = useState('')
    const [streetNum, setstreetNum] = useState(0)
    const [gipcode, setgipcode] = useState('')
    const [lat, setlat] = useState('')
    const [long, setlong] = useState('')
    const [role, setrole] = useState('')

    const history = useHistory();

    const update = (_id) => {
        try {

            axios.patch(API_LINK + "user/" + _id, {
                address: {
                    geolocation: {
                        lat: lat,
                        long: long
                    },
                    city: city,
                    street: street,
                    number: streetNum,
                    zipcode: gipcode
                },
                role: role,
                email: email,
                username: username,
                phone: phone,
                password: password,
                firstname: firstname,
                lastname: lastname
            }, {
                headers: {
                    authorization: "bearer " + sessionStorage.getItem('token')
                }
            })
                .then((res) => {
                    console.log(res.data, "===res");
                    if (res.status === 200 && res.statusText === "OK") {
                        history.push("/dashboard")
                    }
                }).catch(res => res)

        } catch (error) {

        }
    }


    const back = () => {
        history.push("/dashboard")
    }

    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center mt-5'>

                    <Col lg={6} className='text-center font-weight-bolder text-info'>
                        <p>Update User</p>
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
                                    <Form.Group controlId='role'>
                                        <Form.Control placeholder="role" name="role" type="role" onChange={(e) => setrole(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Row>
                                        <Col xs={4} md={4} lg={4}>
                                            <Form.Group controlId='city'>
                                                <Form.Control placeholder="city" name="city" type="city" onChange={(e) => setcity(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} md={4} lg={4}>
                                            <Form.Group controlId='street'>
                                                <Form.Control placeholder="street" name="street" type="street" onChange={(e) => setstreet(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} md={4} lg={4}>
                                            <Form.Group controlId='street number'>
                                                <Form.Control placeholder="street number" name="street number" type="street number" onChange={(e) => setstreetNum(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Row>
                                        <Col xs={4} md={4} lg={4}>
                                            <Form.Group controlId='zipcode'>
                                                <Form.Control placeholder="zipcode" name="zipcode" type="zipcode" onChange={(e) => setgipcode(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} md={4} lg={4}>
                                            <Form.Group controlId='lat'>
                                                <Form.Control placeholder="lat" name="lat" type="lat" onChange={(e) => setlat(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4} md={4} lg={4}>
                                            <Form.Group controlId='long'>
                                                <Form.Control placeholder="long" name="long" type="long" onChange={(e) => setlong(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                        <Button style={{ width: "50%" }} variant='outline-info' onClick={() => update(id)}>
                            Update
                        </Button>
                        <Button style={{ width: "50%" }} variant='outline-info' onClick={() => back()}>
                            Back To Dashboard
                        </Button>
                    </Col>

                </Row>
            </Container>
        </div>

    )
}






