import Axios from "axios";
import Cookie from "js-cookie";
const cartDetails=(productId,qty)=>async(dispatch,getState)=>{
    try{
        const {data}=await Axios.get("/api/products/"+productId);
        dispatch({type:"CART_PRODUCT_DETAILS",payload:{
                product:data._id,
                productImage:data.productImage,
                productName:data.productName,
                productBrand:data.productBrand,
                productPrice:data.productPrice,
                productRating:data.productRating,
                NoofReview:data.NoofReview,
                qty
        }        
    })
    const{cart:{cartItems}}=getState(); //part of setting cookie
    Cookie.set("cartItems",JSON.stringify(cartItems));//setting cookie
}catch(error){
        dispatch({type:"CART_DETAILS_FAIL",payload:error.message});
    }
}
const shippingProduct=(product)=>async(dispatch)=>{
dispatch({type:"SHIPPING_PRODUCT_SUCCESS",payload:product})
}

const removeFromCart=(productId)=>(dispatch,getState)=>{
    dispatch({type:"DELETE_FROM_CART",payload:productId})
    const{cart:{cartItems}}=getState(); //part of setting cookie
    Cookie.set("cartItems",JSON.stringify(cartItems));//setting cookie
}
export {cartDetails,removeFromCart,shippingProduct } 
