import React, { useState, useEffect } from 'react'
import { Modal, Container, Row, Col, Form, Button } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FadeLoader from 'react-spinners/FadeLoader'
import axios from 'axios'
import { MenuItem, FormControl, InputLabel, Select, } from '@material-ui/core';
import { API_LINK } from '../../../../API_LINK/API_LINK';
import {  EditproductModaloff } from '../../../../Redux/Actions/modalAction'

export default function Editproduct(props) {

    const dispatch = useDispatch();
    const [loader, setloader] = useState(true)

    const [title, settitle] = useState('')
    const [price, setprice] = useState(0)
    const [description, setdescription] = useState('')
    const [image, setimage] = useState('')
    const [stock, setstock] = useState(0)
    const [category_name, setcategory_name] = useState('')
    const [category_id, setcategory_id] = useState({})
    const { catagory } = useSelector(state => state.catagoryStore)
    const  state  = useSelector(state => state.EditIdStore)
    const history = useHistory();

    useEffect(() => {
        setloader(false);
    }, [])

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        if (file) {
            const Base64 = await base64(file);
            setimage(Base64);
        }

    }

    const base64 = (file) => {
        return new Promise((resolv, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolv(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        })
    }

    var data = {
        title: title,
        price: parseInt(price),
        description: description,
        image: image,
        stock: parseInt(stock),
        category: {

            _id: category_id,
            name: category_name
        }
    }


    const edit = () => {

        axios.patch(API_LINK + 'products/' + state.editID, data, {
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            }
        }).then(res => {
            history.push('/dashboard')
        })
            .catch(res => res)

        dispatch(EditproductModaloff())

    }

    const setCate = (id) => {
        try {
            axios.get(API_LINK + 'category/' + id)
                .then(res => {
                    console.log(res);
                    setcategory_id(res.data._id);
                    setcategory_name(res.data.name)
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
                                            Edit product
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
                                                        <Form.Control placeholder="image" name="image" type="file" onChange={(e) => uploadImage(e)} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Modal.Body>

                            <Modal.Footer className='d-flex justify-content-center '>
                                <Button variant='outline-dark' onClick={() => edit(category_id)}>
                                Update
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
                </div>
            }
        </>


    )
}






