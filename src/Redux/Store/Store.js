import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { getProductDetails, getProductReducer, EditId } from '../Reducer/ProductReducer'
import { loginReducer, signupReducer } from '../Reducer/AccountReducer'
import { catagoryReducer, catagorDetailsyReducer, Edit_Id } from '../Reducer/CatagoryReducer'
import { getOrderReducer, addOrderReducer } from '../Reducer/OrderReducer'
import { getCartReducer } from '../Reducer/CartReducer'
import { productmodalReducr, productEditmodalReducr, catagorEditModalReducer, catagorAddModalReducer } from '../Reducer/ModalReducer'
import thunk from 'redux-thunk'


const mainReducetr = combineReducers({
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
    catagorAddModalStore: catagorAddModalReducer,
    getCartStore: getCartReducer,
    addOrderStore: addOrderReducer

});

const fromLocalStore = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const INITIAL_STATE = {
    cartStore: {
        cartList: fromLocalStore
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(mainReducetr, INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));