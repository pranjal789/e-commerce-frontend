import axios from "axios";
import Axios from "axios";

const listProducts=()=>async(dispatch)=>{
    try{
    dispatch({type:"PRODUCT_LIST_REQUEST"});
    const {data}=await axios.get("/api/products");
    dispatch({type:"PRODUCT_LIST_SUCCESS",payload:data});
    }
    catch(error){
    dispatch({type:"PRODUCT_LIST_FAIL",payload:error.message});
    }
}
const saveProduct=(product)=>async(dispatch)=>{
    try {
        dispatch({type:"PRODUCT_SAVE_REQUEST",payload:product})
        console.log(!product._id);
        if(!product._id){
            const {data}=await Axios.post("/api/products",product)
        dispatch({type:"PRODUCT_SAVE_SUCCESS",payload:data})
        }
        else{
            const {data}=await Axios.put("/api/products/"+product._id,product)
            dispatch({type:"PRODUCT_SAVE_SUCCESS",payload:data})
        }
    } catch (error) {
        dispatch({type:"PRODUCT_SAVE_FAIL",payload:error.message})
    }
}
const deleteProduct=(productId)=>async(dispatch)=>{
    try {
        dispatch({type:"PRODUCT_DELETE_REQUEST",payload:productId})
            const {data}=await Axios.delete("/api/products/"+productId)
        dispatch({type:"PRODUCT_DELETE_SUCCESS",payload:data})   
    } catch (error) {
        dispatch({type:"PRODUCT_DELETE_FAIL",payload:error.message})
    }
}
const listDetails=(productId)=>async(dispatch)=>{
    try{
        dispatch({type:"PRODUCT_DETAILS_REQUEST"});
        const {data}=await axios.get("/api/products/"+productId);
        dispatch({type:"PRODUCT_DETAILS_SUCCESS",payload:data});
    }
    catch(error){
        dispatch({type:"PRODUCT_DETAILS_FAIL",payload:error.message});
    }
}



export  {listProducts,listDetails,saveProduct,deleteProduct};