import React from 'react';
import { Col, Row, Card, Button, Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../Redux/Actions/cartActions'
import { Delete } from '@material-ui/icons'
import { useHistory, Link } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'


export default function Cart() {
    const { cartList } = useSelector(state => state.cartStore);
    const dispatch = useDispatch();
    const history = useHistory()


    const qtyChange = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const clear = () => {
        dispatch(clearCart())
    }

    return (
        <> <Navigation />
            <div style={{ height: '100vh' }}>
                <Container className='d-flex justify-content-center align-content-center'>
                    {cartList.length === 0 ? <div>
                        <h3 style={{marginTop:'50px'}}>Your cart is empty</h3> click <Link to='/'>here</Link> to continue shopping.
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
                                            cartList.map((data, index) => {
                                                return (

                                                    <tbody key={index}>
                                                        <tr>
                                                            <td><img style={{ width: '50px', height: '50px' }} src={data.img} alt="..." /></td>
                                                            <td>{data.name}</td>
                                                            <td>${data.price} </td>
                                                            <td>
                                                                <select value={data.qty} onChange={(e) => qtyChange(data.id, e.target.value)}>
                                                                    {[...Array(data.stock).keys()].map((data) => (
                                                                        <option key={data + 1} value={data + 1}>{data + 1}</option>
                                                                    ))}

                                                                </select>
                                                            </td>
                                                            <td ><span className='text-danger' onClick={() => removeCart(data.id)}><Delete /></span></td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </Table>
                                    <div>
                                        <button className='btn btn-outline-info' onClick={() => { history.push('/') }}>CONTINUE SHOPPING</button>
                                        <button className='btn btn-outline-secondary ml-3' onClick={() => clear()}>CLEAR CART</button>
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
        </>
    )
}


