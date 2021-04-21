import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { cartReducer } from '../Reducer/CartReducer'
import { getProductDetails, getProductReducer } from '../Reducer/ProductReducer'
import { loginReducer, signupReducer } from '../Reducer/AccountReducer'
import { catagoryReducer, catagorDetailsyReducer } from '../Reducer/CatagoryReducer'
import { getOrderReducer } from '../Reducer/OrderReducer'
import thunk from 'redux-thunk'


const mainReducetr = combineReducers({
    cartStore: cartReducer,
    ProductDetailsStore: getProductDetails,
    ProductStore: getProductReducer,
    LoginStore: loginReducer,
    signupStore: signupReducer,
    catagoryStore: catagoryReducer,
    OrderStore: getOrderReducer,
    CatagorDetailsStore: catagorDetailsyReducer
});

const fromLocalStore = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const INITIAL_STATE = {
    cartStore: {
        cartList: fromLocalStore
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(mainReducetr, INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));