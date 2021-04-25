import '../../index.css'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { getProdutsDetails } from '../../Redux/Actions/productActions'
import Navigation from '../../components/Navigation/Navigation'
import FadeLoader from 'react-spinners/FadeLoader'
import style from './Details.module.css'
import Footer from '../../components/Footer/Footer'

export default function Details() {

    const history = useHistory();
    const dispatch = useDispatch();
    const param = useParams();

    const { product } = useSelector(state => state.ProductDetailsStore);
    const [loding, setloding] = useState(true)
    const [Qty, setQty] = useState(1)

    useEffect(() => {
        if (product && param.id !== product.id) {
            dispatch(getProdutsDetails(param.id));
        }
        setloding(false)
    }, [])


    const ADD_cart = (id) => {
        if (sessionStorage.getItem('token')) {

        }
        else {
            history.push('/login');
        }
    }

    const buy_it = (id) => {
        if (sessionStorage.getItem('token')) {

        }
        else {
            history.push('/login');
        }
    }

    return (
        <>
            <Navigation />
            {loding === true ? <div className='App'> <FadeLoader /> </div> :
                <div>
                    <Container className={style.container}>
                        <Row style={{ marginTop: '20px' }}>
                            <Col lg={6}>
                                <img src={product.image} className={style.img} alt="..." />
                            </Col>
                            <Col lg={6}>
                                <div  >
                                    <div >
                                        <h5 ><b></b> {product.title}</h5>
                                        <p ><b>PRODUCT DETAILS:</b> {product.description}</p>
                                        <p ><b>Price:</b> {product.price} $</p>
                                        <p ><b>Availability:</b> {product.stock > 0 ? 'In stock' : "out of stock"}</p>
                                        <p><b>Quantity:<select className='btn btn-outline-dark' value={Qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.stock).keys()].map((data) => (
                                                <option key={data + 1} value={data + 1}>{data + 1}</option>
                                            ))}
                                        </select></b></p>
                                        <Button className={style.btn_cart} onClick={() => ADD_cart(product._id)} variant='dark'>ADD TO CART</Button>
                                        <Button className={style.btn_buy} onClick={() => buy_it(product._id)} variant='outline-dark'>BUY IT NOW</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                </div >
            }

        </>
    )
}

