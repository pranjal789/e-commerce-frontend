function productListReducer(state={products:[]},action){
    switch(action.type){
        case "PRODUCT_LIST_REQUEST":
            return {
                loading:true ,products:[]       
            };
        case "PRODUCT_LIST_SUCCESS":
            return {
                loading:false,products:action.payload
            }
        case "PRODUCT_LIST_FAIL":
            return {
                loading:false,error:action.payload
            }
        default:
            return state;
    }
}
function productDetailReducer(state={product:{}},action){
    switch(action.type){
        case "PRODUCT_DETAILS_REQUEST":
            return{
                loading:true
            }
            case "PRODUCT_DETAILS_SUCCESS":
                return {
                    loading:false,product:action.payload
                }
            case "PRODUCT_DETAILS_FAIL":
                return {
                    loading:false,error:action.payload
                }
            default:
                return state;
    }
}
function productSaveReducer(state={product:{}},action){
    switch(action.type){
        case "PRODUCT_SAVE_REQUEST":
            return{
                loading:true
            }
            case "PRODUCT_SAVE_SUCCESS":
                return {
                    loading:false,SUCCESS:true,product:action.payload
                }
            case "PRODUCT_DETAILS_FAIL":
                return {
                    loading:false,error:action.payload
                }
            default:
                return state;
    }
}
function deleteProductReducer(state={product:{}},action){
    switch(action.type){
        case "PRODUCT_DELETE_REQUEST":
            return{
                loading:true
            }
            case "PRODUCT_DELETE_SUCCESS":
                return {
                    loading:false,DELETE:true,product:action.payload
                }
            case "PRODUCT_DELETE_FAIL":
                return {
                    loading:false,error:action.payload
                }
            default:
                return state;
    }
}

export  {productListReducer,productDetailReducer,productSaveReducer,deleteProductReducer};