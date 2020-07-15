const cartReducer=(state={cartItems:[]},action)=>{
    switch (action.type){
        case "CART_PRODUCT_DETAILS":
            const item=action.payload;
            const product =state.cartItems.find(x=>x.product==item.product);
            if(product){
                return{cartItems:state.cartItems.map(x=>x.product==product.product?item:x)}
            }
            else{
                return {cartItems:[...state.cartItems,item]}
            }
        case "DELETE_FROM_CART":
                return {cartItems:state.cartItems.filter(x=>x.product!=action.payload)}
            default:
                return state;
        
        case "SHIPPING_PRODUCT_SUCCESS":
            return {...state,shipping:action.payload}
    }
}
export {cartReducer};