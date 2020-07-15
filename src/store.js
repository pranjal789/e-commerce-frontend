import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { productListReducer,productDetailReducer,productSaveReducer, deleteProductReducer } from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducers";
import {userReducer, registerReducer} from "./reducers/userReducer";
import Cookie from "js-cookie";
import { quantityReducer } from "./reducers/quantityReducer";

const cartItems=Cookie.getJSON("cartItems")||[]; // managing cookie
const userInfo=Cookie.getJSON("userInfo")||null;
const userReg=Cookie.getJSON("userReg")||null;
const initialState={cart:{cartItems},userReducer:{userInfo},registerReducer:{userReg}} //managing cookie
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailReducer,
    cart:cartReducer,
    userReducer,
    register:registerReducer,
    productSave:productSaveReducer,
    productDelete:deleteProductReducer,
    quantdelete:quantityReducer
    
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
//thunk allows to perfrom async inside actions
export default store;