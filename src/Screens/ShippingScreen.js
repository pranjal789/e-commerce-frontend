import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {shippingProduct} from "../actions/cartActions";
function ShippingScreen(props){
    const[address,setaddress]=useState("");
    const[city,setcity]=useState("");
    const[postalCode,setpostalCode]=useState("");
    const[country,setcountry]=useState("");

    const dispatch=useDispatch();

    // useEffect(()=>{
    //     if(userInfo){
    //         props.history.push("/")
    //     }
    //     return ()=> {
    //     };
    // },[userInfo]); // if userInfo state change, if code will run
    
    return <div>
         <div className="shipping-box">
      <h2 className="my-4">Shipping</h2>
      <form className="form">
      <input className="form-control my-3" onChange={(e)=>setaddress(e.target.value)} type="text" name="address" placeholder="Enter your Address"/>
      <input className="form-control my-3" onChange={(e)=>setcity(e.target.value)} type="text" name="city" placeholder="Enter your City" />      
      <input className="form-control my-3" onChange={(e)=>setpostalCode(e.target.value)} type="text" name="postalCode" placeholder="Enter your Postal Code"/>
      <input className="form-control my-3" onChange={(e)=>setcountry(e.target.value)} type="text" name="country" placeholder="Enter your Country"/> 
      <Link to="/payment">
      <button className="form-control btn btn-lg btn-dark" onClick={()=>dispatch(shippingProduct({address,city,postalCode,country}))}
    >Continue</button>
      </Link>
      </form>
    </div>
    </div>    
}
export default ShippingScreen;
