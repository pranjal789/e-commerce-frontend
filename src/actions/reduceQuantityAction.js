import Axios from "axios";

const reduceQuantity=(cart)=>async(dispatch)=>{
try {
    
    const {data}=await Axios.get("/api/products/quantity/"+cart);
    dispatch({type:"QUANTITY_DELETE_SUCCESS",payload:data});
} catch (error) {
    dispatch({type:"QUANTITY_DELETE_FAILED",payload:error.message})
}
}

export {reduceQuantity};