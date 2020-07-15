import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {cartDetails,removeFromCart} from "../actions/cartActions"
function CartScreen(props){
    // const qty=props.location.search ? Number(props.location.search.split("=")[1]):1;
    // const product= data.products.find(x=> x._id==props.match.params.id);
    const user=useSelector(state=>state.userReducer);
    const{userInfo}=user;
    console.log(user)
    const[qty,setQty]=useState(1);
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart);
    const {cartItems}=cart;
    const productId=props.match.params.id;
    const[name,setName]=useState("");
    useEffect(()=>{
        if(productId){
            dispatch(cartDetails(productId,qty))
        };
    },[])

    const total=cartItems.reduce((a,c)=>a+(c.productPrice)*c.qty,0);
    const ship=total<500?50:0;
    return( 
      
    <div class="container cart-container">
    <div className="back-home"><Link to="/"><i class="fas fa-home fa-1x color"></i></Link></div>
      <div class="row">
        <div class="col-lg-12">
         
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <h3 >PRODUCT</h3>
                  </th>
                  <th >
                    <h3 >PRICE</h3>
                  </th>
                  <th >
                    <h3 >QUANTITY</h3>
                  </th>
                  <th>
                    <h3 >DELETE</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
              {cartItems.map(product=>{
                  return(
                <tr >
                  <td >
                      <img src={product.productImage} alt="" width="70" class="align-middle img-fluid cart-img mb-3"/>
                      <a href="/" class=" prd-name text-dark align-middle">{product.productName}</a>
                      </td>
                  <td class="align-middle price"><strong>{product.productPrice}</strong></td>
                  <td class="align-middle qty">

                <strong> Qty :<select class="select" value={product.qty} onChange={(e)=>{dispatch(cartDetails(product.product,e.target.value))}}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select></strong> 
                  </td>
                  <td class="align-middle sub"><button onClick={()=>dispatch(removeFromCart(product.product))} class="text-dark delete"><i class="fa fa-trash"></i></button></td>
                </tr>)})}   
       
		  </tbody>
		  </table>
      </div>
      </div>

      <div class="row ">
        <div class="col-lg-12">
          <h3 class="rounded-pill py-3 font-weight-bold">Order summary </h3>
          <div class="p-4">
            <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul class="list-unstyled ">
             
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>{total}</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>{ship}</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                <h5 class="font-weight-bold">{total+ship}</h5>
              </li>
            </ul>
            <a href={userInfo?"/shipping":"/signin"} class="btn btn-dark rounded-pill py-2 ">Procceed to checkout</a>
            
          </div>
        </div>
      </div>  
      </div>     
    ) 
}
export default CartScreen;