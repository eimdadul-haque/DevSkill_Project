import React, { useEffect, useState } from 'react';
import { Footer } from '../../global import'
import { useHistory } from 'react-router-dom';
import { Col, Row, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import '../../index.css';
import style from './Products.module.css';
import Navigation from '../../components/Navigation'

export default function Products() {
    const history = useHistory()
    const { products } = useSelector(state => state.ProductStore)


    const details = (id) => {
        history.push('/details/' + id)
    }

    return (
        <>
            <Navigation />
            <Container>
                <Row className={style.row}>
                    {
                        products.map((data, index) => {
                            return (
                                <div key={index} onClick={() => details(data.id)}>
                                    <Col sm={12} className={style.col}>
                                        <Card className='shadow' className={style.card}>
                                            <div className={style.inner} >
                                                <Card.Img className={style.img} src={data.image} alt="Card image" />
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
                </Row>

            </Container>
            <Footer />
        </>
    )
}







{/* <main>
<Grid container justify='center' spacing={4}>
    {
        data.map((data, index) => {
            return (
                < Grid item key={index} xs={12} sm={6} md={4} lg={3} >
                    <Product data={data} />
                </Grid>
            )
        })
    }
</Grid>
</main> */}