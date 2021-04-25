import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button, Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Delete } from '@material-ui/icons'
import { useHistory, Link } from 'react-router-dom'
import { remove } from '../../Redux/Actions/cartActions'
import Navigation from '../../components/Navigation/Navigation'


export default function Cart() {

    const [loding, setloding] = useState(true)
    var { cartNum, cart } = useSelector(state => state.getCartStore)
    console.log(cartNum, "===cartNum");
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        setloding(false)
    }, [])


    const removeCart = (id) => {
        dispatch(remove(id))
        console.log(id, "===id");
    }
    return (
        <> <Navigation />
            {
                loding ? <> </> : <div style={{ height: '100vh' }}>
                    <Container className='d-flex justify-content-center align-content-center'>
                        {cartNum.length === 0 ? <div>
                            <h3 style={{ marginTop: '50px' }}>Your cart is empty</h3> click <Link to='/'>here</Link> to continue shopping.
                        </div> :

                            <div>
                                <Row style={{ marginTop: '50px' }}>
                                    <Col md={8}>
                                        <Table striped bordered hover >
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            {
                                                cartNum.map((data, index) => {
                                                    return (

                                                        <tbody key={index}>
                                                            <tr>
                                                                <td><img style={{ width: '50px', height: '50px' }} src={data.productId.image} alt="..." /></td>
                                                                <td>{data.productId.title}</td>
                                                                <td>${data.productId.price} </td>
                                                                <td>{data.quantity} </td>
                                                                <td ><span className='text-danger' onClick={() => removeCart(cart._id)} ><Delete /></span></td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }
                                        </Table>
                                        <div>
                                            <button className='btn btn-outline-info' onClick={() => { history.push('/') }}>CONTINUE SHOPPING</button>
                                            <button className='btn btn-outline-secondary ml-3' >CLEAR CART</button>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>

                                            </Card.Body>
                                            <Card.Footer>
                                                <Button style={{ width: '100%' }} className='btn btn-dark '>Checkout</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        }
                    </Container>
                </div>
            }
        </>
    )
}


