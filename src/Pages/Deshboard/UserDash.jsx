import React, { useEffect, useState } from 'react'
import style from './UserDash.module.css'
import FadeLoader from 'react-spinners/FadeLoader'
import '.././../index.css'
import Navigation from '../../components/Navigation/Navigation'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import { getMyOrder } from '../../Redux/Actions/orderActions'

function UserDash() {




    const { myOrder } = useSelector(state => state.myOrderStore)
    console.log(myOrder, "===myOrder");


    const [loader, setloader] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyOrder());
        setloader(false);
    }, [dispatch])



    return (
        <>
            {
                loader === true ? <div className='App'><FadeLoader /></div> :
                    <div>
                        <Navigation />
                        <div className='mt-3 ' id={style.main}>
                            <Container >
                                <Row className={style.row}  >
                                    <Col sm={12} md={12} lg={12}>
                                        <Card className='shadow '>
                                            <Card.Header className='text-center'>
                                                Total Order <h6>{myOrder.length}</h6>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                </Row>

                                <Row className='mt-3 d-flex justify-content-center'  >
                                    <Col sm={12} md={6} >
                                        <Card className='shadow'>
                                            <Card.Header className='d-flex justify-content-between'>
                                                <div className='text-info font-weight-bolder'>
                                                    Order Table
                                                </div>
                                            </Card.Header>
                                            <div className={style.scrollbar}>
                                                <Table striped bordered hover style={{ backgroundColor: 'white' }} >
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Order Id</th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        myOrder.length === 0 ? "No data in database" :
                                                            <>
                                                                <tbody >
                                                                    {
                                                                        myOrder.map((data, index) => {
                                                                            return (
                                                                                <tr key={index}>
                                                                                    <td>{index + 1}</td>
                                                                                    <td>{data._id}</td>
                                                                                </tr>
                                                                            )
                                                                        })
                                                                    }
                                                                </tbody>
                                                            </>
                                                    }
                                                </Table>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>

                            </Container>

                        </div>
                        <Footer />
                    </div>
            }
        </>

    )
}

export default UserDash;





