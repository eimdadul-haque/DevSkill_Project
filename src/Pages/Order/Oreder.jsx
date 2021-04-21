import React from 'react';
import { Form, Button } from 'react-bootstrap'
import style from './Oreder.module.css'

export default function Oreder() {

    var a = "Hello";
    return (
        <div className={style.main}>
            <Form className={style.form}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Use Id</Form.Label>
                    <Form.Control value={a } type="text" placeholder={a} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Confirm Order
                </Button>
            </Form>
        </div>
    )
}
