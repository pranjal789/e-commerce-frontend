import React, { useState, useEffect } from "react";
// import data from "./data";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SigninScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import { useSelector } from "react-redux";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceorderScreen from "./Screens/PlaceorderScreen";
import AdminScreen from "./Screens/AdminScreen";
import SuccessScreen from "./Screens/SuccessScreen";

function App() {
  const login=useSelector(state=>state.userReducer)
  const {userInfo}=login;
      
    const cart=useSelector(state=>state.cart);
    const {cartItems}=cart;
   
  return (
      <div>
      
      <Router>
      {!userInfo && (
      <div>
        <Route path="/product/:id" exact component={ProductScreen} />
        <Route path="/" exact  component={HomeScreen} />
        <Route path="/cart/:id" exact component={CartScreen} />
        <Route path="/signin" exact component={SigninScreen} />
        <Route path="/register" exact component={RegisterScreen}/>
       
        </div>
      )}
      {userInfo && (userInfo.name!="Pranjal" ?
    <div>         
    <main className="main">
        <div className="content">
        <Route path="/product/:id" exact component={ProductScreen} />
        <Route path="/" exact  component={HomeScreen} />
        <Route path="/cart/:id" exact component={CartScreen} />
        <Route path="/signin" exact component={SigninScreen} />
        <Route path="/register" exact component={RegisterScreen}/>
        <Route path="/shipping" exact component={ShippingScreen}/>
        <Route path="/payment" exact component={PaymentScreen}/>
        <Route path="/placeorder" exact component={PlaceorderScreen}/>
        <Route path="/success" exact component={SuccessScreen}/>
        </div>
        </main>
</div>: 
<div>
<Route path="/" exact component={AdminScreen}/>
<Route path="/products" exact component={ProductsScreen} />
<Route path="/signin" exact component={SigninScreen} />
</div>
)}    
</Router>
</div>
  );
}

export default App;
