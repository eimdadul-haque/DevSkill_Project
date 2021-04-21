import React, { useEffect, useState } from 'react'
import style from './AdminDash.module.css'
import FadeLoader from 'react-spinners/FadeLoader'
import '.././../index.css'
import Navigation from '../../components/Navigation/Navigation'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
    productModaloff, productModalon, EditproductModalon, EditproductModaloff, EditcategoryModalon,
    EditcategoryModaloff, AddcategoryModaloff, AddcategoryModalon
} from '../../Redux/Actions/modalAction'
import { getProduts, productDelete } from '../../Redux/Actions/productActions'
import { categorytDelete, getCatagoty } from '../../Redux/Actions/categoryActions'
import Footer from '../../components/Footer/Footer'
import AddProduct from './CRUD Modal/Product/AddProduct'
import Editproduct from './CRUD Modal/Product/Editproduct'
import EditCategory from './CRUD Modal/Category/EditCategory'
import AddCategory from './CRUD Modal/Category/AddCategory'
import { Delete } from '@material-ui/icons'
import { Edit } from '@material-ui/icons'

function AdminDash() {

    const { products } = useSelector(state => state.ProductStore)
    const { catagory } = useSelector(state => state.catagoryStore)
    const { orderList } = useSelector(state => state.OrderStore)


    const { module } = useSelector(state => state.ProductModalStore)
    const { edit } = useSelector(state => state.productEditmodalStore)
    const { catagoryModal } = useSelector(state => state.catagorEditModalStore)
    const { AddcatagoryModal } = useSelector(state => state.catagorAddModalStore)
    const [loader, setloader] = useState(true)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduts());
        dispatch(getCatagoty());
        setloader(false);
    }, [module, edit, catagoryModal, AddcatagoryModal, dispatch])

    const removeProduct = (id) => {
        dispatch(productDelete(id))
    }
    const removeCategory = (id) => {
        dispatch(categorytDelete(id))
    }

    return (
        <>
            {
                loader === true ? <div className='App'><FadeLoader /></div> :
                    <div>
                        <Navigation />
                        <div className='mt-3' id={style.main}>
                            <Container fluid>
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
                                                Total Categoty <h6>0</h6>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} lg={3}>
                                        <Card className='shadow '>
                                            <Card.Header className='text-center'>
                                                Total Order <h6>0</h6>
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
                                                    <Button onClick={() => dispatch(productModalon())} variant='outline-dark'>Add Product</Button>
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
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        products.length === 0 ? "No data in database" :
                                                            <>
                                                                <tbody >
                                                                    {
                                                                        products.map((data, index) => {
                                                                            return (


                                                                                <tr key={index}>
                                                                                    <td><img style={{ width: '50px', height: '50px' }} src={data.image} alt="..." /></td>
                                                                                    <td>{data.title}</td>
                                                                                    <td>{data.price} </td>
                                                                                    <td>{data.stock}</td>
                                                                                    <td ><span className='text-danger' onClick={() => removeProduct(data._id)} ><Delete /></span></td>
                                                                                    <td ><span className='text-info' onClick={() => dispatch(EditproductModalon(data._id))} ><Edit /></span></td>
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
                                        <AddProduct show={module} onHide={() => dispatch(productModaloff())} />
                                        <Editproduct show={edit} onHide={() => dispatch(EditproductModaloff())} />
                                    </Col>
                                    <Col sm={12} md={6} >
                                        <Card className='shadow'>
                                            <Card.Header className='d-flex justify-content-between'>
                                                <div className='text-info'>
                                                    Category Table
                                                </div>
                                                <div >
                                                    <Button onClick={() => dispatch(AddcategoryModalon())} variant='outline-dark'>Add Category</Button>
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
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        catagory.length === 0 ? "No data in database" :
                                                            <> <tbody >
                                                                {
                                                                    catagory.map((data, index) => {
                                                                        return (


                                                                            <tr key={index}>
                                                                                <td><img style={{ width: '50px', height: '50px' }} src={data.image} alt="..." /></td>
                                                                                <td>{data.name}</td>
                                                                                <td>{data.description} </td>
                                                                                <td ><span onClick={() => removeCategory(data._id)} className='text-danger' ><Delete /></span></td>
                                                                                <td ><span className='text-info' onClick={() => dispatch(EditcategoryModalon(data._id))} ><Edit /></span></td>
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
                                        <AddCategory show={AddcatagoryModal} onHide={() => dispatch(AddcategoryModaloff())} />
                                        <EditCategory show={catagoryModal} onHide={() => dispatch(EditcategoryModaloff())} />
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





