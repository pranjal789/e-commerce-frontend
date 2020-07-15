import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
//import {shippingProduct} from "../actions/cartActions";
function PaymentScreen(props){
    const[address,setaddress]=useState("");
    const dispatch=useDispatch();
    const userLogin=useSelector(state=>state.userReducer)
    const {loading,userInfo,error}=userLogin;
    return <div>
         <form className="form">
      <h3 className="my-3">Payment</h3>
      <label class="radio-inline font-size-lg"><input type="radio" name="optradio" checked/>Paypal</label>
      <Link to="placeorder">
      <button
       className=" form-control btn btn-lg btn-dark">Continue</button>
      </Link>
    </form>
    </div>    
}
export default PaymentScreen;
