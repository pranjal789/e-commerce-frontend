import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Cookie from "js-cookie";
function AdminScreen(){
    const login=useSelector(state=>state.userReducer)
  const {userInfo}=login;
  const[logout, setlogout]=useState(true);
  const refreshPage=()=>{
    window.location.reload(false);
} 
    return(<div>
                <a className="link">{userInfo &&logout ? <div><i className="fas fa-user fa-1x pr-1 "/>
                {userInfo.name}</div>:<a class="sign" href="/signin">Signin</a>}</a>
                {userInfo && 
                <button onClick={()=>{
                    setlogout(false);
                    Cookie.set('userInfo',JSON.stringify("")) ;
                    refreshPage();
                }} className="Signout"><a href="/signin">Signout</a></button>}
        <h1 className="admin">Hi Admin</h1>
        <Link to="/products">
        <button className="btn btn-dark btn-lg prd-btn">Products</button>
        </Link>
        <button className="btn btn-dark btn-lg -btn">Orders</button>
        </div>
       
    )
}
export default AdminScreen;