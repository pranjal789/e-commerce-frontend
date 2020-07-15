import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reduceQuantity } from "../actions/reduceQuantityAction";

function PlaceorderScreen(props){
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart);
    const {cartItems,shipping}=cart;

    return( <div className="main-place">
            <div className="prod-shipping box">
            <h3 className="mt-4">Shipping Address</h3>
                <p>{shipping.address},</p>
                <p>{shipping.city},</p>
                <p>{shipping.postalCode},</p>
                <p>{shipping.country}</p>
            </div>
            <div className="prod-payment box my-4">
                <h3>Payment</h3>
                <p>Payment Method:paypal</p>
            </div><hr/>
            <div className="Shopping-Cart my-4">
            <h3 box>Shopping Cart</h3>
        <hr></hr>
        {cartItems.length==0?<h3>"CART IS EMPTY"</h3>:
        cartItems.map(prod=>
        <div className="cart-details">
        <div><img className="cart-image my-4" src={prod.productImage} alt="no pic"/></div>
        <div className="cart-entry">
        <div className="cart-prodName">{prod.productName}</div>
        <div className="cart-quantity">Quantity:{prod.qty}</div>
        <div className="cart-price">Price:{prod.productPrice}</div>
        </div>
        </div>
        )}
        </div>
        {cartItems.length!=0 &&
        <div className="check-out">
        <h3>Subtotal({cartItems.reduce((a,c)=>a+c.qty,0)} items)
        :
        {cartItems.reduce((a,c)=>a+c.productPrice*c.qty,0)}
        </h3>
        <Link to="/success">
        <div><button onClick={()=>dispatch(reduceQuantity(cartItems))}className="btn btn-lg btn-dark">Place order</button></div>
        </Link>
        </div>}     
        </div>
    ) 
}
export default PlaceorderScreen;