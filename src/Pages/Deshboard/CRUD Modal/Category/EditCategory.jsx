import React, { useState, useEffect } from 'react'
import { Modal, Container, Row, Col, Form, Button} from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import FadeLoader from 'react-spinners/FadeLoader'
import { API_LINK } from '../../../../API_LINK/API_LINK';
import axios from 'axios';
import { EditcategoryModaloff } from '../../../../Redux/Actions/modalAction'

export default function EditCategory(props) {

    const dispatch = useDispatch();
    const [loader, setloader] = useState(true)
    const state = useSelector(state => state.catagorEditIdStore)
    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [image, setimage] = useState('')

    useEffect(() => {
        setloader(false);
    }, [])

    const edit = () => {

        axios.patch(API_LINK + 'category/' + state.edit_ID, {
            name: name,
            description: desc,
            image: image
        }, {
            headers: {
                authorization: "bearer " + sessionStorage.getItem('token')
            }
        }).then(res => res.status)
            .catch(res => res)

        dispatch(EditcategoryModaloff())

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
                                            Edit Category
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
                                                        <Form.Control placeholder="name" name="name" type="name" onChange={(e) => setname(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group controlId='description'>
                                                        <Form.Control placeholder="description" name="description" type="text" onChange={(e) => setdesc(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group controlId='image'>
                                                        <Form.Control placeholder="image" name="image" type="text" onChange={(e) => setimage(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Modal.Body>

                            <Modal.Footer className='d-flex justify-content-center '>
                                <Button variant='outline-dark' onClick={() => edit()}>
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





