import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { cartReducer } from '../Reducer/CartReducer'
import { getProductDetails, getProductReducer, EditId } from '../Reducer/ProductReducer'
import { loginReducer, signupReducer } from '../Reducer/AccountReducer'
import { catagoryReducer, catagorDetailsyReducer, Edit_Id } from '../Reducer/CatagoryReducer'
import { getOrderReducer } from '../Reducer/OrderReducer'
import { productmodalReducr, productEditmodalReducr, catagorEditModalReducer,catagorAddModalReducer } from '../Reducer/ModalReducer'
import thunk from 'redux-thunk'


const mainReducetr = combineReducers({
    cartStore: cartReducer,
    ProductDetailsStore: getProductDetails,
    ProductStore: getProductReducer,
    LoginStore: loginReducer,
    signupStore: signupReducer,
    catagoryStore: catagoryReducer,
    OrderStore: getOrderReducer,
    CatagorDetailsStore: catagorDetailsyReducer,
    ProductModalStore: productmodalReducr,
    productEditmodalStore: productEditmodalReducr,
    EditIdStore: EditId,
    catagorEditModalStore: catagorEditModalReducer,
    catagorEditIdStore: Edit_Id,
    catagorAddModalStore: catagorAddModalReducer

});

const fromLocalStore = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const INITIAL_STATE = {
    cartStore: {
        cartList: fromLocalStore
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(mainReducetr, INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));