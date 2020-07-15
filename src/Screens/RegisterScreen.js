import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { registerUser } from "../actions/userAction";

function SigninScreen(props){
    const dispatch=useDispatch();

    const[email,setEmail]=useState("");
    const[password,setPwd]=useState("");
    const[name1,setName]=useState("");
    const[repassword,setrePwd]=useState("");
    const emailHandler=(e)=>{
        let inputEmail=e.target.value;
        setEmail(inputEmail);
    }
    const pwdHandler=(e)=>{
        let inputPwd=e.target.value;
        setPwd(inputPwd);
    }
    const nameHandler=(e)=>{
        let inputName=e.target.value;
        setName(inputName);
    }
    const repwdHandler=(e)=>{
        let inputrepwd=e.target.value;
        setrePwd(inputrepwd);
    }
    const register=useSelector(state=>state.register)
    const {loading,userReg,error}=register;
    // useEffect(()=>{
    //     if(userInfo){
    //         props.history.push("/")
    //     }
    //     return ()=> {
    //     };
    // },[userInfo]); // if userInfo state change, if code will run

    return <div>
        <form className="form">
            <h1 className="h3 mb-3 font-weight-normal">Create Account</h1>
            <input onChange={nameHandler} type="text" name="name1" className="form-control my-4  size" placeholder="Enter your Name" required autofocus/>
            <input onChange={emailHandler} type="email"  name="email" className="form-control my-4 " placeholder="Enter your Username" required />
            <input onChange={pwdHandler} type="password"  name="password" className="form-control my-4 " placeholder="Create password" required />
            <input onChange={repwdHandler} type="password"  name="repassword" className="form-control my-4 " placeholder="Re-enter password" required />
            <Link to="/signin">
            <button className="btn btn-lg rounded-pill btn-dark btn-block my-4" type="submit"
            onClick={()=>dispatch(registerUser(name1,email,password))}>SignUp</button>
            </Link>
            <label class="label">Already have an account?</label><br/>
            <a class="register" href="/signin">SignIn</a>
        </form>
 
    </div>    
}
export default SigninScreen;
