import React, {useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {listProducts} from "../actions/productActions";
import Cookie from "js-cookie";
function HomeScreen(){
    //process    to fetch data from api which is at(api/products)
    const [search,setSearch]=useState("");    
    const productList=useSelector(state=>state.productList)
    const {products,loading,error}=productList;  
    const qty=1;
    var filt=products.filter(product=>product.productName.toLowerCase()
    ==search.toLowerCase()) ;
    // if(filt.length>0){
    // var suc= filt[0].productName;
    // }
    const [name,setname]=useState("Add to Cart");
    const cart=useSelector(state=>state.cart);
    const {cartItems}=cart;
    const dispatch=useDispatch();
  function find(){
    if(filt.length>0){
       var suc= filt[0].category;
       }
      
  }
  const login=useSelector(state=>state.userReducer)
  const {userInfo}=login;
  const[logout, setlogout]=useState(true);
  const refreshPage=()=>{
      window.location.reload(false);
  } 
  
    useEffect(()=>{
            dispatch(listProducts());
            return ()=> {
            };
    },[]);
    return loading? <div>Loading...</div> :
        error ? <div>{error}</div>:
        <div>
       <div>
    <section id="title" className="colored-section">
    <div className="container-fluid">
    <div className="header-links">
     
                <a className="head-cart mr-4" href="/cart/:id"><i class="fas fa-cart-plus pr-1"/><span class="badge badge-pill badge-dark">{cartItems.length}</span></a>
                <a className="link">{userInfo &&logout ? <div><i className="fas fa-user fa-1x pr-1 "/>
                {userInfo.name}</div>:<a class="sign" href="/signin">Signin</a>}</a>
                {userInfo && 
                <button onClick={()=>{
                    setlogout(false);
                    Cookie.set('userInfo',JSON.stringify("")) ;
                    refreshPage();
                }} className="Signout"><a href="/signin">Signout</a></button>}
                </div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand logo" href="/"><i class="fas fa-atom"></i></a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <input onChange={e=>{
              setSearch(e.target.value);
            }} className="search" type="text" placeholder="Search"/>
               <a className="find ml-1" href="#laptop"><i class="fas fa-search"></i></a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#laptop">
            Laptop
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
            Mobile
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#cta">
            Accessories
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#cta">
              Support
            </a>
          </li>
        </ul>
       
      </nav>
        <div classname="in">
          <h1 className="tech">Techie Stop!</h1>
          <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple"></i> Download</button>
          <button type="button" className="btn btn-outline-light btn-lg download-button"><i className="fab fa-google-play"></i> Download</button> 
        </div> 
        <div className="inl">
          <img className="apple" src="images/apple" alt="iphone-mockup"/>
          </div>
    </div>
  </section>
  </div>
       <section id="laptop">
    <div class="container-fluid">
    <h2 class="category">Laptop</h2>
       <div class="row">
        {   
            search?filt.map(find=>
              <div class="prod-col col-lg-4 col-md-12 col-sm-12">     
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h2 class="name">{find.productName}</h2>
            <Link to={"/product/"+find._id}>
            <img className="image" src={find.productImage}></img>
            </Link>
            <p class="card-text"><i class="fas fa-rupee-sign mt-2" ></i> <strong>{find.productPrice}</strong></p>    
          </div>
        </div>
      </div>
            ):
            products.map(product=> 
       product.category=="Laptop"&&         
      <div class="prod-col col-lg-4 col-md-12 col-sm-12">     
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h2 class="name">{product.productName}</h2>
            <Link to={"/product/"+product._id}>
            <img className="image" src={product.productImage}></img>
            </Link>
            <p class="card-text"><i class="fas fa-rupee-sign mt-2" ></i> <strong>{product.productPrice}</strong></p>    
          </div>
        </div>
      </div>
      
        )}
  
        </div>
        {!search && <div>
        <h2 class="category">Smart Phones</h2>
        <div class="row">
        {
          
            products.map(product=> 
            
       product.category=="mobile"&&         
      <div class="prod-col col-lg-4 col-md-12 col-sm-12">     
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h2 class="name">{product.productName}</h2>
            <Link to={"/product/"+product._id}>
            <img className="img-fluid img-mob" src={product.productImage}></img>
            </Link>
            <p class="card-text"><i class="fas fa-rupee-sign mt-2" ></i> <strong>{product.productPrice}</strong></p>    
          </div>
        </div>
      </div>
      
        )}
        
        </div>
        </div>
        }
        </div>
      </section>
      
      </div>
}
export default HomeScreen; 