const initialState = {
   rak: [],
   rakeDetail: [],
  };
  
  const rakReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_RAK") {
      return {
        ...state,
        product: action.payload,
      };
    } else if (action.type === "GET_DETAIL_RAK") {
      return {
        ...state,
        productDetail: action.payload,
      };
    } else if (action.type === "CREATE_RAK") {
      return state;
    } else if (action.type === "UPDATE_RAK") {
      return state;
    } else if (action.type === "DELETE_RAK") {
      return state;
    } else {
      return state;
    }
  };
  
  export default rakReducer;
  