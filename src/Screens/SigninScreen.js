import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { userCredential } from "../actions/userAction";

function SigninScreen(props){
    const[email,setEmail]=useState("");
    const[password,setPwd]=useState("");
    const emailHandler=(e)=>{
        let inputEmail=e.target.value;
        setEmail(inputEmail);
    }
    const pwdHandler=(e)=>{
        let inputPwd=e.target.value;
        setPwd(inputPwd);
    }
    const [errors,seterrors]=useState({
        name:"",
        pwd:""
    });
    const dispatch=useDispatch();
    const userLogin=useSelector(state=>state.userReducer)
    const {loading,userInfo,error}=userLogin;
    const [validate,emailvalidate]=useState(true);
    // const redirect=props.location.search?props.location.search.split("=")[1]:"/";
    const validateForm=(event)=>{
       
            if(!password){
                seterrors({name:"password is required"});             
            }
            else if(password.length>5){
                seterrors({name:"Enter valid password"});
            }
            if(!email){
                seterrors({pwd:"email is required"});
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
                seterrors({pwd:"Enter valid email"});
            }
        return errors;
    }
   
    userInfo && console.log(userInfo.isAdmin)
    return <div>
     <div className="back-home"><Link to="/"><i class="fas fa-home fa-1x color"></i></Link></div>
        <form className="form">
            <input onChange={emailHandler} onBlur={validateForm} type="email" name="email" className="form-control my-4 " placeholder="Email address" value={email} required autofocus/>
            <input onChange={pwdHandler} onBlur={validateForm} type="password" name="password" className="form-control my-4 " placeholder="Password" value={password} required />
            {errors.name?<span style={{color:"red"}}>{errors.name}</span>:null}
            {errors.pwd?<span style={{color:"red"}}>{errors.pwd}</span>:null}
            <Link to ="/">
            <button className="btn btn-dark btn-block btn-lg rounded-pill py-1 " type="submit"
            onClick={()=>dispatch(userCredential(email,password))}>SignIn</button>
            </Link><br/>
            <label class="label">New to Electron?</label><br/>
            <a class="register" href="/register">Sign up</a>
        </form>
    </div>
  
}
export default SigninScreen;
