import React, { useState, useEffect } from 'react'
import { Modal, Container, Row, Col, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FadeLoader from 'react-spinners/FadeLoader'
import axios from 'axios'
import { MenuItem, FormControl, InputLabel, Select, } from '@material-ui/core';
import { API_LINK } from '../../../API_LINK/API_LINK';
import { getCatagotyDetails } from '../../../Redux/Actions/categoryActions'

export default function AddProduct(props) {

    const dispatch = useDispatch();
    const [loader, setloader] = useState(true)

    const [title, settitle] = useState('')
    const [price, setprice] = useState(0)
    const [description, setdescription] = useState('')
    const [image, setimage] = useState('')
    const [stock, setstock] = useState(0)
    const [category_id, setcategory_id] = useState({})
    console.log(image, "===image");
    const { catagory } = useSelector(state => state.catagoryStore)
    const history = useHistory();

    useEffect(() => {
        setloader(false);
    }, [])

    const Add = (category_id) => {
        // fetch(API_LINK + "products/", {
        //     method: "POST",
        //     headers: {
        //         authorization: "bearer " + sessionStorage.getItem('token')
        //     },
        //     body: JSON.stringify({
        //         title: title,
        //         price: price,
        //         description: description,
        //         image: "BASE64",
        //         stock: stock,
        //         category: {
        //             _id: category_id
        //         }
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((json) => console.log(json));

        axios.post(API_LINK + 'products/', {
            title: title,
            price: price,
            description: description,
            image: "BASE64",
            stock: stock,
            category: {

                _id: category_id._id,
                name: catagory.name
            }
        }, {
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            }
        }).then(res => res.status)
            .catch(res => res)

    }

    const setCate = (id) => {
        try {
            axios.get(API_LINK + 'category/' + id)
                .then(res => {
                    console.log(res.data, "===DATA");
                    setcategory_id(res.data)
                })
                .catch(res => res);

        } catch (error) {

        }
    }

    return (
        <>
            {loader === true ? <div className='App'><FadeLoader /></div> :
                <div>
                    <Container>
                        <Modal {...props} size='md' centered aria-labelledby="contained-model-title-vcenter">

                            <Row>
                                <Col xs={6} lg={6}>
                                    <div style={{ marginLeft: '10%' }}>
                                        <Modal.Title id='contained-model-title-vcenter'>
                                            SignUp
                                        </Modal.Title>
                                    </div>
                                </Col>
                                <Col xs={6} lg={6}>
                                    <div className='d-flex justify-content-end mr-3'>
                                        <Modal.Title id='contained-model-title-vcenter'>
                                            <div onClick={props.onHide}>
                                                <CloseIcon />
                                            </div>
                                        </Modal.Title>
                                    </div>
                                </Col>

                            </Row>

                            <Modal.Body>

                                <Row>
                                    <Col xs={12}>
                                        <Form >
                                            <Row>
                                                <Col md={12} >
                                                    <Form.Group style={{ width: '100%' }} controlId='title'>
                                                        <Form.Control placeholder="title" name="title" type="text" onChange={(e) => settitle(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group controlId='price'>
                                                        <Form.Control placeholder="price" name="price" type="number" onChange={(e) => setprice(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group controlId='description'>
                                                        <Form.Control placeholder="description" name="description" type="text" onChange={(e) => setdescription(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group controlId='stock'>
                                                        <Form.Control placeholder="stock" name="stock" type="number" onChange={(e) => setstock(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group >
                                                        <FormControl style={{ width: '100%' }} variant='outlined' >
                                                            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={category_id}
                                                                onChange={(e) => setCate(e.target.value)}
                                                                label="Category"
                                                            >
                                                                {catagory.map((data) => {
                                                                    return (
                                                                        <MenuItem key={data._id} value={data._id}>{data.name}</MenuItem>
                                                                    )
                                                                })}

                                                            </Select>
                                                        </FormControl>
                                                    </Form.Group>
                                                    <Form.Group controlId='image'>
                                                        <Form.Control placeholder="image" name="image" type="file" onChange={(e) => setimage(e.target.files)} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Modal.Body>

                            <Modal.Footer className='d-flex justify-content-center '>
                                <Button variant='outline-dark' onClick={() => Add(category_id)}>
                                    Add Product
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
                </div>
            }
        </>


    )
}






// <Row>
// <Col md={12}>
//     <Row>
//         <Col xs={4} md={4} lg={4}>
//             <Form.Group controlId='city'>
//                 <Form.Control placeholder="city" name="city" type="city" />
//             </Form.Group>
//         </Col>
//         <Col xs={4} md={4} lg={4}>
//             <Form.Group controlId='street'>
//                 <Form.Control placeholder="street" name="street" type="street" />
//             </Form.Group>
//         </Col>
//         <Col xs={4} md={4} lg={4}>
//             <Form.Group controlId='street number'>
//                 <Form.Control placeholder="street number" name="street number" type="street number" />
//             </Form.Group>
//         </Col>
//     </Row>
// </Col>
// </Row>
// <Row>
// <Col md={12}>
//     <Row>
//         <Col xs={4} md={4} lg={4}>
//             <Form.Group controlId='zipcode'>
//                 <Form.Control placeholder="zipcode" name="zipcode" type="zipcode" />
//             </Form.Group>
//         </Col>
//         <Col xs={4} md={4} lg={4}>
//             <Form.Group controlId='lat'>
//                 <Form.Control placeholder="lat" name="lat" type="lat" />
//             </Form.Group>
//         </Col>
//         <Col xs={4} md={4} lg={4}>
//             <Form.Group controlId='long'>
//                 <Form.Control placeholder="long" name="long" type="long" />
//             </Form.Group>
//         </Col>
//     </Row>
// </Col>
// </Row>