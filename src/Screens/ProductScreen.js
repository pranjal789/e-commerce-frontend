import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { listDetails } from "../actions/productActions";
import { useAlert } from "react-alert";

function ProductScreen(props){
    const alert = useAlert();
    const dispatch=useDispatch();
    const productDetails=useSelector(state=>state.productDetails);
    const [change,setchange]=useState(true);
    const {product,loading,error}=productDetails;
    // const cartColor=()=>{
    //   document.querySelector(".header-links a").classList.add("color-change");
    // }
    useEffect(()=>{
        dispatch(listDetails(props.match.params.id));
        // document.querySelector(".header-links a").classList.add("color-change");
        return ()=> {
        };
    },[]);
    const arr=[];
    const cart=useSelector(state=>state.cart);
    const {cartItems}=cart;
    cartItems.map(prod=>{
      arr.push(prod.product);
    })  
    const fil=arr.filter(id=>id===props.match.params.id);
    
    console.log(fil);
    const[qty,setqty]=useState(1);
    return <div className="prd">
    <div className="back-home"><Link to="/"><i class="fas fa-home fa-1x color"></i></Link></div>
    {loading?<div>Loading...</div>:
    error?<div>{error}</div>:
    (
        <div class="container con-detail">

  <div class="row">

    <div class="col-md-8">
      <img class="img-fluid" src={product.productImage} alt=""/>
      <Link to={"/cart/"+product._id}>
  <button onClick={()=>{
    alert.success("Added to cart")
  }} type="button" className="btn btn-dark btn-lg download-button">
  <i class="fas fa-cart-plus"></i>{fil[0]?" Go to Cart":"Add to Cart"}</button>
      </Link>
    </div>
    <div class="col-md-4">
      <h3 class="my-3">Description</h3>
      <p>{product.description}</p>
      <h3 class="my-3">Details</h3>
        Lorem Ipsum<br/>
        Dolor Sit Amet<br/>
        Consectetur<br/>
        Adipiscing Elit<br/>
    </div>
  </div>
  </div>
    )}
    </div>
}
export default ProductScreen;
