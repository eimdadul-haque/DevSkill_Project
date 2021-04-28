import React, { useEffect, useState } from 'react'
import style from './AdminDash.module.css'
import FadeLoader from 'react-spinners/FadeLoader'
import '.././../index.css'
import Navigation from '../../components/Navigation/Navigation'
import { Container, Row, Col, Card, Table, Button, Form } from 'react-bootstrap'
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
import { getallOrder } from '../../Redux/Actions/orderActions'
import { getCart } from '../../Redux/Actions/cartActions'
import { userIdAction, getAllUser } from '../../Redux/Actions/userActions'
import { useHistory } from 'react-router-dom'
import { API_LINK } from '../../API_LINK/API_LINK'
import axios from 'axios'

function AdminDash() {


    const history = useHistory()
    const { products } = useSelector(state => state.ProductStore)
    const { catagory } = useSelector(state => state.catagoryStore)
    const { orderList } = useSelector(state => state.OrderStore)
    const { allUser } = useSelector(state => state.getAllUserStore)


    const { module } = useSelector(state => state.ProductModalStore)
    const { edit } = useSelector(state => state.productEditmodalStore)
    const { catagoryModal } = useSelector(state => state.catagorEditModalStore)
    const { AddcatagoryModal } = useSelector(state => state.catagorAddModalStore)
    const [loader, setloader] = useState(true)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProduts());
        dispatch(getCatagoty());
        dispatch(getCart());
        dispatch(getallOrder());
        dispatch(getAllUser());
        setloader(false);
    }, [])


    const removeProduct = (id) => {
        dispatch(productDelete(id))
        dispatch(getProduts());
        window.location.reload()
    }

    const removeCategory = (id) => {
        dispatch(categorytDelete(id))
        dispatch(getCatagoty());
        window.location.reload()
    }

    const user_id = (_id) => {
        dispatch(userIdAction(_id))
        history.push('/UpdateUser')
    }

    const add_user = () => {
        history.push('/AddUser')

    }
    const deleteUser = (id) => {
        console.log(id, "dell");
        axios.delete(API_LINK + 'user/' + id, {
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            }
        })
            .then((res) => res.json())
            .catch((err) => err)

        window.location.reload()
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
                                                Total Order <h6>{orderList.length}</h6>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} lg={3}>
                                        <Card className='shadow '>
                                            <Card.Header className='text-center'>
                                                Total User <h6>{allUser.length}</h6>
                                            </Card.Header>
                                        </Card>
                                    </Col>
                                </Row>


                                <Row className='mt-3'  >
                                    <Col sm={12} md={6} >
                                        <Card className='shadow'>
                                            <Card.Header className='d-flex justify-content-between'>
                                                <div className='text-info font-weight-bolder'>
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
                                                            <th>#</th>
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
                                                                                    <td>{index + 1}</td>
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
                                                <div className=' text-info font-weight-bolder'>
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
                                                            <th>#</th>
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
                                                                                <td>{index + 1}</td>
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
                                                            <th>Order ID</th>
                                                            <th>User Name</th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        orderList.length === 0 ? "No data in database" :
                                                            <> <tbody >
                                                                {
                                                                    orderList.map((data, index) => {
                                                                        return (
                                                                            <tr key={index} onClick={""}>
                                                                                <td>{index + 1}</td>
                                                                                <td>{data._id}</td>
                                                                                <td>{data.userId.username}</td>
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
                                    <Col sm={12} md={6} >
                                        <Card className='shadow '>
                                            <Card.Header className='d-flex justify-content-between'>
                                                <div className=' text-info font-weight-bolder'>
                                                    User Table
                                                </div>
                                                <div >
                                                    <Button onClick={() => add_user()} variant='outline-dark'>Add User</Button>
                                                </div>
                                            </Card.Header>
                                            <div className={style.scrollbar}>
                                                <Table striped bordered hover style={{ backgroundColor: 'white' }} >
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>User ID</th>
                                                            <th>User Name</th>
                                                            <th>User Role</th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        allUser.length === 0 ? "No data in database" :
                                                            <> <tbody >
                                                                {
                                                                    allUser.map((data, index) => {
                                                                        return (
                                                                            <tr key={index} onClick={""}>
                                                                                <td>{index + 1}</td>
                                                                                <td>{data._id}</td>
                                                                                <td>{data.username}</td>
                                                                                <td>{data.role}</td>
                                                                                <td ><span className='text-danger' onClick={() => deleteUser(data._id)} ><Delete /></span></td>
                                                                                <td ><span className='text-info' onClick={() => user_id(data._id)}  ><Edit /></span></td>
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

export default AdminDash;





{/* <Card.Body>
<Row>

    <Col lg={9}>
        <Form.Group controlId='editUser'>
            <Form.Control placeholder="Enter User Id" name="editUser" type="text" onChange={(e) => setuserId(e.target.value)} />
        </Form.Group>
    </Col>
    <Col lg={3}>
        <Button style={{ width: '100%' }} onClick={() => user_id(userId)} variant='info'>User Details</Button>
    </Col>
</Row>
<div className='row'>
    <Col lg={9}>
        <Form.Group controlId='deleteUser'>
            <Form.Control placeholder="Enter User Id" name="deleteUser" type="text" onChange={(e) => setdelUser(e.target.value)} />
        </Form.Group>
    </Col>
    <Col lg={3}>
        <Button style={{ width: '100%' }} onClick={() => deleteUser(delUser)} variant='danger'>Delete</Button>
    </Col>
</div>
<Row>

    <Col lg={9}>
        <Form.Group controlId='editUser'>
            <Form.Control placeholder="Enter User Id" name="editUser" type="text" onChange={(e) => setuserId(e.target.value)} />
        </Form.Group>
    </Col>
    <Col lg={3}>
        <Button style={{ width: '100%' }} onClick={() => user_id(userId)} variant='info'>Update</Button>
    </Col>
</Row>
</Card.Body> */}