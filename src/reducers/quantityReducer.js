const quantityReducer=(state={},action)=>{
    
    switch(action.type){
        case "QUANTITY_DELETE_SUCCESS":
            return {delete:action.payload};
        case "USER_REGISTER_FAIL":
            return {error:action.payload};
        default:
            return state;
    }
}
export {quantityReducer};