import React, { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import HomeIcon from '@material-ui/icons/Home';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Badge } from '@material-ui/core'
import { getCart } from '../../Redux/Actions/cartActions'

export default function Navigation() {
    var sum = 0;
    var { cartNum } = useSelector(state => state.getCartStore)
    const dispatch = useDispatch()
    const [state, setstate] = useState('')

    if (cartNum) {
        for (let index = 0; index < cartNum.length; index++) {
            var sum = sum + cartNum[index].quantity;
        }
    }
    const logout = () => {
        sessionStorage.clear();
        dispatch(getCart());
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to='/' style={{ textDecoration: 'none', borderRadius: '10px', color: 'white' }}>FakeCommerce</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Form inline>
                                <FormControl style={{ width: '80%' }} type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                        </Nav  >

                        <Nav className="mr-3">
                            <NavLink style={{ textDecoration: 'none', borderRadius: '10px' }} to='/' className='d-inline p-1 bg-dark text-white'>
                                <HomeIcon style={{ height: '25px', width: '25px' }} />
                            </NavLink>
                        </Nav>

                        {
                            sessionStorage.getItem('token') ? <Nav className="mr-3">
                                <NavLink style={{ textDecoration: 'none', borderRadius: '10px' }} to='/dashboard' className='d-inline p-1 bg-dark text-white'>
                                    <DashboardIcon style={{ height: '25px', width: '25px' }} />
                                </NavLink>
                            </Nav> : <></>
                        }
                        <Nav className="mr-3">
                            <NavLink style={{ textDecoration: 'none', borderRadius: '10px' }} to='/cart' className='d-inline p-1 bg-dark text-white'>
                                <Badge badgeContent={sum} color='secondary'><ShoppingCart style={{ height: '25px', width: '25px' }} /></Badge>
                            </NavLink>
                        </Nav>
                        {
                            sessionStorage.getItem('token') == null ? <Nav >
                                <NavLink style={{ textDecoration: 'none', borderRadius: '10px' }} to='/login' className='d-inline p-1 bg-dark text-white'>
                                    <LockOpenIcon style={{ height: '25px', width: '25px' }} />
                                </NavLink>
                            </Nav> : <>
                                <Nav className="mr-3">
                                    <NavLink style={{ textDecoration: 'none', borderRadius: '10px' }} to='/profile' className='d-inline p-1 bg-dark text-white'>
                                      <AccountBoxIcon style={{ height: '25px', width: '25px' }} />
                                    </NavLink>
                                </Nav>
                                <Nav >
                                    <NavLink onClick={() => logout()} style={{ textDecoration: 'none', borderRadius: '10px' }} to='/login' className='d-inline p-1 bg-dark text-white'>
                                        <ExitToApp />
                                    </NavLink>
                                </Nav>
                            </>


                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}


