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
import { getCart } from '../../Redux/Actions/cartActions'

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
        dispatch(getCart());
        setloader(false);
    }, [dispatch])

    const removeProduct = (id) => {
        dispatch(productDelete(id))
        dispatch(getProduts());
    }
    const removeCategory = (id) => {
        dispatch(categorytDelete(id))
        dispatch(getCatagoty());
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


                                
                            </Container>

                        </div>
                        <Footer />
                    </div>
            }
        </>

    )
}

export default AdminDash;





