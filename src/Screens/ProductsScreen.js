import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { saveProduct,listProducts,deleteProduct } from "../actions/productActions";

function ProductsScreen(props){
    const[category,setcategory]=useState("");
    const[id,setId]=useState("");
    const[productImage,setproductImage]=useState("");
    const[productName,setproductName]=useState("");
    const[productBrand,setproductBrand]=useState("");
    const[productPrice,setproductPrice]=useState("");
    const[productRating,setproductRating]=useState("");
    const[detail,setdetail]=useState("");
    const[quantityAvailable,setquantityAvailable]=useState("");
    const[description,setdescription]=useState("");
    const[modelVisible,setmodelVisible]=useState(false);
        
    const openModel=(product)=>{
        setId(product._id);
        setcategory(product.category);
        setproductImage(product.productImage);
        setproductName(product.productName);
        setproductBrand(product.productBrand);
        setproductPrice(product.productPrice);
        setproductRating(product.productRating);
        setdetail(product.detail);
        setquantityAvailable(product.quantityAvailable);
        setdescription(product.description);
        setmodelVisible(true);
      }

    const dispatch=useDispatch();
    const productSave=useSelector(state=>state.productSave)
    const {loading:loadingSave,SUCCESS:successSave,error:errorSave}=productSave;
    const productList=useSelector(state=>state.productList);
    const {loading,products,error}=productList;
    const productDelete=useSelector(state=>state.productDelete);
    const {loading:loadingDelete,DELETE:successDelete,error:errorDelete}=productDelete;
    useEffect(()=>{ 
    if(successSave){
          setmodelVisible(false);
      }
       dispatch(listProducts());
       return ()=>{
         //
       }
    },[successSave,successDelete]); // if  state change, if code will run
    
    return <div className="content content-margined">
      {modelVisible &&
      <div className="product-box">
      <h2 className="create-header">Create Product</h2>
      <form className="form mg-1">
      <label>Product Name</label>
      <input className="form-control my-2" onChange={(e)=>setproductName(e.target.value)} type="text" name="productName" value={productName} />
      <label>Product Image</label>
      <input className="form-control my-2" onChange={(e)=>setproductImage(e.target.value)} type="text" name="productImage" value={productImage} />      
      <label>Product Category</label>
      <input className="form-control my-2" onChange={(e)=>setcategory(e.target.value)} type="text" name="category" value={category} />
      <label>Product Price</label>
      <input className="form-control my-2" onChange={(e)=>setproductPrice(e.target.value)} type="number" name="productPrice" value={productPrice} />
      <label>Product Brand</label>
      <input className="form-control my-2" onChange={(e)=>setproductBrand(e.target.value)} type="text" name="productBrand" value={productBrand} />
      <label>Product Rating</label>
      <input className="form-control my-2" onChange={(e)=>setproductRating(e.target.value)} type="number" name="productRating" value={productRating} />
      <label>Product Detail</label>
      <input className="form-control my-2" onChange={(e)=>setdetail(e.target.value)} type="text" name="detail" value={detail}/>
      <label>Quantity Avaialble</label>
      <input className="form-control my-2" onChange={(e)=>setquantityAvailable(e.target.value)} type="number" name="quantityAvailable" value={quantityAvailable}/>
      <label>Product Description</label>
      <textarea onChange={(e)=>setdescription(e.target.value)} type="text" name="description" value={description}/>
      <button className="btn btn-lg btn-dark btn-block" onClick={()=>dispatch(saveProduct({_id:id,productName,productImage,category,
      productPrice,productBrand,productRating,detail,quantityAvailable,description}))} >{id?"Update":"Create"}</button>
      <button className="btn btn-lg btn-dark btn-block" onClick={()=>{
        setmodelVisible(false);
      }}>Back</button>
      </form>
    </div>}
      <div >
      <table className="table create-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Qty Available</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product=>(
            <tr>
            <td>{product._id}</td>
            <td>{product.productName}</td>
            <td>{product.productPrice}</td>
            <td>{product.category}</td>
            <td>{product.productBrand}</td>
            <td>{product.quantityAvailable}</td>
            <td>
              <button className="btn btn-dark btn-sm mr-1" onClick={()=>openModel(product)}>Edit</button>
              <button className="btn btn-dark btn-sm" onClick={()=>dispatch(deleteProduct(product._id))}>Delete</button>
            </td>
            </tr>))}
        </tbody>
      </table> 
    </div>
    <div >
        <button className="btn btn-dark btn-lg" onClick={()=>openModel({})}>Create Product</button>
      </div>
    </div>
           
}
export default ProductsScreen;
