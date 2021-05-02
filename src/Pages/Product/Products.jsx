import React, { useEffect, useState } from 'react';
import { Footer } from '../../global import'
import { useHistory } from 'react-router-dom';
import { Col, Row, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import '../../index.css';
import style from './Products.module.css';
import Navigation from '../../components/Navigation/Navigation'

export default function Products() {
    const history = useHistory()
    const [loding, setloding] = useState(true)
    const { products } = useSelector(state => state.ProductStore)

    useEffect(() => {
        setloding(false);
    }, [])

    const details = (id) => {
        history.push('/details/' + id)
    }

    return (
        <>
            <Navigation />
            {
                loding ? <div style={{ height: '100vh' }}></div> :
                    <>
                        <Container className={""}>
                            <Row className={style.row}>
                                {
                                    products.length === 0 ? <div className='d-flex justify-content-center align-items-center '><span style={{height:'100vh'}}>No data in database...</span></div> :
                                        <>
                                            {
                                                products.map((data, index) => {
                                                    return (
                                                        <div key={index} onClick={() => details(data._id)}>
                                                            <Col sm={12} className={style.col}>
                                                                <Card className="shadow" id={style.card}>
                                                                    <div className={style.inner} >
                                                                        <Card.Img className={style.img} src={"http://localhost:8080"+data.image} alt="Card image" />
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                        <Card.Title>
                                                                            <div className={style.title}>{data.title}</div>
                                                                        </Card.Title>
                                                                        <Card.Title>
                                                                            <div className={style.price}>${data.price}</div>
                                                                        </Card.Title>
                                                                    </div>
                                                                </Card>
                                                            </Col>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </>
                                }
                            </Row>

                        </Container>
                    </>
            }
            <Footer />
        </>
    )
}
