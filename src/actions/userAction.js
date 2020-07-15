import Axios from "axios";
import Cookie from "js-cookie";
const userCredential=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type:"USER_LOGIN_REQUEST"});
        const {data}= await Axios.post("/api/users/signin",{email,password})
        dispatch({type:"USER_LOGIN_SUCCESS",payload:data});
        Cookie.set('userInfo',JSON.stringify(data)); // saving in cookie
    }
    catch(error){
        dispatch({type:"USER_LOGIN_FAIL",payload:error.message})
    }
}
const registerUser=(name,email,password)=>async(dispatch)=>{
    try {
        console.log(name,email,password);
       dispatch({type:"USER_REGISTER_REQUEST"});
       const{data}=await Axios.post("/api/users/register",{name,email,password}); 
        dispatch({type:"USER_REGISTER_SUCCESS",payload:data});
        Cookie.set('userReg',JSON.stringify(data));
    } catch (error) {
        dispatch({type:"USER_REGISTER_FAIL",payload:error.message})
    }
}
export {userCredential,registerUser};