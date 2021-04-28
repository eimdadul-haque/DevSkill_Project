import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  Product, Cart, Details, Login, Oreder, AdminDash,
  UserDash, ProtectedRoute, NotFound, ProtectedRouteCart, UpdateUser,AddUser, Profile
} from './global import'
import { useDispatch, useSelector } from 'react-redux';
import { getProduts } from './Redux/Actions/productActions';
import Loader from 'react-spinners/FadeLoader'
import './index.css'
import { getallOrder } from './Redux/Actions/orderActions'
import { getCart } from './Redux/Actions/cartActions'
function App() {

  const { loding } = useSelector(state => state.ProductStore)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduts());
    dispatch(getCart());
    dispatch(getallOrder());
  }, [])

  return (
    < >
      {loding === true ? <div className='App'><Loader /></div> :
        <Router>
          <Switch>
            <Route path='/' exact component={Product} />
            <Route path='/login' exact component={Login} />
            <Route path='/details/:id' exact component={Details} />
            <Route path='/oreder' exact component={Oreder} />
            <Route path='/404' exact component={NotFound} />
            <Route path='/dashboard' exact>
              <ProtectedRoute component_Admin={AdminDash} component_User={UserDash} />
            </Route>
            <Route path='/profile' exact>
              <ProtectedRouteCart component={Profile} />
            </Route>
            <Route path='/cart' exact>
              <ProtectedRouteCart component={Cart} />
            </Route>
            <Route path='/AddUser' exact>
              <ProtectedRouteCart component={AddUser} />
            </Route>
            <Route path='/UpdateUser' exact>
              <ProtectedRouteCart component={UpdateUser} />
            </Route>
            <Redirect to='/404' />
          </Switch>
        </Router>
      }
    </>
  )
}

export default App
