import React, { useEffect, useState } from 'react'
import style from './AdminDash.module.css'
import FadeLoader from 'react-spinners/FadeLoader'
import '.././../index.css'
import Navigation from '../../components/Navigation'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ActionType from '../../Redux/ActionType'
import Footer from '../../components/Footer'
import AddProduct from './CRUD Modal/AddProduct'
import AddCategory from './CRUD Modal/AddCategory'
import { Delete } from '@material-ui/icons'

function AdminDash() {

    const { products } = useSelector(state => state.ProductStore)
    const { catagory } = useSelector(state => state.catagoryStore)
    const { orderList } = useSelector(state => state.OrderStore)
    var products_ = []

    const [modalProduct, setmodalProduct] = useState(false);
    const [modalCategory, setmodalCategory] = useState(false);

    const [loader, setloader] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {
        setloader(false);
    }, [])



    const addProduct = () => {

    }


    return (
        <>
            {
                loader === true ? <div className='App'><FadeLoader /></div> :
                    <div>
                        <Navigation />
                        <div className={'style.main', 'mt-3'}>
                            <Container>
                                <Row className={style.row}  >
                                    <Col sm={12} md={6} lg={3}>
                                        <Card className='shadow'>
                                            <Card.Header className='text-center'>
                                                Total Product<h6>{products.length}</h6>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} lg={3}>
                                        <Card className='shadow '>
                                            <Card.Header className='text-center'>
                                                Total Category <h6>{catagory.length}</h6>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} lg={3}>
                                        <Card className='shadow '>
                                            <Card.Header className='text-center'>
                                                Total Catagoty <h6>hhh</h6>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} lg={3}>
                                        <Card className='shadow '>
                                            <Card.Header className='text-center'>
                                                Total Order <h6>hhh</h6>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                </Row>


                                <Row className='mt-3'  >
                                    <Col sm={12} md={6} >
                                        <Card className='shadow'>
                                            <Card.Header className='d-flex justify-content-between'>
                                                <div className='text-info'>
                                                    Product Table
                                                </div>
                                                <div >
                                                    <Button onClick={() => setmodalProduct(true)} variant='outline-dark'>Add Product</Button>
                                                </div>
                                            </Card.Header>
                                            <div className={style.scrollbar}>
                                                <Table striped bordered hover style={{ backgroundColor: 'white' }} >
                                                    <thead>
                                                        <tr>
                                                            <th>Image</th>
                                                            <th>Title</th>
                                                            <th>Price</th>
                                                            <th>Stock</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        products.length === 0 ? "No data in database" :
                                                            <>
                                                                {
                                                                    products.map((data, index) => {
                                                                        return (

                                                                            <tbody key={index}>
                                                                                <tr>
                                                                                    <td><img style={{ width: '50px', height: '50px' }} src={data.image} alt="..." /></td>
                                                                                    <td>{data.title}</td>
                                                                                    <td>{data.price} </td>
                                                                                    <td>{data.stock}</td>
                                                                                    <td ><span className='text-danger' ><Delete /></span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        )
                                                                    })
                                                                }
                                                            </>
                                                    }
                                                </Table>
                                            </div>
                                        </Card>
                                        <AddProduct show={modalProduct} onHide={() => setmodalProduct(false)} />
                                    </Col>
                                    <Col sm={12} md={6} >
                                        <Card className='shadow'>
                                            <Card.Header className='d-flex justify-content-between'>
                                                <div className='text-info'>
                                                    Category Table
                                                </div>
                                                <div >
                                                    <Button onClick={() => setmodalCategory(true)} variant='outline-dark'>Add Category</Button>
                                                </div>
                                            </Card.Header>
                                            <div className={style.scrollbar}>
                                                <Table striped bordered hover style={{ backgroundColor: 'white' }} >
                                                    <thead>
                                                        <tr>
                                                            <th>Image</th>
                                                            <th>Name</th>
                                                            <th>Description</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        catagory.length === 0 ? "No data in database" :
                                                            <>
                                                                {
                                                                    catagory.map((data, index) => {
                                                                        return (

                                                                            <tbody key={index}>
                                                                                <tr>
                                                                                    <td><img style={{ width: '50px', height: '50px' }} src={data.image} alt="..." /></td>
                                                                                    <td>{data.name}</td>
                                                                                    <td>{data.description} </td>
                                                                                    <td ><span className='text-danger' ><Delete /></span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        )
                                                                    })
                                                                }
                                                            </>
                                                    }
                                                </Table>
                                            </div>
                                        </Card>
                                        <AddCategory show={modalCategory} onHide={() => setmodalCategory(false)} />
                                    </Col>
                                </Row>
                                <Row className='mt-2 mb-2'  >
                                    <Col sm={12} md={6} >
                                        <Card className='shadow card_D'>
                                            <Card.Header className='d-flex justify-content-between'>
                                                <div className='text-info'>
                                                    User Table
                                                </div>

                                                <div >
                                                    <Button variant='outline-dark'>Add User</Button>
                                                </div>
                                            </Card.Header>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td colSpan="2">Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </Card>
                                        {/* <AddProduct show={modal} onHide={() => setmodal(false)} /> */}
                                    </Col>
                                    <Col sm={12} md={6} >
                                        <Card className='shadow card_D'>
                                            <Card.Header className='d-flex justify-content-between'>
                                                <div className='text-info'>
                                                    User Table
                                                </div>

                                                <div >
                                                    <Button variant='outline-dark'>Add User</Button>
                                                </div>
                                            </Card.Header>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td colSpan="2">Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </Table>

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

export default AdminDash;





